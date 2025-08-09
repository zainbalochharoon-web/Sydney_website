"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Shield, Star, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Footer() {
  const { ref: companyRef, isVisible: companyVisible } = useScrollAnimation()
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: areasRef, isVisible: areasVisible } = useScrollAnimation({ threshold: 0.3 })
  const { ref: businessRef, isVisible: businessVisible } = useScrollAnimation({ threshold: 0.4 })
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollAnimation({ threshold: 0.5 })

  const handleWhatsAppClick = () => {
    const phoneNumber = "61280000000" // Remove the + and 0
    const message = "Hi, I need car locksmith services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const services = [
    "Emergency Car Locksmith",
    "Car Key Replacement",
    "Ignition Repair",
    "Transponder Programming",
    "Broken Key Extraction",
    "Remote Key Services",
  ]

  const areas = ["Sydney CBD", "North Sydney", "Eastern Suburbs", "Western Sydney", "Inner West", "Northern Beaches"]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Enhanced Company Info */}
          <div 
            ref={companyRef}
            className={`space-y-6 transition-all duration-1000 ${
              companyVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className={`flex items-center space-x-3 transition-all duration-700 delay-200 ${
              companyVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-slate-900" />
              </div>
          <div>
                <h3 className="text-2xl font-bold text-yellow-400">Car Locksmith Sydney</h3>
                <div className="flex items-center text-xs text-yellow-500 font-semibold">
                  <Star className="h-3 w-3 fill-current mr-1" />
                  4.9/5 Rating
                </div>
                <div className="text-xs text-gray-400">ABN: 31317969962</div>
              </div>
            </div>
            
            <p className={`text-gray-300 leading-relaxed transition-all duration-700 delay-400 ${
              companyVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Professional 24/7 car locksmith services across Sydney. Fast, reliable, and licensed with guaranteed satisfaction.
            </p>
            
            <div className={`space-y-3 transition-all duration-700 delay-600 ${
              companyVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center group">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="h-4 w-4 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold">+61 2 8000 0000</div>
                  <div className="text-sm text-gray-400">24/7 Emergency</div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-xs text-yellow-400 hover:text-yellow-300 mt-1"
                  >
                    Click to WhatsApp →
                  </button>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="h-4 w-4 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold">goldenmotors128@gmail.com</div>
                  <div className="text-sm text-gray-400">Quick Response</div>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <MapPin className="h-4 w-4 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold">Sydney, NSW</div>
                  <div className="text-sm text-gray-400">Citywide Service</div>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="h-4 w-4 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Emergency Service</div>
                  <div className="text-sm text-gray-400">Always Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Services */}
          <div 
            ref={servicesRef}
            className={`transition-all duration-1000 ${
              servicesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className={`text-lg font-semibold mb-6 text-yellow-400 transition-all duration-700 delay-200 ${
              servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Our Services
            </h4>
            <ul className={`space-y-3 transition-all duration-700 delay-400 ${
              servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              {services.map((service, index) => (
                <li key={service}>
                  <Link
                    href={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Service Areas */}
          <div 
            ref={areasRef}
            className={`transition-all duration-1000 ${
              areasVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className={`text-lg font-semibold mb-6 text-yellow-400 transition-all duration-700 delay-200 ${
              areasVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Service Areas
            </h4>
            <ul className={`space-y-3 transition-all duration-700 delay-400 ${
              areasVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              {areas.map((area) => (
                <li key={area} className="text-gray-300 flex items-center group">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  {area}
                </li>
              ))}
            </ul>
            
            {/* Social Media Links */}
            <div className={`mt-8 transition-all duration-700 delay-600 ${
              areasVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <h5 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-gray-800 rounded-lg hover:bg-yellow-500 transition-all duration-300 ${social.color} transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Business Info */}
          <div 
            ref={businessRef}
            className={`transition-all duration-1000 ${
              businessVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className={`text-lg font-semibold mb-6 text-yellow-400 transition-all duration-700 delay-200 ${
              businessVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Business Information
            </h4>
            <div className={`space-y-4 transition-all duration-700 delay-400 ${
              businessVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Shield className="h-4 w-4 mr-2 text-yellow-400" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <p className="text-sm text-gray-300">Fully licensed locksmith services</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2 text-yellow-400" />
                  <span className="font-semibold">15-30 Min Response</span>
                </div>
                <p className="text-sm text-gray-300">Fast emergency response time</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  <span className="font-semibold">100% Satisfaction</span>
                </div>
                <p className="text-sm text-gray-300">Guaranteed customer satisfaction</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-sm">
                  <div className="font-semibold mb-1">ABN: 31317969962</div>
                  <div className="text-gray-400">Registered Business</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div 
          ref={newsletterRef}
          className={`border-t border-gray-700 pt-8 mb-8 transition-all duration-1000 ${
            newsletterVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`max-w-2xl mx-auto text-center transition-all duration-700 delay-200 ${
            newsletterVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <h3 className={`text-2xl font-bold mb-2 transition-all duration-700 delay-400 ${
              newsletterVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Stay Updated
            </h3>
            <p className={`text-gray-400 mb-6 transition-all duration-700 delay-600 ${
              newsletterVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Get the latest locksmith tips and emergency service updates
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto transition-all duration-700 delay-800 ${
              newsletterVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className={`border-t border-gray-700 pt-8 text-center transition-all duration-700 delay-1000 ${
          newsletterVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 Car Locksmith Sydney. All rights reserved. ABN: 31317969962</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-yellow-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
