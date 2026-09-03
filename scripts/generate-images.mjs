// Sinh favicon/app-icon/OG image từ icon gốc của app Flutter (src/assets/brand/icon_1024.png).
// Chạy một lần khi cần tái tạo: node scripts/generate-images.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const srcIcon = path.join(root, '..', 'src/assets/brand/icon_1024.png');
const publicDir = path.join(root, '..', 'public');
mkdirSync(publicDir, { recursive: true });

const PINE = '#0E3B2E';
const LEAF = '#3FCB5B';

async function icons() {
  const sizes = [
    ['favicon-32.png', 32],
    ['favicon-16.png', 16],
    ['apple-touch-icon.png', 180],
    ['icon-192.png', 192],
    ['icon-512.png', 512],
  ];
  for (const [name, size] of sizes) {
    await sharp(srcIcon).resize(size, size).png().toFile(path.join(publicDir, name));
  }
  console.log('Icons done');
}

async function ogImage() {
  const W = 1200;
  const H = 630;
  const iconSize = 260;
  const iconLeft = 96;
  const iconTop = Math.round((H - iconSize) / 2);
  const textLeft = iconLeft + iconSize + 64;

  const bg = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="${PINE}"/>
      <circle cx="${W + 40}" cy="-100" r="420" fill="${LEAF}" opacity="0.16"/>
      <circle cx="-80" cy="${H + 80}" r="260" fill="${LEAF}" opacity="0.14"/>
      <text x="${textLeft}" y="300" font-family="Arial, sans-serif" font-size="88" font-weight="700" fill="#FFFFFF">Thuốc ơi</text>
      <text x="${textLeft}" y="360" font-family="Arial, sans-serif" font-size="34" font-weight="400" fill="#CFEBD9">Lên lịch uống thuốc thông minh</text>
      <text x="${textLeft}" y="404" font-family="Arial, sans-serif" font-size="34" font-weight="400" fill="#CFEBD9">từ đơn thuốc, cho cả gia đình</text>
    </svg>`
  );

  const iconBuf = await sharp(srcIcon).resize(iconSize, iconSize).png().toBuffer();

  await sharp(bg)
    .composite([{ input: iconBuf, left: iconLeft, top: iconTop }])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('OG image done');
}

await icons();
await ogImage();
