'use client';

import { useI18n } from '@/lib/i18n';

export function CategoryChips({
  categories,
  value,
  onChange,
  clearLabel,
}: {
  categories: string[]; // 傳入分類代碼
  value: string | null;
  onChange: (v: string | null) => void;
  clearLabel: string;
}) {
  const { t } = useI18n();

  return (
    <div className="flex gap-2 mb-1 overflow-x-auto pb-2 snap-x">
      <button
        onClick={() => onChange(null)}
        className={`btn-chip ${value === null ? 'btn-chip--active' : ''}`}
      >
        {clearLabel}
      </button>

      {categories.map((code) => {
        const label = t(code); // 沒有翻譯會回退顯示 code 本身
        return (
          <button
            key={code}
            onClick={() => onChange(code)}
            className={`btn-chip ${value === code ? 'btn-chip--active' : ''}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
