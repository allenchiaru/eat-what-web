'use client';
import { createContext, useContext, useMemo, useState } from 'react';

export type Lang = 'zh' | 'ja';

const dict = {
  zh: {
    all: '全部',
    decideToday: '今天吃什麼？',
    todayEatThis: '今天就吃這個',
    openMap: '開地圖',
    noData: '目前沒有資料',
    adNote: '支援網站的方式：顯示非侵入式廣告、未收集個資。未來將加入外送聯盟連結。',
    japanese: '和食',
    don: '丼飯',
    ramen: '拉麵',
    curry: '咖哩',
    cafe: '咖啡 / 輕食',
    burger: '漢堡 / 速食',
    chinese: '中華',
    yoshoku: '洋食',
    sushi: '壽司',
  },
  ja: {
    all: 'すべて',
    decideToday: '今日のごはんを決める',
    todayEatThis: '本日のおすすめ',
    openMap: '地図を開く',
    noData: '該当データがありません',
    adNote: 'サイト運営を支えるため、非侵入型広告を表示します。個人情報は収集しません。今後、デリバリーのアフィリエイトリンクを追加予定。',
    japanese: '和食',
    don: '丼',
    ramen: 'ラーメン',
    curry: 'カレー',
    cafe: 'カフェ / 軽食',
    burger: 'ハンバーガー / ファストフード',
    chinese: '中華',
    yoshoku: '洋食',
    sushi: '寿司',
  },
} as const;

// ❗ t 的型別改成接受 string，回傳找不到時就回傳 key 本身
const I18nCtx = createContext<{
  lang: Lang;
  toggleLang: () => void;
  t: (k: string) => string;
}>({
  lang: 'zh',
  toggleLang: () => {},
  t: (k) => (dict.zh as Record<string, string>)[k] ?? k,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'zh';
    return (localStorage.getItem('lang') as Lang) || 'zh';
  });

  const value = useMemo(
    () => ({
      lang,
      toggleLang: () => {
        const next: Lang = lang === 'zh' ? 'ja' : 'zh';
        setLang(next);
        if (typeof window !== 'undefined') localStorage.setItem('lang', next);
      },
      t: (k: string) => (dict[lang] as Record<string, string>)[k] ?? k,
    }),
    [lang]
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
