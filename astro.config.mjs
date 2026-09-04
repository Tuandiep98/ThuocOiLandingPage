// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://thuocoi.com";

// GitHub Pages là bản xem thử tạm thời trước khi có domain thật (Cloudflare Pages).
// Repo là project page (không phải <user>.github.io) nên phải phục vụ dưới đường dẫn con
// /ThuocOiLandingPage — bật qua biến môi trường GITHUB_PAGES set trong workflow, không bật mặc định
// vì bản triển khai chính thức (Cloudflare Pages, domain riêng) phục vụ ở gốc "/".
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: isGithubPagesBuild ? "/ThuocOiLandingPage/" : "/",
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    // 'auto' (mặc định Astro): trang nào ít CSS thì nhúng thẳng vào <head>, trang nào nhiều CSS
    // thì tách file .css riêng để cache được giữa các trang. Trước đây dùng 'always' vì site chỉ
    // có 1 route (landing page) nên nhúng toàn bộ luôn tốt hơn hẳn — từ khi có thêm blog nhiều
    // trang, 'always' sẽ nhúng lại y hệt phần CSS dùng chung trên mỗi trang, không cache được.
    inlineStylesheets: "auto",
  },
});
