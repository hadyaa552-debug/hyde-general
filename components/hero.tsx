"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const phoneNumber = "+201008900076"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشاريع Hyde Park Developments وأريد معرفة المزيد من التفاصيل")

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/seashore4.png" alt="Hyde Park" fill className="object-cover scale-105" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Top label */}
        <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="gold-line" />
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Hyde Park Developments</span>
          <span className="gold-line" />
        </div>

        {/* Main Title */}
        <h1 className={`font-display text-6xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-none transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          مشاريعنا
          <span className="block gold-shimmer text-5xl lg:text-7xl mt-2">المميزة</span>
        </h1>

        {/* Projects Pills */}
        <div className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {[
            { href: "#seashore", label: "Seashore", sub: "رأس الحكمة" },
            { href: "#central", label: "Hyde Park Central", sub: "التجمع السادس" },
            { href: "#fifth", label: "New Cairo", sub: "التجمع الخامس" },
          ].map((p, i) => (
            <a key={i} href={p.href}
              className="group flex flex-col items-center border border-white/20 hover:border-[#c9a84c] bg-black/30 hover:bg-[#c9a84c]/10 px-6 py-3 transition-all duration-300 backdrop-blur-sm">
              <span className="text-white text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">{p.label}</span>
              <span className="text-white/50 text-xs mt-0.5">{p.sub}</span>
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#c9a84c] text-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#f5d98b] transition-all duration-300">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            تواصل عبر واتساب
          </a>
          <a href={`tel:${phoneNumber}`}
            className="flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300">
            اتصل الآن
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">اكتشف المشاريع</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
