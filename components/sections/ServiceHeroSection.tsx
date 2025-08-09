import { Shield, Clock, MapPin, Star, Phone, ArrowRight, CheckCircle } from "lucide-react"

export default function ServiceHeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-indigo-800/20"></div>
      
      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-40 right-20 w-32 h-32 border border-white/10 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-white/10 rounded-full animate-pulse delay-1500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-bounce">
            <Shield className="h-5 w-5 mr-2" />
            Professional Car Locksmith Services
            <Star className="h-4 w-4 ml-2" />
          </div>
          
          {/* Enhanced Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Sydney's Premier
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Car Locksmith Services
            </span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Emergency lockouts, key replacement, ignition repair, and more. 
            <span className="text-yellow-300 font-semibold"> 24/7 mobile service</span> across all Sydney suburbs.
            <br />
            <span className="text-lg text-blue-200">Licensed, insured, and trusted by 5000+ customers</span>
          </p>
          
          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Clock className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">15-30 Min Response</h3>
              <p className="text-blue-100 text-sm">Fast emergency response time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <MapPin className="h-10 w-10 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">All Sydney Areas</h3>
              <p className="text-blue-100 text-sm">Citywide mobile coverage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Star className="h-10 w-10 text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">4.9/5 Rating</h3>
              <p className="text-blue-100 text-sm">Trusted by 5000+ customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Shield className="h-10 w-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-blue-100 text-sm">Professional & reliable service</p>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="tel:+61280000000" 
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-10 py-5 rounded-xl font-bold text-xl shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 inline-flex items-center transform hover:scale-105 animate-pulse"
            >
              <Phone className="h-6 w-6 mr-3" />
              Emergency Call: (02) 8000 0000
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-xl border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              No Damage Guarantee
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Same Day Service
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Competitive Pricing
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              ️All Makes & Models
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
