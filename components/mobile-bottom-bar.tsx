export default function MobileBottomBar() {
  const phoneNumber = "+201008900076"
  const message = encodeURIComponent("مرحباً، أنا مهتم بمشاريع Hyde Park Developments وأريد المزيد من المعلومات.")
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden grid grid-cols-2">
      <a href={`tel:${phoneNumber}`}
        className="flex items-center justify-center gap-2 py-4 bg-[#c9a84c] text-black font-bold text-sm tracking-widest uppercase hover:bg-[#f5d98b] transition-colors">
        اتصل الآن
      </a>
      <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${message}`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-bold text-sm tracking-widest uppercase hover:bg-green-600 transition-colors">
        واتساب
      </a>
    </div>
  )
}
