import { Building2, Users, Award, MapPin } from "lucide-react"

export default function AboutDeveloper() {
  const stats = [
    { icon: Building2, number: "15+", label: "مشروع متكامل" },
    { icon: MapPin, number: "3", label: "مواقع استراتيجية" },
    { icon: Users, number: "+30,000", label: "عميل راضٍ" },
    { icon: Award, number: "2007", label: "سنة التأسيس" },
  ]

  return (
    <section id="developer" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">عن المطور</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Hyde Park Developments</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            شركة هايد بارك للتطوير العقاري من أبرز شركات التطوير العقاري في مصر، تمتلك خبرة واسعة في تطوير مجتمعات سكنية راقية ومتكاملة بأعلى معايير الجودة والتصميم.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10">
                <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.number}</div>
              <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
