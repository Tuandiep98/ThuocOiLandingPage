// Cắt một vùng cụ thể từ ảnh screenshot marketing thật (src/assets/brand/*.png) để dùng làm ảnh
// blog focus vào đúng chi tiết liên quan, thay vì nhúng nguyên ảnh marketing đầy đủ (nền đen +
// headline chữ to). Output PNG đi qua cùng pipeline astro:assets/<Image> như Features.astro
// (tự tối ưu WebP + responsive widths lúc build) — script này chỉ lo phần nguồn + crop.
//
// Dùng: node scripts/prepare-blog-image.mjs <src-filename> <out-filename> <left> <top> <width> <height>
// Toạ độ tính trên ảnh gốc (1290x2796), không phải ảnh đã scale hiển thị.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const brandDir = path.join(root, '..', 'src/assets/brand');
const outDir = path.join(brandDir, 'blog');

const [srcName, outName, left, top, width, height] = process.argv.slice(2);
if (!srcName || !outName || left === undefined) {
  console.error(
    'Usage: node scripts/prepare-blog-image.mjs <src-filename> <out-filename> <left> <top> <width> <height>'
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

await sharp(path.join(brandDir, srcName))
  .extract({
    left: Number(left),
    top: Number(top),
    width: Number(width),
    height: Number(height),
  })
  .png()
  .toFile(path.join(outDir, outName));

console.log(`Cropped ${srcName} -> src/assets/brand/blog/${outName}`);
