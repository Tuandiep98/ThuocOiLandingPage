import type { APIRoute } from 'astro';

// Endpoint động thay vì file tĩnh trong public/ — icon path cần cộng base path lúc build
// (ví dụ bản xem thử GitHub Pages phục vụ ở "/ThuocOiLandingPage/"), file JSON tĩnh không tự
// biết giá trị này.
export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL;

  const manifest = {
    name: 'Thuốc ơi',
    short_name: 'Thuốc ơi',
    description: 'Lên lịch uống thuốc thông minh từ đơn thuốc, cho cả gia đình.',
    start_url: base,
    display: 'standalone',
    background_color: '#f6f9f2',
    theme_color: '#0e3b2e',
    lang: 'vi',
    icons: [
      { src: `${base}icon-192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${base}icon-512.png`, sizes: '512x512', type: 'image/png' },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
