'use client';

import { useMemo, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { dataKanto, dataKansai, categoriesFromRegion } from '@/lib/data';
import type { Category } from '@/lib/data';   
import { RegionToggle } from '@/components/RegionToggle';
import { CategoryChips } from '@/components/CategoryChips';
import { AdSlot } from '@/components/AdSlot';
import { ResultModal } from '@/components/ResultModal';
import Image from 'next/image';


// 店家 logo 對照表
const logos: Record<string, string> = {
    '松屋': '/logos/matsuya.png',
    '大戸屋': '/logos/ootoya.png',
    '吉野家': '/logos/yoshinoya.png',
    'すき家': '/logos/sukiya.png',
    'かつや': '/logos/katsuya.png',
    'やよい軒': '/logos/yayoiken.png',
    'なか卯': '/logos/nakau.png',
    '富士そば': '/logos/fujisoba.png',
    'スシロー': '/logos/sushiro.png',
    'くら寿司': '/logos/kurazushi.png',
    'ラーメン花月嵐': '/logos/kagetsu.png',
    '一風堂': '/logos/ippudo.png',
    '一蘭': '/logos/ichiran.png',
    'CoCo壱番屋': '/logos/cocoichi.png',
    'ゴーゴーカレー': '/logos/go-go-curry.png',
    'ドトール': '/logos/doutor.png',
    'スターバックス': '/logos/starbucks.png',
    'ベローチェ': '/logos/veloce.png',
    'サンマルクカフェ': '/logos/stmarc-cafe.png',
    'マクドナルド': '/logos/mcdonalds.png',
    'モスバーガー': '/logos/mosburger.png',
    'フレッシュネスバーガー': '/logos/freshness-burger.png',
    'バーミヤン': '/logos/bamiyan.png',
    '日高屋': '/logos/hidakaya.png',
    '餃子の王将': '/logos/ohsho.png',
    'ガスト': '/logos/gusto.png',
    'サイゼリヤ': '/logos/saizeriya.png',
    '大阪の王将': '/logos/osaka-ohsho.png',
    '551蓬莱': '/logos/551horai.png',
    '来来亭': '/logos/rairai-tei.png',
    '天下一品': '/logos/tenkaippin.png',
    '丸亀製麺': '/logos/marugame.png',
    'コメダ珈琲店': '/logos/komeda.png',
};

function BrandAvatar({ src, alt }: { src?: string; alt: string }) {
  if (src) {
    return (
      <div className="w-8 h-8 rounded bg-white flex items-center justify-center overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={150}
          height={150}
          className="object-contain max-w-[90%] max-h-[90%]"
        />
      </div>
    );
  }
  return <div className="w-10 h-10 rounded bg-white/10 border border-white/15" aria-hidden="true" />;
}

export default function Page() {
  const { t, lang, toggleLang } = useI18n();

  const [region, setRegion] = useState<'kanto' | 'kansai'>('kanto');
  const [category, setCategory] = useState<Category | null>(null);   
  const [picked, setPicked] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const data = region === 'kanto' ? dataKanto : dataKansai;
  const categories = useMemo(() => categoriesFromRegion(region), [region]); // 回傳 Category[]

  const list = useMemo<string[]>(
    () => (category ? (data[category] ?? []) : Object.values(data).flat()), 
    [data, category]
  );

  function rollOne() {
    if (!list.length) return;
    const pick = list[Math.floor(Math.random() * list.length)];
    setPicked(pick);
    setOpen(true);
  }

  const openMap = (name: string) => {
    const q = encodeURIComponent(name);
    window.open(`https://www.google.com/maps/search/${q}`, '_blank');
  };

 return (
  <main className="page flex flex-col items-center pt-10 pb-24 px-4 sm:px-6"> {/* ← 新增左右內距 */}
    <section className="w-full max-w-3xl space-y-7"> {/* ← 稍微拉大每塊之間距離 */}
      {/* Hero / Controls */}
      <div className="panel p-6 sm:p-8 rounded-2xl"> {/* ← 面板 padding 增加 */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center sm:text-left">
              今天吃什麼
            </h1>

            {/* 區域切換（未選則變暗的新版 RegionToggle） */}
            <div className="flex items-center justify-center">
              <RegionToggle region={region} onChange={(v) => { setRegion(v); setCategory(null); }} />
            </div>
          </div>

          {/* 語言切換（如果你有放按鈕） */}
          {/* <div className="flex justify-center sm:justify-start">
            <button className="btn btn-ghost text-sm" onClick={toggleLang}>
              {lang === 'zh' ? '日本語' : '繁體中文'}
            </button>
          </div> */}

          {/* 說明文字，增加行高與左右留白感 */}
          <p className="text-base leading-7 text-center sm:text-left text-gray-300">
            關東/關西的常見連鎖店，簡潔抽籤與地圖開啟。
          </p>
        </div>
      </div>

        {/* Categories */}
        <div className="panel p-4">
          <CategoryChips
            categories={categories}
            value={category}
            onChange={setCategory}
            clearLabel={t('all')}
          />
        </div>

        {/* List */}
        <div className="panel p-0">
          <div className="flex justify-end p-4 border-b border-white/10">
            <button onClick={rollOne} className="btn btn-primary w-full sm:w-auto">
              🎲 {t('decideToday')}
            </button>
          </div>
          <ul className="list">
            {list.map((name) => (
              <li key={name} className="list-item">
                <div className="flex items-center gap-3 min-w-0">
                  <BrandAvatar src={logos[name]} alt={name} />
                  <span className="truncate">{name}</span>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-ghost text-xs" onClick={() => { setPicked(name); setOpen(true); }}>
                    {t('todayEatThis')}
                  </button>
                  <button className="btn btn-ghost text-xs" onClick={() => openMap(name)}>
                    {t('openMap')}
                  </button>
                </div>
              </li>
            ))}
            {!list.length && (
              <li className="p-6 text-center opacity-60">{t('noData')}</li>
            )}
          </ul>
        </div>

        {/* 右側廣告（保留）；左下角多餘功能已移除（不再渲染 ConsentBanner） */}
        <aside className="space-y-4">
          <div className="panel p-4">
            <AdSlot />
          </div>
          <div className="text-xs opacity-70 leading-relaxed text-center">
            {t('adNote')}
          </div>
        </aside>
      </section>

      {/* 手機底部操作列（保留） */}
      <div className="sheet sm:hidden">
        <div className="container py-3">
          <button onClick={rollOne} className="btn btn-primary w-full">
            🎲 {t('decideToday')}
          </button>
        </div>
      </div>

      <ResultModal
        open={open}
        name={picked}
        onClose={() => setOpen(false)}
        onOpenMap={() => picked && openMap(picked)}
        onCopy={() => picked && navigator.clipboard.writeText(picked)}
      />
    </main>
  );
}
