"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function BloomfieldsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/images/seashore1.png", alt: "Seashore Hyde Park" },
    { src: "/images/seashore2.png", alt: "Seashore Hyde Park" },
    { src: "/images/seashore3.png", alt: "Seashore Hyde Park" },
    { src: "/images/seashore4.png", alt: "Seashore Hyde Park" },
    { src: "/images/seashore5.png", alt: "Seashore Hyde Park" },
    { src: "/images/seashore-masterplan.jpg", alt: "Seashore Hyde Park Master Plan" },
  ]

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">معرض الصور</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">اكتشف Seashore Hyde Park</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(i)}>
              <Image src={img.src} alt={img.alt} fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 left-4 text-white hover:text-primary" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image src={images[selectedImage].src} alt={images[selectedImage].alt} fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </section>
  )
}
