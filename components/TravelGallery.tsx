"use client";

import { useEffect, useState } from "react";
import ManagedImage from "@/components/ManagedImage";
import type { GalleryImage } from "@/data/gallery";

type TravelGalleryProps = {
  images: GalleryImage[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function TravelGallery({
  images,
  eyebrow = "실제 운영사진",
  title = "현장에서 만나는 사이투어",
  description = "DMZ, 서울, 공항픽업, 기업행사, 가이드 서비스까지 실제 운영 장면을 한눈에 확인해보세요."
}: TravelGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length));
  };
  const showNext = () => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="section-y bg-paper/45">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-normal text-navy sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper text-left shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              onClick={() => setActiveIndex(index)}
              aria-label={`${image.title} 사진 보기`}
            >
              <ManagedImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/62 to-transparent px-4 pb-4 pt-10 text-sm font-bold text-white">
                {image.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/88 px-5 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="운영사진 크게 보기"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={closeLightbox}
            aria-label="갤러리 닫기"
          />
          <div className="relative z-10 w-full max-w-5xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:aspect-[16/10]">
              <ManagedImage src={activeImage.src} alt={activeImage.alt} fill className="object-cover" sizes="90vw" priority />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-lg font-bold">{activeImage.title}</p>
                <p className="mt-1 text-sm text-white/70">
                  {(activeIndex ?? 0) + 1} / {images.length}
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-navy"
                onClick={closeLightbox}
              >
                닫기
              </button>
            </div>
          </div>

          <button
            type="button"
            className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white hover:text-navy sm:left-8"
            onClick={showPrevious}
            aria-label="이전 사진"
          >
            {"<"}
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white hover:text-navy sm:right-8"
            onClick={showNext}
            aria-label="다음 사진"
          >
            {">"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
