"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  name: string;
  image: string;
  secondImage?: string;
};

export default function ProductGallery({
  name,
  image,
  secondImage,
}: ProductGalleryProps) {
  const images = secondImage ? [image, secondImage] : [image];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="grid gap-3 lg:grid-cols-[5rem_1fr]">
      {/* THUMBNAILS */}
      <div className="order-2 flex gap-2 lg:order-1 lg:flex-col">
        {images.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`View ${name} image ${index + 1}`}
            className={`relative aspect-[3/4] w-16 overflow-hidden bg-kaveri-paper lg:w-full ${
              activeImage === index
                ? "ring-1 ring-kaveri-ink"
                : "opacity-60 transition-opacity duration-300 hover:opacity-100"
            }`}
          >
            <Image
              src={item}
              alt={`${name} thumbnail ${index + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div className="order-1 lg:order-2">
        <div className="relative aspect-[3/4] overflow-hidden bg-kaveri-paper sm:aspect-[4/5]">
          <Image
            key={images[activeImage]}
            src={images[activeImage]}
            alt={name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
