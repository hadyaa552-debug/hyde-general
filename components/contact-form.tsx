"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", phone: "", project: "", unitType: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("https://formsubmit.co/ajax/ahany9710@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          "المشروع": formData.project || "لم يتم تحديده",
          "نوع الوحدة": formData.unitType || "لم يتم تحديده",
          _cc: "Sherifshenawy20@gmail.com,a.abdelraheem6696@gmail.com",
          _subject: "استفسار جديد - Hyde Park Developments",
          _captcha: "false",
          _template: "table",
        }),
      })
      if (response.ok) {
        toast({ title: "تم الإرسال بنجاح!", description: "سنتواصل معك في أقرب وقت ممكن" })
        setFormData({ name: "", phone: "", project: "", unitType: "" })
      } else throw new Error("Failed")
    } catch {
      toast({ title: "حدث خطأ", description: "يرجى المحاولة مرة أخرى", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const unitsByProject: Record<string, string[]> = {
    seashore: ["شاليه", "توين هاوس", "تاون هاوس", "Town Island"],
    central: ["فيلا مستقلة", "توين هاوس", "تاون هاوس", "شقة سكنية"],
    fifth: ["شقة", "دوبلكس", "توين هاوس", "تاون هاوس", "فيلا"],
  }

  const currentUnits = formData.project ? unitsByProject[formData.project] || [] : []

  const inputClass = "w-full bg-[#111118] border border-[#2a2a38] text-[#f0ece4] px-4 py-3.5 text-sm text-right focus:outline-none focus:border-[#c9a84c] transition-colors placeholder:text-[#8a8490]"

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <select value={formData.project}
        onChange={(e) => setFormData({ ...formData, project: e.target.value, unitType: "" })}
        required className={inputClass}>
        <option value="">اختر المشروع *</option>
        <option value="seashore">Seashore — الساحل الشمالي</option>
        <option value="central">Hyde Park Central — التجمع السادس</option>
        <option value="fifth">Hyde Park New Cairo — التجمع الخامس</option>
      </select>

      {currentUnits.length > 0 && (
        <select value={formData.unitType}
          onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
          className={inputClass}>
          <option value="">نوع الوحدة (اختياري)</option>
          {currentUnits.map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
      )}

      <input type="text" placeholder="الاسم الكامل *"
        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required className={inputClass} />

      <input type="tel" placeholder="رقم الهاتف *"
        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required dir="ltr" className={inputClass} />

      <button type="submit" disabled={loading}
        className="w-full bg-[#c9a84c] text-black py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#f5d98b] transition-all duration-300 disabled:opacity-50">
        {loading ? "جاري الإرسال..." : "سجل اهتمامك"}
      </button>
    </form>
  )
}
