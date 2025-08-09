"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Shield, Star } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Emergency", href: "/emergency-car-locksmith" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200'
          : 'bg-white/40 backdrop-blur-md shadow-md'
      }`}
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Shield className="h-8 w-8 text-slate-900" />
          </div>
          <div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-yellow-500 transition-colors duration-300">
              Car Locksmith
            </span>
            <div className="flex items-center text-xs text-yellow-500 font-semibold">
              <Star className="h-3 w-3 fill-current mr-1" />
              4.9/5
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 hover:text-yellow-500 transition-colors duration-200 px-2 py-1 rounded-lg relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="tel:+61414713777"
            className="ml-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-2 rounded-xl font-bold shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Call Now: 0414 713 777
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-7 w-7 text-slate-900" />
          ) : (
            <Menu className="h-7 w-7 text-slate-900" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-2xl rounded-b-2xl border-b border-x border-gray-200 animate-fadeInDown">
            <div className="flex flex-col py-4 px-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-3 px-2 text-slate-700 font-semibold rounded-lg hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+61414713777"
                className="mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Phone className="h-5 w-5" />
                Call Now: 0414 713 777
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
