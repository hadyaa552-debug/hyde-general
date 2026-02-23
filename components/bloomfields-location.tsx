"use client"

import Image from "next/image"

export default function BloomfieldsLocation() {
  const nearbyPlaces = [
    "كيلو 210 طريق الإسكندرية مطروح",
    "رأس الحكمة - الساحل الشمالي",
    "3 كم من مخرج طريق فوقة",
    "قريب من مطار العلمين الجديد",
    "3.5 ساعة من القاهرة",
    "207 كم من الإسكندرية",
  ]

  return (
    <section id="location" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">الموقع الاستراتيجي</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">في قلب رأس الحكمة</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            موقع استثنائي على البحر المتوسط مباشرة في رأس الحكمة - أجمل شواطئ الساحل الشمالي
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground mb-6">قريب من</h3>
            {nearbyPlaces.map((place, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-border">
                <div className="w-2 h-2 bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">{place}</span>
              </div>
            ))}
            <p className="text-sm text-muted-foreground pt-4 leading-relaxed">
              3 بوابات رئيسية توفر وصولاً سهلاً من الطرق الرئيسية
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
            <Image src="/images/seashore2.png" alt="موقع Seashore Hyde Park" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  )
}
