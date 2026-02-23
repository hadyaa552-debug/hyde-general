"use client"

import Image from "next/image"

export default function BloomfieldsOverview() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">نبذة عن المشروع</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">مشروع Seashore Hyde Park</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-right space-y-6 order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Seashore</span> - قرية ساحلية فاخرة على البحر المتوسط مباشرة في رأس الحكمة. تصميم مستوحى من أسلوب فلوريدا الأمريكية على مساحة 240 فدان بشاطئ 550 متر.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              من تطوير <span className="font-semibold text-foreground">Hyde Park Developments</span> بالتعاون مع مكتب SB Architects الأمريكي وشركة EDSA للتخطيط العمراني.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "240", label: "فدان" },
                { value: "550م", label: "شاطئ مباشر" },
                { value: "1,850", label: "وحدة" },
              ].map((s, i) => (
                <div key={i} className="bg-muted/30 p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/seashore1.png" alt="Seashore Hyde Park" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <Image src="/images/seashore5.png" alt="Seashore Hyde Park" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>

        {/* Master Plan */}
        <div className="text-center mb-8">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">المخطط العام</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Master Plan</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            مخطط متكامل يضم فندق 5 نجوم، كلوب هاوس، 25 حمام سباحة، بحيرة 5 فدان، وممشى أخضر 1 كم
          </p>
        </div>
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden shadow-2xl">
          <Image
            src="/images/seashore-masterplan.jpg"
            alt="Seashore Hyde Park Master Plan"
            width={800}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
