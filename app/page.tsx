import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectSeashore from "@/components/project-seashore"
import ProjectCentral from "@/components/project-central"
import ProjectFifth from "@/components/project-fifth"
import ContactForm from "@/components/contact-form"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <Hero />
      <ProjectSeashore />
      <ProjectCentral />
      <ProjectFifth />

      {/* Contact */}
      <section id="contact" className="bg-[#0d0d14] py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">تواصل معنا</span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-4">سجّل اهتمامك</h2>
            <p className="text-[#8a8490]">سيتواصل معك فريق المبيعات خلال 24 ساعة</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Info */}
            <div className="space-y-8">
              <div className="border border-[#2a2a38] p-8 space-y-6">
                <div>
                  <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-2">هاتف مباشر</p>
                  <a href="tel:+201008900076"
                    className="font-display text-3xl text-white hover:text-[#c9a84c] transition-colors">
                    0100 8900 076
                  </a>
                </div>
                <div className="h-px bg-[#2a2a38]" />
                <div className="space-y-4">
                  {[
                    { name: "Seashore", loc: "رأس الحكمة — الساحل الشمالي", href: "#seashore" },
                    { name: "Hyde Park Central", loc: "التجمع السادس — نيو كايرو", href: "#central" },
                    { name: "Hyde Park New Cairo", loc: "التجمع الخامس — شارع التسعين", href: "#fifth" },
                  ].map((p, i) => (
                    <a key={i} href={p.href}
                      className="flex items-center justify-between group hover:bg-[#1a1a24] px-3 py-2 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#c9a84c]" />
                        <div>
                          <p className="text-[#f0ece4] text-sm font-semibold group-hover:text-[#c9a84c] transition-colors">{p.name}</p>
                          <p className="text-[#8a8490] text-xs">{p.loc}</p>
                        </div>
                      </div>
                      <span className="text-[#c9a84c]/40 group-hover:text-[#c9a84c] transition-colors text-xs">←</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-[#2a2a38] py-8 pb-24 lg:pb-8">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[#8a8490] text-xs tracking-wide">
            © 2025 Hyde Park Developments — جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-4">
            <span className="gold-line" style={{width: "30px"}} />
            <span className="text-[#c9a84c] text-xs tracking-widest">HYDE PARK</span>
            <span className="gold-line" style={{width: "30px"}} />
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}
