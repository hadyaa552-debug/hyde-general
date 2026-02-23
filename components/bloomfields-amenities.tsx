"use client"

import Image from "next/image"

export default function BloomfieldsAmenities() {
  const phoneNumber = "+201008900076"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع Seashore Hyde Park الساحل الشمالي وأريد معرفة المزيد من التفاصيل")

  const amenities = [
    "فندق 5 نجوم مع شقق مفروشة",
    "25 حمام سباحة على الشاطئ",
    "بحيرة 5 فدان",
    "كلوب هاوس على البحر",
    "كابانا على الشاطئ",
    "ممشى أخضر 1 كم",
    "منطقة تجارية 10,000 م²",
    "مطعم على البحر مباشرة",
    "أمن وحراسة 24/7",
  ]

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">المميزات والخدمات</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">حياة متكاملة على البحر</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            خدمات ومرافق متكاملة توفر أعلى مستويات الراحة والرفاهية على شاطئ البحر المتوسط
          </p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden mb-12 shadow-2xl">
          <Image src="/images/seashore3.png" alt="مميزات Seashore Hyde Park" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border mb-12">
          {amenities.map((amenity, i) => (
            <div key={i} className="p-6 border-b border-l border-border hover:bg-muted/30 transition-colors text-right">
              <div className="flex items-center gap-3 justify-end">
                <span className="font-medium text-foreground">{amenity}</span>
                <div className="w-2 h-2 bg-primary flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-muted/30 border border-border p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h3 className="text-2xl font-bold text-foreground mb-2">اكتشف كل مميزات المشروع</h3>
            <p className="text-muted-foreground">تواصل مع فريق المبيعات للحصول على جولة إرشادية</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 font-semibold hover:bg-green-600 transition-colors whitespace-nowrap">
              واتساب
            </a>
            <a href={`tel:${phoneNumber}`}
              className="bg-primary text-white px-6 py-3 font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
