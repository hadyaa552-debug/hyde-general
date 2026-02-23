"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const phoneNumber = "+201008900076"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#seashore", label: "Seashore" },
    { href: "#central", label: "Central" },
    { href: "#fifth", label: "New Cairo" },
    { href: "#contact", label: "تواصل معنا" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#2a2a38]"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">

          <a href="#home" className="flex-shrink-0">
            <Image src="/images/hyde-park-logo.webp" alt="Hyde Park" width={140} height={45}
              className="h-9 w-auto brightness-0 invert opacity-90" />
          </a>

          {/* Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-xs font-medium text-[#8a8490] hover:text-[#c9a84c] transition-colors duration-300 tracking-[0.15em] uppercase">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <a href={`tel:${phoneNumber}`}
            className="hidden lg:flex items-center gap-3 border border-[#c9a84c]/40 text-[#c9a84c] px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300">
            <span>0100 8900 076</span>
          </a>

          {/* Mobile */}
          <button className="lg:hidden text-[#f0ece4]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#111118] border-t border-[#2a2a38] py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm text-[#8a8490] hover:text-[#c9a84c] py-3 px-4 border-b border-[#2a2a38]/50 tracking-widest uppercase transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={`tel:${phoneNumber}`} className="text-[#c9a84c] py-3 px-4 text-sm tracking-wider mt-2">
                📞 0100 8900 076
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
