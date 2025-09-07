'use client';
import { useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

export function ResultModal({ open, name, onClose, onOpenMap, onCopy }: {
  open: boolean;
  name: string | null;
  onClose: () => void;
  onOpenMap: () => void;
  onCopy: () => void;
}) {
  const { lang } = useI18n();

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose(); }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !name) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div role="dialog" aria-modal="true" aria-label={lang === 'zh' ? '今天吃這個' : '本日のおすすめ'} className="modal">
        <div className="modal-title">{lang === 'zh' ? '今天就吃這個' : '本日のおすすめ'}</div>
        <div className="mt-3 text-2xl font-semibold tracking-tight">{name}</div>
        <div className="modal-actions">
          <button className="btn btn-primary w-full sm:w-auto" onClick={onOpenMap}>{lang === 'zh' ? '開地圖' : '地図を開く'}</button>
          <button className="btn btn-ghost w-full sm:w-auto" onClick={onCopy}>{lang === 'zh' ? '複製店名' : 'コピー'}</button>
          <button className="btn btn-ghost w-full sm:w-auto" onClick={onClose}>{lang === 'zh' ? '關閉' : '閉じる'}</button>
        </div>
      </div>
    </>
  );
}
