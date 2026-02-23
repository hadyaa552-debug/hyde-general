"use client"

import Image from "next/image"

export default function ProjectFifth() {
  const phoneNumber = "+201008900076"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع Hyde Park التجمع الخامس وأريد معرفة المزيد من التفاصيل")

  return (
    <section id="fifth" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">التجمع الخامس - القاهرة الجديدة</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">Hyde Park New Cairo</h2>
          <p className="text-xl text-muted-foreground">هايد بارك التجمع الخامس - أكبر كمبوند في مصر</p>
        </div>

        {/* Main Image */}
        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-12">
          <Image src="/images/high4.webp" alt="Hyde Park New Cairo" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">Hyde Park New Cairo</p>
            <p className="text-white/80">التجمع الخامس - شارع التسعين</p>
          </div>
        </div>

        {/* Stats + Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              أكبر مشروع سكني متكامل في مصر على 6 مليون م² في التجمع الخامس. يضم أكبر حديقة مركزية في الشرق الأوسط على 141 فدان مع فندق 5 نجوم ومركز تجاري ضخم.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "6M", label: "م² إجمالي" },
                { value: "141", label: "فدان حديقة" },
                { value: "5%", label: "مقدم" },
              ].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5">
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "الموقع", value: "شارع التسعين - التجمع الخامس" },
              { label: "الوحدات", value: "شقق • دوبلكس • توين • فيلات" },
              { label: "الأسعار", value: "تبدأ من 7,300,000 جنيه" },
              { label: "السداد", value: "مقدم 5% وتقسيط 8 سنوات" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            "فندق 5 نجوم",
            "أكبر حديقة في الشرق الأوسط",
            "منطقة تجارية 400,000 م²",
            "مواقف 4,000+ سيارة",
            "مركز طبي متكامل",
            "نوادي رياضية وسبا",
            "مسارات دراجات ومشي",
            "أمن وحراسة 24/7",
          ].map((item, i) => (
            <div key={i} className="bg-muted/20 p-4 text-right border-r-2 border-primary">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-sm font-medium text-foreground">{item}</span>
                <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {["/images/high3-2.webp", "/images/high4.webp", "/images/high5.webp"].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image src={src} alt="Hyde Park New Cairo" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في Hyde Park New Cairo</h3>
          <p className="text-white/80 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">
              واتساب
            </a>
            <a href={`tel:${phoneNumber}`}
              className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-primary transition-colors">
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
