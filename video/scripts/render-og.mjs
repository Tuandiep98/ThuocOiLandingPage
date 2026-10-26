// Render ảnh Open Graph (1200x630, JPEG) cho các trang marketing vào ../public/og/<tên>.jpg.
// Trang tính năng lấy tiêu đề từ featurePages trong src/data/site.ts (Node chạy được .ts nhờ
// type stripping); các trang còn lại khai báo ở dưới — giữ khớp với h1 của từng trang.
import { bundle } from '@remotion/bundler';
import { renderStill, selectComposition } from '@remotion/renderer';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { featurePages } from '../../src/data/site.ts';

const pages = [
  { file: 'trang-chu', eyebrow: 'Ứng dụng nhắc uống thuốc', title: 'Một tấm ảnh đơn thuốc, cả nhà biết khi nào uống thuốc', screen: 'home' },
  { file: 'tinh-nang', eyebrow: 'Tính năng', title: 'Mọi thứ Thuốc ơi làm để bạn không quên liều thuốc', screen: 'home' },
  { file: 'bang-gia', eyebrow: 'Bảng giá', title: 'Nhắc thuốc miễn phí, trả phí chỉ khi cần quét AI nhiều hơn', screen: 'home' },
  { file: 'gioi-thieu', eyebrow: 'Giới thiệu', title: 'Thuốc ơi giúp bạn uống thuốc đúng như đơn đã kê', screen: 'home' },
  { file: 'cau-hoi-thuong-gap', eyebrow: 'Hỏi đáp', title: 'Câu hỏi thường gặp về Thuốc ơi', screen: 'home' },
  ...featurePages.map((page) => ({
    file: page.slug,
    eyebrow: page.eyebrow,
    title: page.h1,
    screen: page.slug === 'nhac-uong-thuoc' ? 'alarm' : 'home',
  })),
];

const outDir = path.resolve('../public/og');
mkdirSync(outDir, { recursive: true });

const serveUrl = await bundle({ entryPoint: path.resolve('src/index.ts') });
for (const { file, ...inputProps } of pages) {
  const composition = await selectComposition({ serveUrl, id: 'Og', inputProps });
  await renderStill({
    composition,
    serveUrl,
    inputProps,
    output: path.join(outDir, `${file}.jpg`),
    imageFormat: 'jpeg',
    jpegQuality: 85,
  });
  console.log(`✓ og/${file}.jpg`);
}
