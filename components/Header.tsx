"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Shield, Star, MapPin, Clock } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10
      setIsScrolled(scrolled)

      const doc = document.documentElement
      const totalScrollable = doc.scrollHeight - window.innerHeight
      const progress = totalScrollable > 0 ? (window.scrollY / totalScrollable) * 100 : 0
      setScrollProgress(Math.min(progress, 100))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Emergency", href: "/emergency-car-locksmith" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = "61280000000" // Remove the + and 0
    const message = "Hi, I need car locksmith services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50'
          : 'bg-white/80 backdrop-blur-lg shadow-lg'
      }`}
      style={{ WebkitBackdropFilter: 'blur(20px)' }}
    >
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300"
           style={{ width: `${scrollProgress}%` }}>
      </div>

      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Enhanced Logo & Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Shield className="h-8 w-8 text-slate-900 relative z-10" />
          </div>
          <div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-yellow-500 transition-colors duration-300">
              Car Locksmith
            </span>
            <div className="flex items-center text-xs text-yellow-500 font-semibold">
              <Star className="h-3 w-3 fill-current mr-1" />
              4.9/5
              <span className="ml-1 text-gray-500">•</span>
              <span className="ml-1 text-green-600">24/7</span>
            </div>
            <div className="text-xs text-gray-500">ABN: 31317969962</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 hover:text-black transition-all duration-300 px-4 py-2 rounded-lg relative group"
            >
              {item.name}
              {/* Black underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
          
          {/* Call Button */}
          <button
            onClick={handleWhatsAppClick}
            className="ml-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            WhatsApp Now
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative">
            {isMenuOpen ? (
              <X className="h-7 w-7 text-slate-900 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="h-7 w-7 text-slate-900 transition-transform duration-300" />
            )}
          </div>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-2xl border-b border-x border-gray-200 animate-fadeInDown overflow-hidden">
            <div className="flex flex-col py-6 px-6 space-y-1">
              {/* Mobile Header Info */}
              <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">Emergency Service</span>
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    Available 24/7
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Response time: 15-30 minutes
                </div>
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-4 px-4 text-slate-700 font-semibold rounded-xl hover:bg-gray-100 hover:text-black transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <div className="w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              
              {/* Mobile Call Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-4 rounded-xl font-bold shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center gap-3 justify-center transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp: (02) 8000 0000
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </button>
                
                {/* Service Areas */}
                <div className="mt-4 flex items-center text-sm text-gray-600 justify-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Serving all of Sydney</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
