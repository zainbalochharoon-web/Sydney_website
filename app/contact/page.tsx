import type { Metadata } from "next"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Contact | Car Locksmith Sydney",
  description: "Contact Car Locksmith Sydney for 24/7 emergency car lockout, key replacement, and ignition repair. Fast response across Sydney.",
}

export default function ContactPage() {
  return <ContactSection />
}
