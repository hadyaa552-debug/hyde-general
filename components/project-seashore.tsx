"use client"

import Image from "next/image"

export default function ProjectSeashore() {
  const phoneNumber = "+201008900076"
  const wa = encodeURIComponent("مرحباً، أنا مهتم بمشروع Seashore Hyde Park الساحل الشمالي وأريد معرفة المزيد")

  return (
    <section id="seashore" className="relative bg-[#0a0a0f]">

      {/* Chapter Label */}
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="flex items-center gap-5">
          <span className="text-[#c9a84c]/40 font-display text-6xl font-bold select-none">01</span>
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-1">الساحل الشمالي — رأس الحكمة</p>
            <h2 className="font-display text-5xl lg:text-7xl font-bold text-white">Seashore</h2>
          </div>
        </div>
      </div>

      {/* Hero Image Full Width */}
      <div className="relative aspect-[21/9] img-hover overflow-hidden">
        <Image src="/images/seashore4.png" alt="Seashore" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-transparent" />
        {/* Overlay text on image */}
        <div className="absolute bottom-10 right-10 text-right hidden lg:block">
          <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-2">مقدم 5% — تقسيط 8 سنوات</p>
          <p className="text-white/70 text-sm">كيلو 210 — رأس الحكمة</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Description - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[#8a8490] leading-relaxed text-base">
              قرية ساحلية استثنائية على البحر المتوسط مباشرة. تصميم مستوحى من فلوريدا الأمريكية بقلم SB Architects على 240 فدان بشاطئ 550 متر متواصل.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${wa}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-black px-7 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#f5d98b] transition-all duration-300 w-fit">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                احجز الآن
              </a>
              <a href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 text-[#c9a84c] text-xs tracking-widest uppercase hover:text-white transition-colors w-fit">
                <span>─</span> اتصل الآن
              </a>
            </div>
          </div>

          {/* Stats - 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-px border border-[#2a2a38]">
            {[
              { value: "240", unit: "فدان", label: "مساحة المشروع" },
              { value: "550م", unit: "", label: "شاطئ مباشر" },
              { value: "25", unit: "حمام", label: "سباحة" },
              { value: "9.2M+", unit: "جنيه", label: "الأسعار تبدأ من" },
            ].map((s, i) => (
              <div key={i} className="p-6 border-b border-[#2a2a38] last:border-0 hover:bg-[#111118] transition-colors">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-3xl font-bold text-[#c9a84c]">{s.value}</span>
                  <span className="text-[#c9a84c]/60 text-sm">{s.unit}</span>
                </div>
                <p className="text-[#8a8490] text-xs tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Image Grid - 4 cols */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-2">
            {["/images/seashore1.png", "/images/seashore3.png", "/images/seashore5.png", "/images/seashore-masterplan.jpg"].map((src, i) => (
              <div key={i} className="relative aspect-square img-hover overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Strip */}
        <div className="flex flex-wrap gap-px mt-10 border border-[#2a2a38]">
          {["فندق 5 نجوم", "25 حمام سباحة", "بحيرة 5 فدان", "كلوب هاوس", "ممشى 1 كم", "منطقة تجارية 10,000 م²", "مطعم على البحر", "كابانا"].map((item, i) => (
            <div key={i} className="px-5 py-3 border-l border-[#2a2a38] text-[#8a8490] text-xs tracking-wide hover:text-[#c9a84c] hover:bg-[#111118] transition-all cursor-default">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a38] to-transparent" />
      </div>
    </section>
  )
}
