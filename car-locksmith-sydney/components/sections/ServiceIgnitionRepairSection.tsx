import { Wrench, Shield, CheckCircle, Car } from "lucide-react"

export default function ServiceIgnitionRepairSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Wrench className="h-5 w-5 mr-2" />
              Ignition Repair Service
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ignition Problems
              <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Fixed Fast
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Is your ignition stuck, not turning, or broken? Our expert locksmiths diagnose and repair ignition issues for all vehicles, often on the spot with a 12-month warranty.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Shield className="h-6 w-6 mr-3 text-blue-500" />
                <div>
                  <div className="font-semibold text-slate-900">No Start, Stuck, or Jammed</div>
                  <div className="text-sm text-gray-600">All ignition problems</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
                <div>
                  <div className="font-semibold text-slate-900">12-Month Warranty</div>
                  <div className="text-sm text-gray-600">On all repairs</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
              >
                <Car className="h-5 w-5 mr-2" />
                Get Ignition Repair Quote
              </a>
              <a 
                href="tel:+61280000000" 
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 inline-flex items-center justify-center"
              >
                Call Now
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src="/ignition-coil.jpg" 
                alt="Ignition Repair Service" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
