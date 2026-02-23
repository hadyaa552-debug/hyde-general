"use client"
import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", phone: "", unitType: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("https://formsubmit.co/ajax/leads@grandeur-spaces.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          "نوع الوحدة": formData.unitType || "لم يتم تحديده",
          _subject: "استفسار جديد - Hyde Park Seashore",
          _captcha: "false",
          _template: "table",
          _replyto: "leads@grandeur-spaces.com",
          _sender: "Hyde Park",
        }),
      })
      if (response.ok) {
        toast({ title: "تم الإرسال بنجاح!", description: "سنتواصل معك في أقرب وقت ممكن" })
        setFormData({ name: "", phone: "", unitType: "" })
      } else throw new Error("Failed")
    } catch {
      toast({ title: "حدث خطأ", description: "يرجى المحاولة مرة أخرى", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select value={formData.unitType}
        onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
        required
        className="w-full border border-border bg-background text-foreground px-4 py-3 text-right focus:outline-none focus:border-primary">
        <option value="">نوع الوحدة المهتم بها *</option>
        <option value="villa">فيلا مستقلة</option>
        <option value="twin">توين هاوس</option>
        <option value="town">تاون هاوس</option>
        <option value="apartment">شقة سكنية</option>
      </select>
      <input type="text" placeholder="الاسم الكامل *"
        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full border border-border bg-background text-foreground px-4 py-3 text-right focus:outline-none focus:border-primary placeholder:text-muted-foreground" />
      <input type="tel" placeholder="رقم الهاتف *"
        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required dir="ltr"
        className="w-full border border-border bg-background text-foreground px-4 py-3 text-right focus:outline-none focus:border-primary placeholder:text-muted-foreground" />
      <button type="submit" disabled={loading}
        className="w-full bg-primary text-white py-4 font-semibold text-base hover:bg-primary/90 transition-colors disabled:opacity-70">
        {loading ? "جاري الإرسال..." : "سجل اهتمامك"}
      </button>
    </form>
  )
}
