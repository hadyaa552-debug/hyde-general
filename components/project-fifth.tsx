"use client"

import Image from "next/image"

export default function ProjectFifth() {
  const phoneNumber = "+201008900076"
  const wa = encodeURIComponent("مرحباً، أنا مهتم بمشروع Hyde Park New Cairo التجمع الخامس وأريد معرفة المزيد")

  return (
    <section id="fifth" className="relative bg-[#0a0a0f]">
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="flex items-center gap-5">
          <span className="text-[#c9a84c]/40 font-display text-6xl font-bold select-none">03</span>
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-1">التجمع الخامس — شارع التسعين</p>
            <h2 className="font-display text-5xl lg:text-7xl font-bold text-white">Hyde Park <span className="text-[#c9a84c]">New Cairo</span></h2>
          </div>
        </div>
      </div>

      {/* Full bleed hero */}
      <div className="relative aspect-[21/8] img-hover overflow-hidden">
        <Image src="/images/high4.webp" alt="Hyde Park New Cairo" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 lg:px-12 pb-10">
          <div className="flex flex-wrap gap-6">
            {[
              { v: "6M م²", l: "إجمالي المشروع" },
              { v: "141 فدان", l: "أكبر حديقة في الشرق الأوسط" },
              { v: "5%", l: "مقدم" },
              { v: "8 سنوات", l: "تقسيط" },
            ].map((s, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-sm border border-[#2a2a38] px-5 py-3">
                <div className="font-display text-xl font-bold text-[#c9a84c]">{s.v}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#8a8490] leading-relaxed mb-8">
              أكبر مشروع سكني متكامل في مصر على 6 مليون م² في قلب التجمع الخامس. يضم أكبر حديقة مركزية في الشرق الأوسط على 141 فدان، فندق 5 نجوم، ومنطقة تجارية 400,000 م². مجتمع متكامل يجمع السكن والترفيه والأعمال في مكان واحد.
            </p>
            <div className="space-y-3 mb-10">
              {[
                { l: "الموقع", v: "شارع التسعين — التجمع الخامس" },
                { l: "الوحدات", v: "شقق • دوبلكس • توين • تاون • فيلات" },
                { l: "الأسعار", v: "تبدأ من 7,300,000 جنيه" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-[#2a2a38]">
                  <span className="text-[#c9a84c] text-sm font-medium">{item.v}</span>
                  <span className="text-[#8a8490] text-xs tracking-wide">{item.l}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${wa}`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center bg-[#c9a84c] text-black px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#f5d98b] transition-all duration-300">
                واتساب
              </a>
              <a href={`tel:${phoneNumber}`}
                className="flex-1 text-center border border-[#c9a84c]/40 text-[#c9a84c] px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#c9a84c]/10 transition-all duration-300">
                اتصل
              </a>
            </div>
          </div>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-px bg-[#2a2a38] border border-[#2a2a38]">
            {[
              "فندق 5 نجوم",
              "حديقة 141 فدان",
              "منطقة تجارية 400K م²",
              "4,000+ موقف سيارة",
              "مركز طبي متكامل",
              "نوادي رياضية وسبا",
              "مسارات دراجات ومشي",
              "أمن وحراسة 24/7",
            ].map((item, i) => (
              <div key={i} className="bg-[#111118] px-5 py-4 flex items-center gap-3 hover:bg-[#1a1a24] transition-colors">
                <div className="w-1.5 h-1.5 bg-[#c9a84c] flex-shrink-0" />
                <span className="text-[#8a8490] text-sm hover:text-[#f0ece4] transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-3 gap-px bg-[#2a2a38] border border-[#2a2a38] mt-12">
          {["/images/high3-2.webp", "/images/high5.webp", "/images/seashore2.png"].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] img-hover overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
