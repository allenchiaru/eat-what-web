'use client';
import { useState } from 'react';
export function BrandAvatar({ name, size = 28 }: { name: string; size?: number }) {
  const [broken, setBroken] = useState(false);
  const srcPng = `/logos/${name}.png`;
  const srcSvg = `/logos/${name}.svg`;
  const dim = { width: size, height: size, borderRadius: 8 } as const;

  if (!broken) {
    return (
      <img
        src={srcPng}
        alt=""
        width={size}
        height={size}
        style={dim}
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          if (img.src.endsWith('.png')) {
            img.src = srcSvg;       // png 失敗就換 svg
          } else {
            setBroken(true);        // 兩種都沒有 → 顯示文字頭像
          }
        }}
      />
    );
  }

  const initials = name.slice(0, 2);
  return (
    <div
      style={{
        width: size, height: size, borderRadius: 8,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.12)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, color: '#e5e7eb'
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
