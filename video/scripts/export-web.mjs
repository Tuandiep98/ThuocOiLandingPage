// Xuất bản web từ out/promo.mp4 (1080x1350, 30fps, 13s) ra ../public/media/:
// video preview đầy đủ + 3 clip ngắn cho trang tính năng, mỗi file một MP4 (H.264 — mọi trình
// duyệt đều phát được, và ở đây nhỏ hơn bản VP9) + poster WebP. Cần ffmpeg trong PATH. Mốc cắt clip khớp SCENES trong src/Promo.tsx.
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const SRC = 'out/promo.mp4';
const OUT = '../public/media';
mkdirSync(OUT, { recursive: true });

const ff = (...args) => execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...args], { stdio: 'inherit' });

const outputs = [
  { name: 'thuocoi-preview', from: 0, to: 13, posterAt: 0 },
  { name: 'clip-thong-bao', from: 3.5, to: 7.5, posterAt: 1.5 },
  { name: 'clip-gia-dinh', from: 7.5, to: 10.5, posterAt: 1 },
  { name: 'clip-bao-thuc', from: 10.5, to: 13, posterAt: 1 },
];

for (const { name, from, to, posterAt } of outputs) {
  const range = ['-ss', String(from), '-to', String(to), '-i', SRC];
  const scale = ['-vf', 'scale=720:-2', '-an'];
  ff(...range, ...scale, '-c:v', 'libx264', '-crf', '26', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', `${OUT}/${name}.mp4`);
  const poster = name === 'thuocoi-preview' ? 'thuocoi-preview-poster' : name;
  ff('-ss', String(from + posterAt), '-i', SRC, '-frames:v', '1', '-vf', 'scale=720:-2', '-c:v', 'libwebp', '-quality', '80', `${OUT}/${poster}.webp`);
  console.log(`✓ ${name}`);
}
