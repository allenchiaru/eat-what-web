import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '待會吃什麼？ | なに食べる？ by Allen Chia',
  description: '關東/關西連鎖抽籤工具（繁中/日文）。一鍵選出今天吃什麼。',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/icons/icon-192.png' },
    { rel: 'apple-touch-icon', url: '/icons/icon-192.png' }
  ]
};
export const viewport = {
  themeColor: '#0b0b0c',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="bg-[#0b0b0c] text-gray-100">
        <I18nProvider>
          <header className="sticky top-0 z-40 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/25 border-b border-white/10">
            <div className="container flex items-center justify-between py-3 gap-3">
              <Link href="/" className="font-semibold text-lg tracking-tight brand">待會吃什麼？ / なに食べる？ by Allen Chia</Link>
              <div className="text-xs opacity-70"></div>
            </div>
          </header>
          {children}
          <footer className="mt-10">
            <div className="hr" />
            <div className="container py-6 text-sm opacity-70">
              © {new Date().getFullYear()} EatWhat · 僅作資訊彙整，不使用官方商標。
            </div>
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}