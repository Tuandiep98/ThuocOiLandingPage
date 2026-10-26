import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

// 13 giây, 30fps. Khung cuối trùng khung đầu để lặp liền mạch.
export const DURATION = 390;

export const C = {
  paper: '#f6f9f2',
  ink: '#12241c',
  pine: '#0e3b2e',
  pineSoft: '#145041',
  leaf: '#35c157',
  leafTint: '#e3f6e4',
  amber: '#ec9f3f',
};

export const fontFaces = `
${[500, 700]
  .flatMap((w) =>
    ['latin', 'vietnamese'].map(
      (s) => `@font-face{font-family:'Be Vietnam Pro';font-weight:${w};src:url(${staticFile(
        `be-vietnam-pro-${s}-${w}-normal.woff2`,
      )}) format('woff2');}`,
    ),
  )
  .join('\n')}
${['latin', 'vietnamese']
  .map(
    (s) => `@font-face{font-family:'Baloo 2';font-weight:800;src:url(${staticFile(
      `baloo-2-${s}-800-normal.woff2`,
    )}) format('woff2');}`,
  )
  .join('\n')}
`;

// Mốc cảnh (frame). Chú thích + nội dung màn hình đổi theo từng cảnh.
const SCENES = [
  { from: 0, eyebrow: 'Lịch tự động', title: 'Chụp đơn thuốc,\nAI xếp lịch sáng · trưa · tối' },
  { from: 105, eyebrow: 'Thông báo nhắc', title: 'Đến giờ,\nđiện thoại tự nhắc bạn' },
  { from: 225, eyebrow: 'Gia đình', title: 'Người thân được báo\nkhi có liều bị lỡ' },
  { from: 315, eyebrow: 'Báo thức · iOS 26+', title: 'Vẫn kêu cả khi\nmáy đang im lặng' },
];
const LOOP_BACK = 366; // bắt đầu chuyển về cảnh 1

const ease = Easing.bezier(0.22, 1, 0.36, 1);

function sceneIndex(frame: number) {
  if (frame >= LOOP_BACK) return 0;
  let idx = 0;
  SCENES.forEach((s, i) => {
    if (frame >= s.from) idx = i;
  });
  return idx;
}

