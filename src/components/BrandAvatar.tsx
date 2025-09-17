'use client';
import Image from 'next/image';

export function BrandAvatar({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  return (
    <div className="w-11 h-11 rounded bg-white flex items-center justify-center overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="object-contain p-1"
        />
      ) : (
        <div className="text-xs text-black/60 px-2">{alt.slice(0, 2)}</div>
      )}
    </div>
  );
}
