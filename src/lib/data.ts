// 用「分類代碼」當 key，方便 i18n
export type Category =
  | 'japanese'
  | 'don'
  | 'ramen'
  | 'curry'
  | 'cafe'
  | 'burger'
  | 'chinese'
  | 'yoshoku'
  | 'sushi';

  export const dataKanto: Record<Category, string[]> = {
    japanese: ['やよい軒', '大戸屋', '富士そば', '丸亀製麺'], 
    don: ['吉野家', '松屋', 'すき家', 'なか卯', 'かつや'],
    ramen: ['一風堂', '一蘭', 'ラーメン花月嵐'],
    curry: ['CoCo壱番屋', 'ゴーゴーカレー'],
    cafe: ['ドトール', 'スターバックス', 'ベローチェ', 'サンマルクカフェ', 'コメダ珈琲店'], 
    burger: ['マクドナルド', 'モスバーガー', 'フレッシュネスバーガー'],
    chinese: ['日高屋', '餃子の王将', '大阪の王将', 'バーミヤン'],
    yoshoku: ['ガスト', 'サイゼリヤ'],
    sushi: ['スシロー', 'くら寿司'],
  };
  
  export const dataKansai: Record<Category, string[]> = {
    japanese: ['やよい軒', '大戸屋', '丸亀製麺'], 
    don: ['吉野家', '松屋', 'すき家', 'なか卯', 'かつや'],
    ramen: ['天下一品', '来来亭', 'ラーメン花月嵐', '一風堂', '一蘭'],
    curry: ['CoCo壱番屋'],
    cafe: ['ドトール', 'スターバックス', 'コメダ珈琲店'], 
    burger: ['マクドナルド', 'モスバーガー'],
    chinese: ['餃子の王将', '大阪の王将', '551蓬莱'],
    yoshoku: ['ガスト', 'サイゼリヤ'],
    sushi: ['スシロー', 'くら寿司'],
  };
  

export function categoriesFromRegion(_region: 'kanto' | 'kansai'): Category[] {
  return ['japanese', 'don', 'ramen', 'curry', 'sushi', 'cafe', 'burger', 'chinese', 'yoshoku'];
}



