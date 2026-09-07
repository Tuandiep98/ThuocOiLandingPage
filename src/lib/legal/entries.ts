import { getCollection, type CollectionEntry } from "astro:content";
import { SLUG_BY_TYPE, type DocumentType } from "./loader";

export type LegalEntry =
  | { slug: string; kind: "document"; entry: CollectionEntry<"legalDocuments"> }
  | { slug: string; kind: "page"; entry: CollectionEntry<"legalPages"> };

// Gộp 2 collection (legalDocuments: fetch Supabase lúc build, legalPages: file .md tĩnh) thành
// một danh sách slug thống nhất theo locale, để route dùng chung một cách render.
export async function getLegalEntries(locale: "vi" | "en"): Promise<LegalEntry[]> {
  const documents = await getCollection("legalDocuments", (e) => e.data.locale === locale);
  const pages = await getCollection("legalPages", (e) => e.data.locale === locale);

  return [
    ...documents.map((entry) => ({
      slug: SLUG_BY_TYPE[entry.data.documentType as DocumentType],
      kind: "document" as const,
      entry,
    })),
    ...pages.map((entry) => ({
      slug: entry.data.page,
      kind: "page" as const,
      entry,
    })),
  ];
}