const Caption: React.FC<{ frame: number }> = ({ frame }) => {
  return (
    <div style={{ position: 'absolute', top: 64, left: 72, right: 72, height: 250 }}>
      {SCENES.map((s, i) => {
        const start = i === 0 ? LOOP_BACK : s.from;
        const end = i === 0 ? SCENES[1].from : SCENES[i + 1]?.from ?? LOOP_BACK;
        // cảnh 1 hiện ở đầu video (0→105) và lại ở cuối (366→390)
        const local = i === 0 ? (frame >= LOOP_BACK ? frame - LOOP_BACK : frame + (DURATION - LOOP_BACK)) : frame - start;
        const visibleSpan = i === 0 ? end + (DURATION - LOOP_BACK) : end - start;
        const inP = interpolate(local, [0, 14], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease });
        const outP = interpolate(local, [visibleSpan - 10, visibleSpan], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        const o = Math.min(inP, outP);
        if (o <= 0) return null;
        return (
          <div key={i} style={{ position: 'absolute', inset: 0, opacity: o, transform: `translateY(${(1 - inP) * 24}px)` }}>
            <div
              style={{
                display: 'inline-block',
                fontFamily: 'Be Vietnam Pro',
                fontWeight: 700,
                fontSize: 26,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: C.pine,
                background: C.leaf,
                padding: '8px 20px',
                borderRadius: 999,
              }}
            >
              {s.eyebrow}
            </div>
            <div
              style={{
                marginTop: 18,
                fontFamily: "'Baloo 2'",
                fontWeight: 800,
                fontSize: 70,
                lineHeight: 1.08,
                color: '#fff',
                whiteSpace: 'pre-line',
              }}
            >
              {s.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Progress: React.FC<{ frame: number }> = ({ frame }) => {
  const idx = sceneIndex(frame);
  return (
    <div style={{ position: 'absolute', top: 80, right: 72, display: 'flex', gap: 10, zIndex: 5 }}>
      {SCENES.map((_, i) => (
        <div
          key={i}
          style={{
            width: i === idx ? 44 : 12,
            height: 12,
            borderRadius: 999,
            background: i === idx ? C.leaf : 'rgba(255,255,255,0.45)',
          }}
        />
      ))}
    </div>
  );
};

type BannerProps = {
  appear: number; // frame bắt đầu thả xuống
  leave: number; // frame bắt đầu kéo lên
  title: string;
  body: string;
  actionsAt?: number;
  tapAt?: number;
  frame: number;
  fps: number;
};

const Banner: React.FC<BannerProps> = ({ appear, leave, title, body, actionsAt, tapAt, frame, fps }) => {
  if (frame < appear || frame > leave + 20) return null;
  const inS = spring({ frame: frame - appear, fps, config: { damping: 16, stiffness: 140 } });
  const outP = interpolate(frame, [leave, leave + 14], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.in(Easing.cubic) });
  const y = interpolate(inS, [0, 1], [-260, 0]) - outP * 300;
  const actionsP = actionsAt === undefined ? 0 : spring({ frame: frame - actionsAt, fps, config: { damping: 18 } });
  const tapP = tapAt === undefined ? 0 : interpolate(frame, [tapAt, tapAt + 12], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const pressed = tapAt !== undefined && frame >= tapAt && frame < tapAt + 10;

  return (
    <div
      style={{
        position: 'absolute',
        top: 66,
        left: 14,
        right: 14,
        transform: `translateY(${y}px)`,
        background: 'rgba(250,250,248,0.94)',
        borderRadius: 30,
        padding: '18px 20px',
        boxShadow: '0 18px 40px rgba(0,0,0,0.28)',
        fontFamily: 'Be Vietnam Pro',
        color: '#111',
        zIndex: 3,
      }}
    >
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <Img src={staticFile('icon1024.png')} style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 17, color: '#6b6b6b', fontWeight: 500 }}>
            <span>THUỐC ƠI</span>
            <span>bây giờ</span>
          </div>
          <div style={{ fontSize: 21, fontWeight: 700, marginTop: 2 }}>{title}</div>
          <div style={{ fontSize: 19, fontWeight: 500, lineHeight: 1.3, marginTop: 2, color: '#222' }}>{body}</div>
        </div>
      </div>
      {actionsAt !== undefined && (
        <div style={{ height: actionsP * 62, overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            {['Đã uống', 'Báo lại 10 phút'].map((label, i) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '12px 0',
                  borderRadius: 14,
                  fontSize: 19,
                  fontWeight: 700,
                  background: i === 0 ? (pressed ? '#0a5c45' : '#0f7a5c') : 'rgba(0,0,0,0.07)',
                  color: i === 0 ? '#fff' : '#111',
                  transform: i === 0 && pressed ? 'scale(0.96)' : undefined,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      )}
      {tapAt !== undefined && tapP > 0 && tapP < 1 && (
        <div
          style={{
            position: 'absolute',
            left: 130,
            bottom: 34,
            width: 60,
            height: 60,
            marginLeft: -30,
            marginBottom: -30,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.55)',
            transform: `scale(${0.4 + tapP * 1.4})`,
            opacity: 1 - tapP,
          }}
        />
      )}
    </div>
  );
};

export const Promo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();

  // Màn hình điện thoại: 524 x 1141 (tỉ lệ ảnh chụp thật 919 x 2001)
  const screenW = 524;
  const screenH = Math.round((screenW * 2001) / 919);
  const phoneTop = height > 1200 ? 340 : 330;

  const intro = spring({ frame, fps, config: { damping: 200 } });
  const alarmP =
    interpolate(frame, [315, 330], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) -
    interpolate(frame, [LOOP_BACK, LOOP_BACK + 16], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  // rung nhẹ khi báo thức kêu
  const shake = frame >= 330 && frame < 360 ? Math.sin(frame * 2.4) * 4 * (1 - (frame - 330) / 30) : 0;
  // vòng sáng quanh avatar "Thảo" trong cảnh Gia đình
  const ringP = interpolate(frame, [278, 288, 306, 315], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const pulse = 1 + 0.08 * Math.sin((frame - 278) / 4);
  const slow = interpolate(frame, [0, DURATION], [0, 1]);

  return (
    <AbsoluteFill style={{ background: `radial-gradient(120% 80% at 80% 0%, ${C.pineSoft} 0%, ${C.pine} 55%, #0a2820 100%)`, overflow: 'hidden' }}>
      <style>{fontFaces}</style>
      {/* đốm sáng nền */}
      <div
        style={{
          position: 'absolute',
          width: 620,
          height: 620,
          borderRadius: '50%',
          background: C.leaf,
          opacity: 0.18,
          filter: 'blur(40px)',
          right: -220 + Math.sin(slow * Math.PI * 2) * 30,
          top: 380,
        }}
      />
      <Caption frame={frame} />

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: phoneTop,
          width: screenW + 36,
          marginLeft: -(screenW + 36) / 2,
          padding: 18,
          borderRadius: 86,
          background: '#0b0f0d',
          boxShadow: '0 40px 90px rgba(0,0,0,0.45), inset 0 0 0 3px #2a332f',
          transform: `translateY(${(1 - intro) * 0}px) translateX(${shake}px)`,
        }}
      >
        <div style={{ position: 'relative', width: screenW, height: screenH, borderRadius: 68, overflow: 'hidden', background: '#000' }}>
          <Img src={staticFile('home.png')} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
          <div style={{ position: 'absolute', inset: 0, background: '#000', opacity: Math.max(0, alarmP) }}>
            <Img src={staticFile('alarm.png')} style={{ position: 'absolute', left: 0, top: 0, width: '100%' }} />
          </div>
          {ringP > 0 && (
            <div
              style={{
                position: 'absolute',
                left: 124 - 40,
                top: 166 - 40,
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: `5px solid ${C.amber}`,
                transform: `scale(${pulse})`,
                opacity: ringP,
              }}
            />
          )}
          <Banner
            frame={frame}
            fps={fps}
            appear={118}
            actionsAt={150}
            tapAt={184}
            leave={200}
            title="Đến giờ uống thuốc"
            body="Bạn có một lời nhắc uống thuốc. Mở ứng dụng để xem chi tiết."
          />
          <Banner
            frame={frame}
            fps={fps}
            appear={236}
            leave={276}
            title="Nhắc bỏ lỡ liều"
            body="Thảo có thể đã bỏ lỡ liều thuốc 20:00. Mở app để xem chi tiết."
          />
        </div>
      </div>
      <Progress frame={frame} />
    </AbsoluteFill>
  );
};
