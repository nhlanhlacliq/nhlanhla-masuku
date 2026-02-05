"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ImageItem = { src: string; alt: string };

// ─── Tweak these ────────────────────────────────────────
const AUTO_SCROLL_SPEED = 0.3; // px per frame (0 = off)
const ROW_HEIGHT_SM = 144; // px — row height on small screens
const ROW_HEIGHT_LG = 176; // px — row height on larger screens
// Masonry-like width pattern — cycles through these for visual variety
const SIZES = ["w-56", "w-44", "w-52", "w-48", "w-60", "w-40"];
// ────────────────────────────────────────────────────────

const ImageCarousel = ({ images }: { images: ImageItem[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;

    const tick = () => {
      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += AUTO_SCROLL_SPEED;
        // Seamless loop: snap back when reaching the duplicate half
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const isScrollable = images.length > 3;

  // Duplicate images for seamless infinite loop
  const displayImages = isScrollable ? [...images, ...images] : images;

  // ── Few images: simple responsive grid ──
  if (!isScrollable) {
    return (
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {images.map((img, idx) => (
          <div
            key={idx}
            className='rounded-lg overflow-hidden border border-foreground/10 bg-foreground/[0.02]'
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className='w-full h-auto object-cover'
            />
          </div>
        ))}
      </div>
    );
  }

  // ── Many images: scrollable 2-row masonry carousel ──
  return (
    <div
      ref={scrollRef}
      className='mt-4 -mx-6 px-6 overflow-x-auto scrollbar-hide'
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className='grid grid-rows-2 grid-flow-col gap-3 w-max py-1'>
        {displayImages.map((img, idx) => (
          <div
            key={idx}
            className={`${SIZES[idx % SIZES.length]} rounded-lg overflow-hidden border border-foreground/10 bg-foreground/[0.02] flex-shrink-0`}
            style={{ height: `clamp(${ROW_HEIGHT_SM}px, 20vw, ${ROW_HEIGHT_LG}px)` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
