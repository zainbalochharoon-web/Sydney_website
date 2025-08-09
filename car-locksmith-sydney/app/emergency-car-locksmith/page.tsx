import type { Metadata } from "next"
import { AlertTriangle, Clock, Phone, Shield, CheckCircle, MapPin } from "lucide-react"
import EmergencyProcessSection from "@/components/sections/EmergencyProcessSection"
import EmergencyPricingSection from "@/components/sections/EmergencyPricingSection"
import EmergencyServiceAreasSection from "@/components/sections/EmergencyServiceAreasSection"
import EmergencyEquipmentSection from "@/components/sections/EmergencyEquipmentSection"
import EmergencyGuaranteeSection from "@/components/sections/EmergencyGuaranteeSection"
import EmergencyFAQSection from "@/components/sections/EmergencyFAQSection"
import EmergencyContactSection from "@/components/sections/EmergencyContactSection"
import ServiceTestimonialsSection from "@/components/sections/ServiceTestimonialsSection"
import EmergencyIncidentTypesSection from "../../components/sections/EmergencyIncidentTypesSection"
import EmergencyChecklistSection from "../../components/sections/EmergencyChecklistSection"
import EmergencyAvailabilityBanner from "../../components/sections/EmergencyAvailabilityBanner"
import EmergencyPaymentMethodsSection from "../../components/sections/EmergencyPaymentMethodsSection"

export const metadata: Metadata = {
  title: "Emergency Car Locksmith Sydney | 24/7 Auto Lockout Service",
  description:
    "Locked out of your car in Sydney? Our emergency locksmiths respond in 15-30 minutes. Available 24/7. No damage guarantee. Call now!",
  keywords: "emergency car locksmith sydney, car lockout service, 24/7 locksmith, auto lockout, emergency locksmith",
}

export default function EmergencyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 overflow-hidden min-h-[70vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-800/30 to-yellow-800/30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-20 animate-pulse delay-3000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg animate-bounce">
                <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
                24/7 Emergency Car Locksmith
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Locked Out?
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                  We’re On The Way!
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-yellow-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fast, damage-free car lockout service anywhere in Sydney. Our expert locksmiths arrive in 15-30 minutes, day or night.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center p-4 bg-white/10 rounded-xl shadow-md border border-white/20">
                  <Clock className="h-6 w-6 mr-3 text-yellow-400" />
                  <div>
                    <div className="font-semibold text-white">15-30 Min Response</div>
                    <div className="text-sm text-yellow-100">Sydney-wide</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/10 rounded-xl shadow-md border border-white/20">
                  <Shield className="h-6 w-6 mr-3 text-green-400" />
                  <div>
                    <div className="font-semibold text-white">No Damage Guarantee</div>
                    <div className="text-sm text-yellow-100">100% safe unlocking</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+61280000000"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 inline-flex items-center transform hover:scale-105 animate-pulse"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  Emergency Call: (02) 8000 0000
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-xl border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center transform hover:scale-105"
                >
                  Get Free Quote
                </a>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 text-yellow-200 text-sm mt-8">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  24/7 Emergency Service
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  All Makes & Models
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  No Damage Guarantee
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <img
                  src="/EmergencyCarLockoutService.jpg"
                  alt="Emergency Car Lockout Service"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <EmergencyAvailabilityBanner />
      <EmergencyIncidentTypesSection />
      <EmergencyProcessSection />
      <EmergencyEquipmentSection />
      <EmergencyPricingSection />
      <EmergencyChecklistSection />
      <EmergencyPaymentMethodsSection />
      <EmergencyGuaranteeSection />
      <EmergencyServiceAreasSection />
      <ServiceTestimonialsSection />
      <EmergencyFAQSection />
      <EmergencyContactSection />
    </>
  )
}
