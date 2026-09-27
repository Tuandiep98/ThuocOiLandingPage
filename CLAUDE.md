# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Marketing landing page for **Thuốc ơi**, a Vietnamese Flutter app that reads prescription photos with AI and turns them into medication reminders (see `github.com/Tuandiep98/thuocoi` for the app itself — this repo does not contain the app, only its landing page). Static site built with [Astro](https://astro.build), no UI framework — plain `.astro` components, no client-side JS beyond native `<details>` for the FAQ accordion.

The brief for this site: rank well organically (SEO), be easy for AI answer engines / crawlers to parse (AI-SEO), and be fast/accessible. That goal shapes most of the architecture decisions below — prefer static HTML content over client-rendered content, real product screenshots over stock imagery, and grounded copy over marketing fluff.

## Commands

```bash
npm run dev             # start dev server in background (astro's own daemon — see below)
npm run build            # production build to dist/ (also runs image optimization + sitemap)
npm run preview          # serve the dist/ build locally
npx astro check           # type-check .astro files (run before considering a change done)
node scripts/generate-images.mjs   # regenerate favicons/app-icons/OG image from src/assets/brand/icon_1024.png
```

`npm run dev` launches Astro's own background dev server (it prints a pid and returns immediately — this is expected, not a crash). Manage it with `npx astro dev stop`, `npx astro dev status`, `npx astro dev logs`.

There are no automated tests in this repo (no test framework installed) — `astro check` plus a production `build` are the correctness gate.

## Architecture

**Content lives in one place, not scattered across components.** `src/data/site.ts` is the single source of truth for all page copy: app name/tagline/description, `storeLinks` (App Store/Google Play URLs), `trustPoints`, `howItWorks` steps, `features` (each tied to a real screenshot filename), `plans` (pricing), and `faqs`. Components (`src/components/*.astro`) are pure presentation — they import from `site.ts` and map over it. When asked to change copy, edit `site.ts`, not the component markup.

**Every piece of visual content is a real product asset, not stock art or an invented icon.** `src/assets/brand/` holds the app icon and real App Store marketing screenshots, copied from the `thuocoi` Flutter repo (`assets/icon/`, `assets/store_screenshots/iphone/`). `Features.astro` resolves a screenshot by filename via `import.meta.glob('../assets/brand/*.png', { eager: true })` and Astro's `<Image>` component (auto WebP + responsive `widths`/`sizes` — this is where most of the Lighthouse performance budget comes from, screenshots go from ~500–700KB PNG down to ~10–100KB WebP per breakpoint). If you add a new feature block, source a real screenshot the same way rather than adding an icon/illustration.

**Design tokens live in `src/styles/global.css`** as CSS custom properties (`--pine`, `--leaf`, `--amber`, `--paper`, the `--fs-*` type scale, `--space-*`). Component `<style>` blocks are Astro-scoped (auto-hashed), so styling a new component should reference the tokens rather than hardcoding colors/sizes. Fonts (`Baloo 2` for display/headings, `Be Vietnam Pro` for body) are self-hosted via `@fontsource/*` imports in `global.css`, not loaded from Google Fonts CDN — both packages ship Vietnamese-subset glyphs, which matters since this site is Vietnamese-only (`lang="vi"`, no i18n routing).

**SEO/AI-crawler surface is spread across a few specific files** — when changing site-wide metadata, all of these may need updating together:

