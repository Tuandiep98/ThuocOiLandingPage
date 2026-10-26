import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';
import { C, fontFaces } from './Promo';

// Ảnh Open Graph 1200x630 cho từng trang (render bằng scripts/render-og.mjs).
// Ảnh điện thoại là ảnh chụp màn hình thật của app (public/home.png, public/alarm.png).
export type OgProps = { eyebrow: string; title: string; screen: 'home' | 'alarm' };

export const Og: React.FC<OgProps> = ({ eyebrow, title, screen }) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(120% 90% at 85% 0%, ${C.pineSoft} 0%, ${C.pine} 55%, #0a2820 100%)`,
      overflow: 'hidden',
    }}
  >
    <style>{fontFaces}</style>
    <div
      style={{
        position: 'absolute',
        width: 520,
        height: 520,
        borderRadius: '50%',
        background: C.leaf,
        opacity: 0.16,
        filter: 'blur(40px)',
        right: -60,
        top: 160,
      }}
    />
    <div style={{ position: 'absolute', left: 72, top: 64, right: 470, bottom: 64, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Img src={staticFile('icon1024.png')} style={{ width: 64, height: 64, borderRadius: 16 }} />
        <span style={{ fontFamily: "'Baloo 2'", fontWeight: 800, fontSize: 40, color: '#fff' }}>Thuốc ơi</span>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <div
          style={{
            display: 'inline-block',
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: C.pine,
            background: C.leaf,
            padding: '6px 18px',
            borderRadius: 999,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            marginTop: 18,
            fontFamily: "'Baloo 2'",
            fontWeight: 800,
            fontSize: title.length > 60 ? 50 : 58,
            lineHeight: 1.08,
            color: '#fff',
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ marginTop: 28, fontFamily: 'Be Vietnam Pro', fontWeight: 500, fontSize: 24, color: '#cfebd9' }}>thuocoi.com</div>
    </div>
    <div
      style={{
        position: 'absolute',
        right: 64,
        top: 70,
        width: 360,
        padding: 14,
        borderRadius: 64,
        background: '#0b0f0d',
        boxShadow: '0 40px 90px rgba(0,0,0,0.45), inset 0 0 0 3px #2a332f',
        transform: 'rotate(4deg)',
      }}
    >
      <div style={{ width: 332, height: 723, borderRadius: 52, overflow: 'hidden', background: '#000' }}>
        <Img src={staticFile(`${screen}.png`)} style={{ width: '100%' }} />
      </div>
    </div>
  </AbsoluteFill>
);
