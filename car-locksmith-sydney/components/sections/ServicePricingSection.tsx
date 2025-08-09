import { DollarSign, CheckCircle, Star, Shield } from "lucide-react"

export default function ServicePricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <DollarSign className="h-5 w-5 mr-2" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Fair & Transparent
            <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Get upfront pricing for all our car locksmith services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Emergency Service */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Emergency Lockout</h3>
              <div className="text-3xl font-bold text-red-500 mb-2">From $89</div>
              <p className="text-gray-600">15-30 min response time</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                No damage guarantee
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                All car makes & models
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                24/7 availability
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                Mobile service
              </li>
            </ul>
            <a href="tel:+61280000000" className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold text-center block hover:bg-red-600 transition-colors duration-300">
              Call Now
            </a>
          </div>
          
          {/* Key Replacement */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Key Replacement</h3>
              <div className="text-3xl font-bold text-blue-500 mb-2">From $129</div>
              <p className="text-gray-600">Cut & program on-site</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                Transponder keys included
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                Smart key programming
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                Remote key fobs
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                12-month warranty
              </li>
            </ul>
            <a href="/contact" className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold text-center block hover:bg-blue-600 transition-colors duration-300">
              Get Quote
            </a>
          </div>
          
          {/* Ignition Repair */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ignition Repair</h3>
              <div className="text-3xl font-bold text-green-500 mb-2">From $199</div>
              <p className="text-gray-600">Diagnosis & repair</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                Free diagnosis
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                Same day service
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                Parts included
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                12-month warranty
              </li>
            </ul>
            <a href="/contact" className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-center block hover:bg-green-600 transition-colors duration-300">
              Get Quote
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All prices include GST and travel within Sydney metro area</p>
          <a href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
            View full price list
            <CheckCircle className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
