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

## Known placeholders to resolve before shipping

- `SITE_URL` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt` are both hardcoded to `https://thuocoi.app` — update both together once a real domain is chosen.
- Privacy/terms: the footer (`legalLinks` in `src/data/site.ts`) links out to the app's real legal pages at `tuandiep98.github.io/ThuocOiPublicPage/#/privacy?lang=vi` and `#/terms?lang=vi` rather than reproducing that text here — that site fetches the current version live from Supabase (see its own `src/lib/legal-documents.ts`), so copying the markdown into this repo would go stale. Keep linking out; don't inline legal copy.
- Pro/Family plan prices in `plans` (`src/data/site.ts`) show "Xem giá trong ứng dụng" (see price in-app) rather than a number, since the source README does not list actual VND/USD prices — fill in real prices there if/when available instead of guessing.
- No hosting/deploy target is configured yet (no `vercel.json`/Cloudflare Pages config/GitHub Actions deploy workflow) — this repo only builds to `dist/` locally so far.
- `jsonLd` in `src/pages/index.astro` (`MobileApplication`) intentionally has no `aggregateRating`/`review` — the App Store listing (checked via the public iTunes lookup API, `id6804452525`) has 0 ratings as of the app's 2026-08-31 release. Google requires one of those two fields for the rich-result star rating; add a real `aggregateRating` once the app has genuine reviews — never fabricate one.
