# Video preview Thuốc ơi

Dự án [Remotion](https://www.remotion.dev/) dựng video preview 13 giây, lặp liền mạch, dùng ở hero
trang chủ và các trang `/tinh-nang/*`. Package riêng, không thuộc build của site (thư mục này bị
loại khỏi `tsconfig.json` của Astro).

- `public/home.png`, `public/alarm.png` — cắt từ ảnh chụp màn hình App Store thật của app
  (`thuocoi/assets/store_screenshots/iphone/thuocoi_app_store_vi_06.png` và `_08.png`).
- Chuỗi trong thông báo lấy nguyên văn từ `vi.json` và Edge Function `send-caregiver-alerts` của
  app — đổi chữ ở app thì sửa cả `src/Promo.tsx` và `notificationSamples` trong `src/data/site.ts`.

```bash
cd video
npm ci
npm run studio   # xem/chỉnh trực tiếp trong trình duyệt
npm run build    # render out/promo.mp4 rồi xuất MP4/WebM/poster vào ../public/media/ (cần ffmpeg)
```

Bản xuất trong `public/media/` được commit; `out/` thì không.
