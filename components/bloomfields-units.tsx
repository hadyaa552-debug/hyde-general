"use client"

import Image from "next/image"

export default function BloomfieldsUnits() {
  const phoneNumber = "+201008900076"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع Seashore Hyde Park الساحل الشمالي وأريد معرفة المزيد من التفاصيل")

  const units = [
    { type: "شاليهات", subtype: "Chalets", desc: "شاليهات فاخرة بإطلالات مباشرة على البحر المتوسط، مساحات تبدأ من 70 م²", image: "/images/seashore1.png" },
    { type: "توين هاوس", subtype: "Twin Houses", desc: "توين هاوس بتصميمات عصرية مستوحاة من فلوريدا، مساحات من 188 إلى 266 م²", image: "/images/seashore2.png" },
    { type: "تاون هاوس", subtype: "Townhouses", desc: "تاون هاوس فاخر بمساحات تبدأ من 177 م² مع حدائق خاصة وإطلالات بحرية", image: "/images/seashore3.png" },
    { type: "Town Island", subtype: "Town Island", desc: "وحدات Town Island المميزة تبدأ من 168 م² بتصميم معماري استثنائي", image: "/images/seashore5.png" },
  ]

  return (
    <section id="units" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">الوحدات المتاحة</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">تنوع يلبي جميع الاحتياجات</h2>
          <p className="text-muted-foreground text-lg">90% من الوحدات بإطلالة مباشرة على البحر المتوسط</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {units.map((unit, i) => (
            <div key={i} className="group overflow-hidden bg-muted/10 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={unit.image} alt={unit.type} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700">
                  {unit.subtype}
                </div>
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-foreground mb-2">{unit.type}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{unit.desc}</p>
                <div className="flex gap-3 justify-end">
                  <a href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2 border border-primary text-primary px-4 py-2 text-sm font-semibold hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.03 2a2 2 0 012-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    اتصل الآن
                  </a>
                  <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 text-sm font-semibold hover:bg-green-600 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA تحت الوحدات */}
        <div className="mt-12 bg-primary p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">هل أنت مهتم بإحدى الوحدات؟</h3>
          <p className="text-white/80 mb-8 text-lg">تواصل معنا الآن للحصول على التفاصيل والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors">
              تواصل عبر واتساب
            </a>
            <a href={`tel:${phoneNumber}`}
              className="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-primary transition-colors">
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
