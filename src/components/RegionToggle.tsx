'use client';

export function RegionToggle({
  region,
  onChange,
}: {
  region: 'kanto' | 'kansai';
  onChange: (v: 'kanto' | 'kansai') => void;
}) {
  const btnBase =
    'px-4 py-1.5 rounded text-sm transition outline-none focus-visible:ring-2 focus-visible:ring-white/40';

  return (
    <div className="inline-flex rounded-xl bg-white/5 p-1 border border-white/10">
      <button
        aria-pressed={region === 'kanto'}
        className={
          region === 'kanto'
            ? `${btnBase} bg-white text-black`
            : `${btnBase} text-white/90 opacity-60 hover:opacity-100`
        }
        onClick={() => onChange('kanto')}
      >
        關東／関東
      </button>
      <button
        aria-pressed={region === 'kansai'}
        className={
          region === 'kansai'
            ? `${btnBase} bg-white text-black`
            : `${btnBase} text-white/90 opacity-60 hover:opacity-100`
        }
        onClick={() => onChange('kansai')}
      >
        關西／関西
      </button>
    </div>
  );
}
