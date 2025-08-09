import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SchemaMarkup } from "@/components/SchemaMarkup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Car Locksmith Sydney | 24/7 Emergency Auto Locksmith Services",
  description:
    "Professional car locksmith services in Sydney. 24/7 emergency lockout, key replacement, ignition repair. Fast, reliable, licensed. Call now!",
  keywords: "car locksmith sydney, emergency locksmith, car key replacement, ignition repair, auto locksmith",
  openGraph: {
    title: "Car Locksmith Sydney | 24/7 Emergency Auto Locksmith Services",
    description:
      "Professional car locksmith services in Sydney. 24/7 emergency lockout, key replacement, ignition repair.",
    url: "https://carlocksmithsydney.com.au",
    siteName: "Car Locksmith Sydney",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
