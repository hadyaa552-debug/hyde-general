import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/toaster"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Hyde Park Developments | Seashore · Central · New Cairo",
  description: "مشاريع Hyde Park Developments المميزة - Seashore الساحل الشمالي، Hyde Park Central التجمع السادس، Hyde Park New Cairo التجمع الخامس",
  keywords: ["Hyde Park Developments", "Seashore", "Hyde Park Central", "التجمع الخامس", "رأس الحكمة"],
  metadataBase: new URL("https://hydeparkproperties.org"),
  openGraph: {
    type: "website",
    locale: "ar_EG",
    title: "Hyde Park Developments | مشاريعنا المميزة",
    images: [{ url: "/images/seashore4.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/favicon.png?v=2" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
