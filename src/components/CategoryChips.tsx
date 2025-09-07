'use client';

import { useI18n } from '@/lib/i18n';
import type { Category } from '@/lib/data'; 

export function CategoryChips({
  categories,
  value,
  onChange,
  clearLabel,
}: {
  categories: Category[];                 // 使用 Category 聯集型別
  value: Category | null;
  onChange: (v: Category | null) => void;
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

      {categories.map((code) => (
        <button
          key={code}
          onClick={() => onChange(code)}
          className={`btn-chip ${value === code ? 'btn-chip--active' : ''}`}
        >
          {t(code)}
        </button>
      ))}
    </div>
  );
}
