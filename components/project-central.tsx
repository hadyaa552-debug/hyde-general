"use client"

import Image from "next/image"

export default function ProjectCentral() {
  const phoneNumber = "+201008900076"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع Hyde Park Central التجمع السادس وأريد معرفة المزيد من التفاصيل")

  return (
    <section id="central" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">التجمع السادس - القاهرة الجديدة</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">Hyde Park Central</h2>
          <p className="text-xl text-muted-foreground">هايد بارك سنترال - التجمع السادس</p>
        </div>

        {/* Main Image */}
        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-12">
          <Image src="/images/high1.webp" alt="Hyde Park Central" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">Hyde Park Central</p>
            <p className="text-white/80">التجمع السادس - نيو كايرو</p>
          </div>
        </div>

        {/* Stats + Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              كمبوند سكني راقٍ في التجمع السادس يجمع بين التصميم العصري والخدمات المتكاملة. على 220 فدان بتصميمات معمارية فاخرة ومساحات خضراء واسعة وإطلالات خلابة.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "220", label: "فدان" },
                { value: "70%", label: "مساحات خضراء" },
                { value: "4", label: "أنواع وحدات" },
              ].map((s, i) => (
                <div key={i} className="bg-background p-5">
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "الموقع", value: "التجمع السادس - نيو كايرو" },
              { label: "الوحدات", value: "فيلات • توين هاوس • تاون هاوس • شقق" },
              { label: "الأسعار", value: "تبدأ من 7,300,000 جنيه" },
              { label: "السداد", value: "أقساط مرنة تناسب احتياجاتك" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {["/images/high3.webp", "/images/high5.webp", "/images/high6.webp"].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image src={src} alt="Hyde Park Central" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في Hyde Park Central</h3>
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
