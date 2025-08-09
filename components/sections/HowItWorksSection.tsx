import { Phone, Clock, Wrench, CheckCircle } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Contact us 24/7 for emergency assistance or to schedule a service. We'll get your details and location.",
      color: "from-blue-500 to-indigo-500",
      number: "01"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "We'll arrive at your location within 15-30 minutes. Our mobile service comes to you anywhere in Sydney.",
      color: "from-yellow-500 to-orange-500",
      number: "02"
    },
    {
      icon: Wrench,
      title: "Professional Service",
      description: "Our licensed technicians will diagnose and fix your issue using the latest equipment and techniques.",
      color: "from-green-500 to-emerald-500",
      number: "03"
    },
    {
      icon: CheckCircle,
      title: "Job Complete",
      description: "We'll test everything to ensure it's working perfectly and provide you with a warranty on our work.",
      color: "from-purple-500 to-pink-500",
      number: "04"
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            How It
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting professional car locksmith service is simple and straightforward. Here's our 4-step process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-900 to-slate-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.number}
              </div>

              {/* Step Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8 pt-12">
                <div className={`bg-gradient-to-r ${step.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Response</h3>
            <p className="text-gray-600">
              15-30 minute average response time across Sydney
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">No Damage Guarantee</h3>
            <p className="text-gray-600">
              We guarantee no damage to your vehicle during service
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">12-Month Warranty</h3>
            <p className="text-gray-600">
              All our work comes with a comprehensive warranty
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait until you're locked out. Call us now for immediate assistance or to schedule a service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61414713777"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0414 713 777
              </a>
              <a
                href="/services"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
