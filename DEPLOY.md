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

## Giai đoạn 2 — Domain + hosting chính thức (Cloudflare)

Việc bạn tự làm (cần tài khoản + thanh toán của bạn):

1. ~~Tạo tài khoản tại dash.cloudflare.com (nếu chưa có).~~
2. ~~**Domain Registration → Register a Domain** → mua domain.~~ **Xong — domain là `thuocoi.com`.**
3. **Workers & Pages → Create → Pages → Connect to Git** → chọn repo `Tuandiep98/ThuocOiLandingPage`, nhánh `main`.
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Sau khi deploy lần đầu thành công → tab **Custom domains** trong project Pages → thêm `thuocoi.com` (DNS + SSL tự nối vì cùng tài khoản).

Việc tôi đã làm sau khi bạn báo đã mua domain:

- Cập nhật `SITE_URL` trong `astro.config.mjs`, dòng `Sitemap:` trong `public/robots.txt`, và `site.url` trong `src/data/site.ts` sang `https://thuocoi.com`.
- Build, kiểm tra, commit — nếu bước 3-4 đã xong thì push lên `main` để Cloudflare tự deploy lại.

Còn lại (sau khi bước 3-4 xong):

- Hướng dẫn khai báo Google Search Console + Bing Webmaster Tools, submit sitemap.

## Giai đoạn 3 — Việc để dành, chưa cần gấp

- Thêm `aggregateRating` thật vào JSON-LD khi app có review trên App Store (hiện 0 review, mới release 31/08/2026).
- Universal Links / App Links (bấm link web mở thẳng app) — cần sửa cả phía app Flutter, không chỉ landing page.
- Gắn analytics (Plausible/Fathom hoặc GA4) nếu muốn theo dõi số người bấm nút tải app.
