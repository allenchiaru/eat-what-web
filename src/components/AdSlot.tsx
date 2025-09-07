'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * 簡易廣告占位 + lazy-load。
 * 接 AdSense 時：
 * 1) 使用者同意後再動態載入 adsbygoogle.js
 * 2) 將占位改成 <ins class="adsbygoogle" ... /> 結構
 */
export function AdSlot() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect(); }
    }, { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {inView ? (
        <div className="ad-placeholder h-[520px]">廣告區 / 広告枠（300×600）</div>
      ) : (
        <div className="ad-placeholder opacity-50 h-[520px]">Loading…</div>
      )}
    </div>
  );
}