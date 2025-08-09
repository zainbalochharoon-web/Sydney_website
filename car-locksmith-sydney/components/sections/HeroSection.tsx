import { Phone, Clock, Shield, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 from 127+ reviews</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Sydney's #1
                </span>
                <br />
                <span className="text-white">Car Locksmith</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Professional 24/7 emergency car locksmith services. Fast response, guaranteed work, competitive pricing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+61414713777"
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0414 713 777
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quote"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center backdrop-blur-sm hover:shadow-lg"
              >
                Get Free Quote
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3">
                  <Clock className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold">15-30 Min</div>
                  <div className="text-sm text-gray-300">Response Time</div>
                </div>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold">Licensed</div>
                  <div className="text-sm text-gray-300">& Insured</div>
                </div>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="bg-yellow-500 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold">100%</div>
                  <div className="text-sm text-gray-300">Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
                <div className="bg-slate-900 rounded-2xl p-8">
                  <img
                    src="/heroImg.jpg"
                    alt="Professional Car Locksmith in Sydney"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 p-6 rounded-xl shadow-2xl">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm font-medium">Emergency Service</div>
                <div className="text-xs text-slate-700 mt-1">Available Now</div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">5000+</div>
                  <div className="text-xs text-gray-300">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
