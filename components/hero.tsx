"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "+201008900076"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشاريع Hyde Park Developments وأريد معرفة المزيد من التفاصيل")

  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/seashore4.png')" }}>
      <div className="absolute inset-0 bg-black/55" />
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <Image src="/images/hyde-park-logo.webp" alt="Hyde Park Developments" width={220} height={70} className="h-16 w-auto mx-auto mb-8 brightness-0 invert" />
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Hyde Park Developments</h1>
        <p className="text-xl lg:text-2xl text-white/85 mb-4">مشاريعنا المميزة</p>
        <p className="text-base text-white/70 mb-10">Seashore • Hyde Park Central • التجمع الخامس</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold transition-colors text-lg">
            تواصل عبر واتساب
          </a>
          <a href={`tel:${phoneNumber}`}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold transition-colors text-lg">
            اتصل الآن
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {[
            { href: "#seashore", label: "Seashore ↓" },
            { href: "#central", label: "Hyde Park Central ↓" },
            { href: "#fifth", label: "التجمع الخامس ↓" },
          ].map((btn, i) => (
            <a key={i} href={btn.href}
              className="border border-white/50 text-white/80 hover:bg-white/10 px-5 py-2 text-sm transition-colors">
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
