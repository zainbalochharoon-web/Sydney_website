import HeroSection from "@/components/sections/HeroSection"
import TrustBadges from "@/components/sections/TrustBadges"
import ServicesOverview from "@/components/sections/ServicesOverview"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FAQSection from "@/components/sections/FAQSection"
import AreasSection from "@/components/sections/AreasSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import ContactSection from "@/components/sections/ContactSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Locksmith Sydney | 24/7 Emergency Auto Locksmith Services",
  description:
    "Professional car locksmith services in Sydney. 24/7 emergency lockout, key replacement, ignition repair. Fast, reliable, licensed. Call (02) 8000 0000!",
  keywords:
    "car locksmith sydney, emergency locksmith, car key replacement, ignition repair, auto locksmith, mobile locksmith",
  openGraph: {
    title: "Car Locksmith Sydney | 24/7 Emergency Auto Locksmith Services",
    description:
      "Professional car locksmith services in Sydney. 24/7 emergency lockout, key replacement, ignition repair.",
    url: "https://carlocksmithsydney.com.au",
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <AreasSection />
      <HowItWorksSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
