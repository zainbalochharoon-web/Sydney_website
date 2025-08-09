import { AlertTriangle, Clock, Shield, Phone } from "lucide-react"

export default function ServiceEmergencySection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
              Emergency Lockout Service
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              24/7 Emergency
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Car Lockout Service
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Locked out of your car? Don't panic! Our expert mobile locksmiths are available 24/7 to get you back on the road quickly and safely. We use advanced non-destructive techniques to unlock your vehicle with zero damage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Clock className="h-6 w-6 mr-3 text-yellow-500" />
                <div>
                  <div className="font-semibold text-slate-900">15-30 Min Response</div>
                  <div className="text-sm text-gray-600">Average arrival time</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Shield className="h-6 w-6 mr-3 text-green-500" />
                <div>
                  <div className="font-semibold text-slate-900">No Damage Guarantee</div>
                  <div className="text-sm text-gray-600">100% safe unlocking</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+61280000000" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Emergency Call: (02) 8000 0000
              </a>
              <a 
                href="/contact" 
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Quote
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl transform rotate-3 opacity-20"></div>
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
  )
}