- `src/layouts/BaseLayout.astro` — `<head>`: title/description/canonical, OG/Twitter tags, favicon links, and renders a `jsonLd` prop (array of schema.org objects) as `<script type="application/ld+json">` blocks.
- `src/pages/index.astro` — builds the actual `jsonLd` array (`MobileApplication` + `FAQPage`, the latter generated from `faqs` in `site.ts` so the visible FAQ text and the structured data can't drift apart).
- `public/robots.txt`, `public/llms.txt` — llms.txt is the emerging AI-crawler convention (Markdown summary of what the product is/does/costs); keep it in sync with `site.ts` facts, don't let it drift into marketing copy.
- `astro.config.mjs` — `SITE_URL` constant drives canonical URLs and sitemap generation (`@astrojs/sitemap` integration, output at `/sitemap-index.xml`).
- `scripts/generate-images.mjs` — a one-off Node/sharp script (not part of the build) that generates `public/favicon-*.png`, `public/apple-touch-icon.png`, `public/icon-{192,512}.png`, and `public/og-image.png` from the real app icon. Re-run it manually if `icon_1024.png` changes; its output is committed to `public/`, not regenerated on every build.

`BaseLayout.astro` also emits the `apple-itunes-app` and `google-play-app` meta tags (values from `storeLinks.appStoreId`/`androidPackageId` in `site.ts`) — these are what makes Safari/iOS and Chrome/Android show a native "open/install this app" banner at the top of the page. They only render in real mobile browsers (Safari on iOS, Chrome on Android), not in desktop dev tools device emulation, so test on an actual phone.

**Heading hierarchy is intentionally exactly one `<h1>` (hero) → four `<h2>`s (one per major section: How it works, Features, Pricing, FAQ) → `<h3>`s for repeated items within each (steps/features/plans/FAQ questions).** This is deliberate for SEO/AI-parsing, not incidental — preserve it when adding sections rather than reaching for `<h4>`/skipping levels or using non-heading tags for section titles.

## Blog content workflow

This site runs a **one-new-post-per-day** content workflow targeting informational search queries
the landing page itself doesn't cover — the landing page targets branded/transactional intent
("Thuốc ơi", "app nhắc uống thuốc"), the blog targets questions people search before they know the
app exists ("quên uống thuốc 1 lần có sao không", "cách đọc đơn thuốc").

**Where posts live:** `src/content/blog/*.md`, defined by the `blog` collection in
`src/content.config.ts` (Astro content layer, `glob()` loader). Rendered at `/blog/<slug>/` via
`src/pages/blog/[slug].astro`; `src/pages/blog/index.astro` lists all posts newest-first. Both
pages reuse `Header`/`Footer`/`BaseLayout` directly, same pattern as `index.astro`/`404.astro` —
no separate blog layout component. `[slug].astro` also renders, automatically: the byline
("Biên tập bởi đội ngũ Thuốc ơi" → `/chinh-sach-bien-tap/`), the per-post medical disclaimer, the
FAQ section + `FAQPage` JSON-LD (from frontmatter `faqs`), the sources list (from `sources`),
`dateModified` (from `updatedDate`), related posts and the breadcrumb — nothing to author for these
beyond the frontmatter fields.

**Editorial policy page:** `src/pages/chinh-sach-bien-tap.astro` describes the real process (AI-
assisted drafting, reviewed by the team before publishing, periodic refresh, **no doctor/pharmacist
review yet**). Keep it truthful — if a real licensed reviewer ever joins, update that page and only
then consider adding a `reviewedBy` field. Never claim or imply a post was written/reviewed by a
bác sĩ/dược sĩ otherwise.

**Topic strategy — search demand first, not audience-slicing.** The first ~43 posts (2026-09-04 →
2026-09-26) sliced one message ("the app helps X remember meds") across ever-narrower audience
segments; that produced near-zero-volume keywords and templated near-duplicate posts (a Google
scaled-content / helpful-content risk, worse on a young domain in a YMYL niche). Don't add more
posts of that shape. New posts should target a real question people search, within these clusters
(backlog in `blog-notes.md`):

1. Uống thuốc đúng cách — general principles (quên liều, trước/sau ăn, khoảng cách giữa các liều,
   bảo quản thuốc), always deferring specifics to the leaflet + bác sĩ/dược sĩ.
2. Đơn thuốc & giấy tờ y tế — đọc đơn, đơn thuốc điện tử, lĩnh thuốc BHYT, mất đơn thuốc. Only state
   policy/procedure facts that were verified against an official source in the same session.
3. Thói quen dùng thuốc cho bệnh mạn tính phổ biến (tăng huyết áp, tiểu đường, mỡ máu, tuyến giáp…)
   — angle is habit/adherence/reminders, never drug choice or dosing.
4. Chăm sóc người thân (người già, trẻ nhỏ) — already heavily covered; prefer refreshing existing
   posts over new ones here.
5. Seasonal — mùa cúm/sốt xuất huyết ("khi nào cần đi khám", never which drug), mang thuốc về quê
   ăn Tết (publish from mid-December), nhập học, du lịch hè. Check `blog-notes.md`'s seasonal list.

Before writing, check `blog-notes.md` so the query isn't already covered (by keyword *intent*, not
just wording) — if an existing post covers the same intent, refresh that post instead.

**Post format (new posts):**

- Right under the title (first paragraph of the body): a direct 40–60-word answer to the target
  question — this is what AI answer engines / featured snippets quote.
- `## ` sections that genuinely answer the question; checklist or table only where it helps.
- A `## Khi nào nên hỏi bác sĩ, dược sĩ` section (or equivalent) with concrete "see a professional"
  triggers, phrased generally.
- App mention ≈ at most a quarter of the post, in one section — not every section a feature pitch.
- Frontmatter `faqs` with 3–4 real follow-up questions (plain-text answers, same guardrails).
- Frontmatter `sources`: only official pages (Bộ Y tế / Cục Quản lý Dược / WHO / major hospitals)
  that were actually fetched and confirmed to support the claim in this session. If nothing could
  be verified, omit `sources` — never invent or guess a URL.

