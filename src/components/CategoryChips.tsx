'use client';

import { useI18n } from '@/lib/i18n';

export function CategoryChips({
  categories,
  value,
  onChange,
  clearLabel,
}: {
  categories: string[];       // 這裡放「代碼」例如 'ramen'
  value: string | null;
  onChange: (v: string | null) => void;
  clearLabel: string;         // 通常傳 t('all')
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
        // 用 i18n 以「代碼」取顯示文字（找不到就退回 code 本身）
        const label = (t as any)(code) ?? code;
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
