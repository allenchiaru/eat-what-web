'use client';

export function RegionToggle({
  region,
  onChange,
}: {
  region: 'kanto' | 'kansai';
  onChange: (v: 'kanto' | 'kansai') => void;
}) {
  const base =
    'px-4 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-none';

  return (
    <div className="inline-flex rounded-xl overflow-hidden region-toggle">
      <button
        type="button"
        aria-pressed={region === 'kanto'}
        className={`${base} border border-white/10 ${
          region === 'kanto'
            ? '!bg-white !text-black'
            : '!bg-black !text-white/90 hover:!bg-black/80 hover:!text-white'
        }`}
        onClick={() => onChange('kanto')}
      >
        關東 / 関東
      </button>
      <button
        type="button"
        aria-pressed={region === 'kansai'}
        className={`${base} border border-white/10 ${
          region === 'kansai'
            ? '!bg-white !text-black'
            : '!bg-black !text-white/90 hover:!bg-black/80 hover:!text-white'
        }`}
        onClick={() => onChange('kansai')}
      >
        關西 / 関西
      </button>
    </div>
  );
}
