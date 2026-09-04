// import.meta.env.BASE_URL không tự đảm bảo có dấu "/" cuối (phụ thuộc giá trị `base` truyền
// vào astro.config.mjs) — từng gây lỗi 404 thật trên bản GitHub Pages khi nối path tĩnh bị dính
// chữ. Dùng chung hàm này ở mọi nơi cần nối path tĩnh thay vì tự nối `import.meta.env.BASE_URL`.
export function withBase(path: string): string {
  const raw = import.meta.env.BASE_URL;
  const base = raw.endsWith('/') ? raw : `${raw}/`;
  return `${base}${path.replace(/^\//, '')}`;
}
