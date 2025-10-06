"use client";

import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const photos = [
  "/images/IMG_2182.JPG",
  "/images/IMG_2183.JPG",
  "/images/IMG_2184.JPG",
  "/images/IMG_2185.JPG",
  "/images/IMG_2186.JPG",
  "/images/IMG_2187.JPG",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = () =>
    selectedIndex !== null &&
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  const nextImage = () =>
    selectedIndex !== null &&
    setSelectedIndex((selectedIndex + 1) % photos.length);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
    preventScrollOnSwipe: true, // fixes accidental page scrolling
  });

  return (
    <section className="py-16 px-4 md:px-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Gallery
        </h2>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:grid-cols-1">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/4] overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={src}
                alt={`Wedding photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 100vw, 33vw"
                quality={80}
                priority={index < 3}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl font-bold p-2 transition lightbox-button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              ×
            </button>

            {/* Prev button (desktop only) */}
            <button
              className="hidden sm:block absolute left-4 text-white text-4xl font-bold p-2 transition lightbox-button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>

            {/* Next button (desktop only) */}
            <button
              className="hidden sm:block absolute right-4 text-white text-4xl font-bold p-2 transition lightbox-button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>

            {/* Swipeable image container */}
            <div
              {...handlers}
              className="relative w-full max-w-full sm:max-w-3xl h-[70vh] cursor-grab select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIndex]}
                alt={`Wedding photo ${selectedIndex + 1}`}
                fill
                className="object-contain pointer-events-none"
                sizes="100vw"
                quality={85}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
