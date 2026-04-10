"use client";

import Image from "next/image";
import { useRef } from "react";

export default function FurnitureGallery({ featured }: { featured: { image: string }[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -720,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 720,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Product Gallery
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Furniture showroom preview
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={scrollLeft}
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-stone-100"
          >
            ←
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-stone-100"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {featured.map((image, index) => (
          <div
            key={index}
            className="shrink-0 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm w-[90%] sm:w-[560px] md:w-[700px]"
          >
            <Image
              src={image.image}
              alt={`Furniture gallery image ${index + 1}`}
              width={1400}
              height={900}
              className="h-[320px] w-full object-cover md:h-[420px]"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}