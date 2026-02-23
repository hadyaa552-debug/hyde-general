"use client"

import Image from "next/image"

export default function ProjectCentral() {
  const phoneNumber = "+201008900076"
  const wa = encodeURIComponent("مرحباً، أنا مهتم بمشروع Hyde Park Central التجمع السادس وأريد معرفة المزيد")

  return (
    <section id="central" className="relative bg-[#0d0d14]">
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="flex items-center gap-5">
          <span className="text-[#c9a84c]/40 font-display text-6xl font-bold select-none">02</span>
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-1">التجمع السادس — نيو كايرو</p>
            <h2 className="font-display text-5xl lg:text-7xl font-bold text-white">Hyde Park <span className="text-[#c9a84c]">Central</span></h2>
          </div>
        </div>
      </div>

      {/* Split Layout */}
      <div className="grid lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Image */}
        <div className="relative img-hover overflow-hidden min-h-[400px]">
          <Image src="/images/high1.webp" alt="Hyde Park Central" fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0d0d14]/60 to-transparent" />
        </div>

        {/* Right - Content */}
        <div className="bg-[#111118] p-10 lg:p-16 flex flex-col justify-center">
          <p className="text-[#8a8490] leading-relaxed mb-10">
            كمبوند سكني راقٍ يجمع بين التصميم العصري المستوحى من لندن والخدمات المتكاملة. على 220 فدان بالتجمع السادس مع 70% مساحات خضراء وإطلالات خلابة من جميع الوحدات.
          </p>

          {/* Key Stats Horizontal */}
          <div className="grid grid-cols-3 gap-px bg-[#2a2a38] border border-[#2a2a38] mb-10">
            {[
              { v: "220", l: "فدان" },
              { v: "70%", l: "خضراء" },
              { v: "4", l: "أنواع وحدات" },
            ].map((s, i) => (
              <div key={i} className="bg-[#111118] p-6 text-center">
                <div className="font-display text-3xl font-bold text-[#c9a84c] mb-1">{s.v}</div>
                <div className="text-[#8a8490] text-xs tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="space-y-3 mb-10">
            {[
              { l: "الموقع", v: "التجمع السادس — نيو كايرو" },
              { l: "الوحدات", v: "فيلات • توين • تاون • شقق" },
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
      </div>

      {/* Bottom Image Strip */}
      <div className="grid grid-cols-3 gap-px bg-[#2a2a38]">
        {["/images/high3.webp", "/images/high5.webp", "/images/high6.webp"].map((src, i) => (
          <div key={i} className="relative aspect-[4/3] img-hover overflow-hidden">
            <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a38] to-transparent" />
      </div>
    </section>
  )
}
