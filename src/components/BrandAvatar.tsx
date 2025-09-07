'use client';

import Image from 'next/image';

export function BrandAvatar({ src, alt }: { src?: string; alt: string }) {
  if (src) {
    return (
      <div className="w-10 h-10 rounded bg-white flex items-center justify-center overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="object-contain max-w-[80%] max-h-[80%]"
        />
      </div>
    );
  }
  return (
    <div
      className="w-10 h-10 rounded bg-white/10 border border-white/15"
      aria-hidden="true"
    />
  );
}
