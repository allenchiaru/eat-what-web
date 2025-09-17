'use client';

export function RegionToggle({
  region,
  onChange,
}: {
  region: 'kanto' | 'kansai';
  onChange: (v: 'kanto' | 'kansai') => void;
}) {
  // 不依賴全域 .btn 樣式，自己定義選取/未選取的外觀
  const base =
    'px-4 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-none';
  const selected = `${base} bg-white text-black`;
  const unselected = `${base} bg-black text-white/80 hover:text-white hover:bg-black/80 border border-white/10`;

  return (
    <div className="inline-flex rounded-xl overflow-hidden">
      <button
        type="button"
        aria-pressed={region === 'kanto'}
        className={region === 'kanto' ? selected : unselected}
        onClick={() => onChange('kanto')}
      >
        關東 / 関東
      </button>
      <button
        type="button"
