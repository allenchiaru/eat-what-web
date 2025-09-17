'use client';

export function RegionToggle({
  region,
  onChange,
}: {
  region: 'kanto' | 'kansai';
  onChange: (v: 'kanto' | 'kansai') => void;
}) {
  const base =
    'px-4 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/40';
  const selected = `${base} bg-white text-black`;
  const unselected =
    `${base} bg-black text-white/80 hover:text-white hover:bg-black/80 ` +
    `border border-white/10`; // 黑底＋細白框更清楚

  return (
    <div className="inline-flex rounded-xl overflow-hidden">
      <button
        aria-pressed={region === 'kanto'}
        className={region === 'kanto' ? selected : unselected}
        onClick={() => onChange('kanto')}
      >
        關東 / 関東
      </button>
      <button
        aria-pressed={region === 'kansai'}
        className={region === 'kansai' ? selected : unselected}
        onClick={() => onChange('kansai')}
      >
        關西 / 関西
      </button>
    </div>
  );
}
