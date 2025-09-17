'use client';
import Image from 'next/image';

type Props = {
  src?: string;
  alt: string;
  size?: number; // 可調整圖示尺寸，預設 50
};

export function BrandAvatar({ src, alt, size = 200 }: Props) {
  return (
    <div className="w-11 h-11 rounded bg-white flex items-center justify-center overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain p-1"
        />
      ) : (
        <div className="text-xs text-black/60 px-2">
          {alt.slice(0, 2)}
        </div>
      )}
    </div>
  );
}
