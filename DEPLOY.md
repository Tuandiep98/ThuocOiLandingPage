# Kế hoạch triển khai

## Giai đoạn 1 — Xem thử ngay (GitHub Pages, tạm thời)

Đã thiết lập sẵn, tự động chạy mỗi khi push lên `main`:

- Workflow: `.github/workflows/deploy-github-pages.yml` — build bằng GitHub Actions, deploy bằng `actions/deploy-pages`.
- URL xem thử: **https://tuandiep98.github.io/ThuocOiLandingPage/**
- Vì đây là project page (không phải `tuandiep98.github.io` gốc), Astro build với `base: /ThuocOiLandingPage` khi biến môi trường `GITHUB_PAGES=true` (workflow tự set, không cần làm gì thêm).

**Chỉ cần làm 1 lần nếu Actions báo lỗi "Pages not enabled":**
Vào repo trên GitHub → **Settings** → **Pages** → mục **Build and deployment** → **Source** → chọn **GitHub Actions** → Save. Sau đó vào tab **Actions**, chạy lại workflow (hoặc push lại 1 commit).

**Giới hạn của bản xem thử này** (chấp nhận được vì chỉ tạm thời):

- Favicon/manifest icon dùng đường dẫn tuyệt đối tĩnh trong `public/site.webmanifest` nên trên GitHub Pages có thể lệch — không ảnh hưởng nội dung trang.
- `robots.txt`/sitemap vẫn khai domain thật — không sao vì bản này không cần Google lập chỉ mục.

## Giai đoạn 2 — Domain + hosting chính thức (Cloudflare) — Đã xong

- Domain `thuocoi.com` mua qua Cloudflare Registrar.
- Hosting: **Cloudflare Workers (Static Assets)**, project tên `thuocoilandingpage` — **không phải "Pages" cổ điển** như dự tính ban đầu, vì luồng "Connect to Git" hiện tại của Cloudflare tạo Worker thay vì Pages project cho Astro. Connect qua dashboard tới repo `Tuandiep98/ThuocOiLandingPage`, nhánh `main`, build command `npm run build`, output `dist`.
- **Trục trặc gặp phải**: lần build đầu tiên fail — Cloudflare tự chạy `astro add cloudflare` (cài adapter SSR) vì không thấy sẵn file cấu hình wrangler, và bản adapter đó lỗi với Astro 7.2.10 (`MISSING_EXPORT renderForPrerender`). Fix: thêm `wrangler.jsonc` vào repo khai báo thẳng `assets.directory: "./dist"` (không adapter, không binding) — Cloudflare không cần tự đoán cấu hình nữa, deploy thẳng `dist/` tĩnh. Xem chi tiết trong `CLAUDE.md` mục Deployment.
- Domain `thuocoi.com` + `www.thuocoi.com` đã gắn vào Worker qua **Settings → Domains & Routes**, toggle Production đã bật, DNS + SSL hoạt động — đã xác nhận `https://thuocoi.com` trả về đúng nội dung trang.
- `SITE_URL` (`astro.config.mjs`), dòng `Sitemap:` (`public/robots.txt`), và `site.url` (`src/data/site.ts`) đã cập nhật sang `https://thuocoi.com`.
- Google Search Console: property `thuocoi.com` đã verify (DNS TXT), đã Request Indexing cho trang chủ. Submit sitemap thủ công (`sitemap-index.xml`) đang báo lỗi "Invalid sitemap address" — nhiều khả năng do cache cũ từ lúc domain mới mua chưa sẵn sàng, thử lại sau vài giờ; không chặn indexing vì Google vẫn tự đọc dòng `Sitemap:` trong `robots.txt`.

Còn lại:

- Bing Webmaster Tools: chưa làm — thêm site, verify (có thể import từ Google Search Console), submit sitemap.
- Thử submit lại sitemap trên Google Search Console sau khi cache hết hạn.

## Giai đoạn 3 — Việc để dành, chưa cần gấp

- Thêm `aggregateRating` thật vào JSON-LD khi app có review trên App Store (hiện 0 review, mới release 31/08/2026).
- Universal Links / App Links (bấm link web mở thẳng app) — cần sửa cả phía app Flutter, không chỉ landing page.
- Gắn analytics (Plausible/Fathom hoặc GA4) nếu muốn theo dõi số người bấm nút tải app.
