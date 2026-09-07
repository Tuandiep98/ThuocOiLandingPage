import type { Loader } from "astro/loaders";
import { z } from "astro/zod";

const DOCUMENT_TYPES = ["privacy_policy", "terms_of_service"] as const;
const LOCALES = ["vi", "en"] as const;
const SLUG_BY_TYPE = {
  privacy_policy: "privacy",
  terms_of_service: "terms",
} as const;

type DocumentType = (typeof DOCUMENT_TYPES)[number];
type Locale = (typeof LOCALES)[number];

interface LegalDocumentRow {
  document_type: DocumentType;
  locale: Locale;
  version: string;
  title: string;
  content_markdown: string;
  effective_at: string;
  published_at: string;
}

// Fetch 4 bản ghi (privacy/terms x vi/en) từ view legal_document_current của Supabase lúc build
// — view này đã lọc RLS chỉ trả về bản published hiện hành, đúng 1 dòng mỗi tổ hợp document_type
// + locale. Fail loudly (throw) nếu Supabase lỗi hoặc thiếu dòng, không âm thầm publish trang
// thiếu nội dung pháp lý.
export function supabaseLegalLoader(options: { url: string; anonKey: string }): Loader {
  return {
    name: "supabase-legal-loader",
    schema: z.object({
      documentType: z.enum(DOCUMENT_TYPES),
      locale: z.enum(LOCALES),
      version: z.string(),
      title: z.string(),
      effectiveAt: z.coerce.date(),
      publishedAt: z.coerce.date(),
    }),
    load: async ({ store, renderMarkdown, parseData, logger }) => {
      store.clear();

      for (const documentType of DOCUMENT_TYPES) {
        for (const locale of LOCALES) {
          const endpoint = new URL("/rest/v1/legal_document_current", options.url);
          endpoint.searchParams.set(
            "select",
            "document_type,locale,version,title,content_markdown,effective_at,published_at",
          );
          endpoint.searchParams.set("document_type", `eq.${documentType}`);
          endpoint.searchParams.set("locale", `eq.${locale}`);

          const res = await fetch(endpoint, {
            headers: {
              apikey: options.anonKey,
              Authorization: `Bearer ${options.anonKey}`,
            },
          });
          if (!res.ok) {
            throw new Error(
              `[legal loader] Supabase trả về ${res.status} cho ${documentType}/${locale}: ${await res.text()}`,
            );
          }

          const rows: LegalDocumentRow[] = await res.json();
          if (rows.length !== 1) {
            throw new Error(
              `[legal loader] kỳ vọng đúng 1 dòng cho ${documentType}/${locale}, nhận được ${rows.length}`,
            );
          }
          const row = rows[0];
          const id = `${SLUG_BY_TYPE[documentType]}-${locale}`;

          const data = await parseData({
            id,
            data: {
              documentType: row.document_type,
              locale: row.locale,
              version: row.version,
              title: row.title,
              effectiveAt: row.effective_at,
              publishedAt: row.published_at,
            },
          });

          store.set({ id, data, rendered: await renderMarkdown(row.content_markdown) });
          logger.info(`[legal loader] đã nạp ${id} (v${row.version})`);
        }
      }
    },
  };
}

export { SLUG_BY_TYPE };
export type { DocumentType, Locale };
