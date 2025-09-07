'use client';
export function RegionToggle({ region, onChange }: { region: 'kanto' | 'kansai', onChange: (v: 'kanto' | 'kansai') => void }) {
    return (
      <div className="inline-flex rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <button
          className={`px-3 py-1.5 text-sm ${region === 'kanto' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : ''}`}
          onClick={() => onChange('kanto')}
        >關東 / 関東</button>
        <button
          className={`px-3 py-1.5 text-sm ${region === 'kansai' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : ''}`}
          onClick={() => onChange('kansai')}
        >關西 / 関西</button>
      </div>
    );
  }

  