**Guardrails — YMYL + Vietnamese drug-advertising law (Luật Dược, Luật Quảng cáo). A post that
would need to break any of these to be useful should not be written.**

- Never name a specific drug/brand/active ingredient together with a dose or use; never recommend,
  compare, or rate medicines; never say "chữa khỏi", "cam kết", "hiệu quả 100%".
- Never tell the reader to start, stop, skip, double up, or change a dose — "quên liều thì làm gì"
  must defer to the leaflet and the prescriber/pharmacist.
- Never diagnose, never interpret symptoms beyond "đi khám/gọi cấp cứu khi…".
- Never invent statistics, studies, quotes, testimonials, or reviews.
- Never claim or imply authorship/review by a doctor or pharmacist.
- Off-limits topics entirely: thuốc gây nghiện/hướng thần, phá thai, thuốc giảm cân, thuốc cường
  dương, tự mua/tự dùng kháng sinh, liều thuốc cho trẻ em hoặc phụ nữ mang thai.
- Anything the post says the app *does* must trace back to `site.ts` / the real app's
  README/CLAUDE.md (e.g. the app does not check drug interactions — don't imply it).

**Per-post requirements (all must hold before a post counts as done):**

- Frontmatter: `title`, `description` (~120–160 chars, unique per post), `publishDate`,
  `keyword` (primary target query, used for `blog-notes.md` tracking — not rendered, not a meta
  keywords tag), `segment` (rendered as the eyebrow label on the post), `faqs`, and `sources` when
  verified sources exist. Set `updatedDate` only when an existing post's content is refreshed.
- Exactly one `<h1>` (post title, from frontmatter — not repeated in the Markdown body), `<h2>`
  for major sections within the post, `<h3>` only if a section genuinely needs sub-points — same
  no-skipped-levels discipline as the landing page. (The FAQ block renders its own `<h2>`/`<h3>`.)
- The CTA block (rendered by `[slug].astro`) links to `storeLinks.appStore`/`googlePlay` and
  `#tinh-nang`/`#bang-gia` — don't hardcode those URLs in post Markdown. Internal links to other
  relevant posts (`/blog/<slug>/`) inside the body are encouraged where they genuinely help.
- **CTA customization (new posts only — do not retrofit posts published before 2026-09-17):**
  set frontmatter `ctaTitle`/`ctaDescription` to copy specific to this post's angle (grounded in
  `site.ts`). Omitting them falls back to the site-wide default CTA in `[slug].astro`; the
  download-button row and the "xem thêm tính năng/bảng giá" links are always the shared hardcoded
  markup — never customize those.
- **Image (optional, most posts should still have none):** only set frontmatter `imageTag` to a
  `tag` from `src/data/blog-images.ts` (`blogImages`), and only when that entry's `usedWhen`
  genuinely matches this post's core focus. Never invent a new crop — if nothing matches, leave
  `imageTag` unset. New crops (via `scripts/prepare-blog-image.mjs`, sourced from real screenshots
  in `src/assets/brand/*.png`) are added to `blog-images.ts` by hand in an interactive session, not
  by the two automated routines.
- `npx astro check` and `npm run build` both clean before considering the post done. The build
  needs `SUPABASE_URL`/`SUPABASE_ANON_KEY` (see Legal pages below).

**`blog-notes.md`** (repo root) is the source of truth for what's covered: one entry per post under
a `## YYYY-MM-DD` header (slug, title, keyword, segment, angle), a `## Bài đã làm mới` log for
refreshes, and the backlog/seasonal lists. Read it first, never start from a blank slate.

**Automated routines (Claude Code cloud routines, two per day, both open PRs — never push to
`main`):**

- **Morning (~09:00 giờ VN) — new post.** Skip if `blog-notes.md` already has an entry dated today.
  Otherwise pick the top backlog item (or research a new question in the clusters above), write one
  post meeting everything above, update `blog-notes.md`, run check + build, commit on a branch
  `blog/YYYY-MM-DD`, push that branch and open a PR to `main`.
- **Evening (~20:00 giờ VN) — maintenance, no new post.** Refresh one existing post (prefer the
  oldest not yet refreshed: add answer-first intro, `faqs`, verified `sources`, internal links,
  guardrail fixes, trim repetitive feature pitch; set `updatedDate`), and top up the backlog to at
  least 10 items with real search questions in the clusters. Log it under `## Bài đã làm mới`.
  Branch `blog-maintenance/YYYY-MM-DD`, PR to `main`.
- The user reviews and merges PRs; merging to `main` is what deploys (Cloudflare, see Deployment).

