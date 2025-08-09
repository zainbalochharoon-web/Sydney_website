"use client"
import { Phone, Clock, Shield, Star, ArrowRight, CheckCircle, MapPin, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function HeroSection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 })

  

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          <div 
            ref={heroRef}
            className={`space-y-8 transition-all duration-1000 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Enhanced Trust Badge */}
            <div className={`inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6 transition-all duration-700 delay-200 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 from 127+ reviews</span>
              <div className="ml-3 px-2 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs font-medium text-green-300">
                Verified
              </div>
            </div>

            {/* Enhanced Main Heading */}
            <div className={`space-y-6 transition-all duration-700 delay-300 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-medium text-yellow-300 mb-4">
                <Zap className="h-4 w-4 mr-2" />
                24/7 Emergency Service Available
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  Sydney's #1
                </span>
                <br />
                <span className="text-white">Car Locksmith</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Professional 24/7 emergency car locksmith services. Fast response, guaranteed work, competitive pricing.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <a
                href="tel:+61414713777"
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0414 713 777
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center transform hover:scale-105"
              >
                View Services
              </a>
            </div>

            {/* Enhanced Features Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-700 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-yellow-400" />
                <span>15-30 Min Response</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>All Sydney Areas</span>
              </div>
            </div>

            {/* Service Areas */}
            <div className={`text-sm text-gray-300 transition-all duration-700 delay-900 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <span className="font-medium">Service Areas:</span> Sydney CBD, North Sydney, Eastern Suburbs, Western Sydney, Inner West, Northern Beaches, and all surrounding areas.
            </div>

            {/* Contact Info */}
            <div className={`flex flex-col sm:flex-row gap-4 text-sm text-gray-300 transition-all duration-700 delay-1000 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center">
                <span className="mr-2">Email:</span>
                <a href="mailto:goldenmotors128@gmail.com" className="text-yellow-400 hover:text-yellow-300">
                  goldenmotors128@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">ABN:</span>
                <span>31317969962</span>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              imageVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-slate-900 rounded-2xl p-8">
                    <img
                      src="/heroImg.jpg"
                      alt="Professional Car Locksmith in Sydney"
                      className="rounded-xl w-full h-auto shadow-lg"
                    />
                  </div>
                </div>
                
                {/* Enhanced Floating Stats Card */}
                <div className={`absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 transition-all duration-700 delay-500 ${
                  imageVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm font-medium">Emergency Service</div>
                  <div className="text-xs text-slate-700 mt-1">Available Now</div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                {/* Enhanced Floating Trust Badge */}
                <div className={`absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 transition-all duration-700 delay-700 ${
                  imageVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">5000+</div>
                    <div className="text-xs text-gray-300">Happy Customers</div>
                    <div className="text-xs text-green-400 mt-1">✓ Verified</div>
                  </div>
                </div>

                {/* New Floating Service Badge */}
                <div className={`absolute top-1/2 -left-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 transition-all duration-700 delay-900 ${
                  imageVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="text-center">
                    <div className="text-lg font-bold">Mobile</div>
                    <div className="text-xs">Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-500 ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 transition-all duration-700 delay-200 ${
            statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-3xl font-bold text-yellow-400 mb-2">5000+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 transition-all duration-700 delay-400 ${
            statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-3xl font-bold text-blue-400 mb-2">15-30</div>
            <div className="text-sm text-gray-300">Min Response</div>
          </div>
          <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 transition-all duration-700 delay-600 ${
            statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Emergency Service</div>
          </div>
          <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 transition-all duration-700 delay-800 ${
            statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-sm text-gray-300">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
