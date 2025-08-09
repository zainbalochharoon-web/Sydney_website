import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import ServiceProcessSection from "@/components/sections/ServiceProcessSection";
import ServiceEmergencySection from "@/components/sections/ServiceEmergencySection";
import ServicePricingSection from "@/components/sections/ServicePricingSection";
import ServiceTestimonialsSection from "@/components/sections/ServiceTestimonialsSection";
import ServiceWhyUsSection from "@/components/sections/ServiceWhyUsSection";
import ServiceFAQSection from "@/components/sections/ServiceFAQSection";
import ServiceContactSection from "@/components/sections/ServiceContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHeroSection />
      <ServiceProcessSection />
      <ServiceEmergencySection />
      <ServicePricingSection />
      <ServiceTestimonialsSection />
      <ServiceWhyUsSection />
      <ServiceFAQSection />
      <ServiceContactSection />
    </>
  );
}