**Trigger: user asks to create a blog post interactively** (e.g. "tạo blog", "viết bài blog hôm
nay") — same rules: check today's entry in `blog-notes.md` (one new post per day unless the user
explicitly overrides), write the post, run check + build (delete `dist/` afterwards), then **stop
and summarize — do not commit or push** until the user confirms; after confirmation, update
`blog-notes.md`, commit and push to `main`.

## Legal pages (privacy, terms, account deletion, support)

`/legal/privacy/`, `/legal/terms/`, `/legal/account-deletion/`, `/legal/support/` (plus an
`/en/` variant of each — these 4 pages are bilingual, the only bilingual section of an otherwise
Vietnamese-only site) live entirely in this repo, replacing what used to be a separate site
(`ThuocOiPublicPage`, kept around only as a temporary redirect target — do not resurrect content
there instead of here).

**Two content collections in `src/content.config.ts`, not one** — a collection can only have one
loader:

- `legalDocuments` — Privacy Policy/Terms of Service. A custom loader (`src/lib/legal/loader.ts`,
  `supabaseLegalLoader`) fetches the 4 rows (privacy/terms × vi/en) from a Supabase Postgres view,
  `legal_document_current`, **at build time** — not runtime. Nothing client-side ever touches
  Supabase; the anon key only runs inside the Node build process. The loader throws (failing the
  whole build) on any non-2xx response or a row count ≠ 1 for any document_type/locale
  combination — never silently ship a page missing its legal content.
- `legalPages` — account-deletion/support, static bilingual Markdown in `src/content/legal/*.md`,
  loaded via `glob()` exactly like the `blog` collection (not Supabase-backed; edit these files
  directly for copy changes).

`src/lib/legal/entries.ts` (`getLegalEntries(locale)`) merges both collections into one slug list
per locale, consumed by the two route files `src/pages/legal/[slug]/index.astro` (vi) and
`.../en.astro` (en) — two explicit files rather than an Astro optional-param route, and rendered
through the shared `src/layouts/LegalLayout.astro` (build-time table of contents from each
entry's `headings`, a language-switch link, no client JS).

**Env vars**: `SUPABASE_URL`/`SUPABASE_ANON_KEY`, read via `import.meta.env` in
`content.config.ts` — deliberately **not** `PUBLIC_`/`VITE_`-prefixed, since nothing client-side
should ever need them. Required in three places to build successfully: a local `.env` (see
`.env.example`, already gitignored), the `SUPABASE_URL`/`SUPABASE_ANON_KEY` GitHub Actions repo
secrets (wired into `.github/workflows/deploy-github-pages.yml`), and Cloudflare's dashboard
environment variables for the Git-connected production build (not represented in any repo file —
configure manually in Workers & Pages → this project → Settings → Variables and Secrets).

**Rebuilds are manual.** A new Supabase-published legal document does not auto-trigger a
Cloudflare rebuild (deliberately — no webhook was set up). After publishing a new version in
Supabase, someone needs to manually redeploy (push a commit, or "Retry deployment" in the
Cloudflare dashboard) for the change to actually appear on `thuocoi.com`.

## Deployment

Production is **Cloudflare Workers Static Assets** (not classic Cloudflare Pages), serving the real domain `thuocoi.com` — connected via the Cloudflare dashboard to this repo's `main` branch (build command `npm run build`, output `dist`). `wrangler.jsonc` at the repo root declares `assets.directory: "./dist"` with no adapter and no bindings; it exists specifically so Cloudflare's Git-connected build doesn't auto-run `astro add cloudflare` (its framework auto-config for Astro), which installs the `@astrojs/cloudflare` SSR adapter — unneeded since this site is fully static (`output: "static"`), and at the time this was set up, broken against Astro 7.x (`MISSING_EXPORT renderForPrerender`). Don't remove `wrangler.jsonc` or let it drift into declaring an adapter/bindings unless the site actually gains a server-rendered route.

`.github/workflows/deploy-github-pages.yml` separately auto-deploys `main` to `tuandiep98.github.io/ThuocOiLandingPage/` as a secondary preview (GitHub Pages, `base: /ThuocOiLandingPage/`) — this runs in parallel with Cloudflare and isn't the production target.

## Known placeholders to resolve before shipping

- Pro/Family plan prices in `plans` (`src/data/site.ts`) show "Xem giá trong ứng dụng" (see price in-app) rather than a number, since the source README does not list actual VND/USD prices — fill in real prices there if/when available instead of guessing.
- `jsonLd` in `src/pages/index.astro` (`MobileApplication`) intentionally has no `aggregateRating`/`review` — the App Store listing (checked via the public iTunes lookup API, `id6804452525`) has 0 ratings as of the app's 2026-08-31 release. Google requires one of those two fields for the rich-result star rating; add a real `aggregateRating` once the app has genuine reviews — never fabricate one.
