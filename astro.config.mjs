// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: thay bằng domain thật khi có (ảnh hưởng canonical URL, sitemap, OG url).
const SITE_URL = "https://thuocoi.app";

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
    // 'always' thay vì 'auto': trang chỉ có 1 route nên toàn bộ CSS (~20KB) nên nhúng thẳng
    // vào <head> thay vì 2 file .css riêng (chặn render, PSI đo mất ~1.6s trước khi thấy chữ).
    inlineStylesheets: "always",
  },
});
