import { Shield, Clock, CheckCircle, Award, ThumbsUp, AlertTriangle } from "lucide-react"

export default function EmergencyGuaranteeSection() {
  const guarantees = [
    {
      icon: Clock,
      title: "15-30 Minute Response",
      description: "We guarantee to arrive at your location within 15-30 minutes of your emergency call, anywhere in Sydney.",
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "No Damage Guarantee",
      description: "Our technicians use non-destructive entry methods that guarantee no damage to your vehicle during the unlocking process.",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "90-Day Warranty",
      description: "All our emergency services come with a 90-day warranty. If any issues arise, we'll fix them at no additional cost.",
      color: "bg-purple-500"
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guarantee",
      description: "If you're not completely satisfied with our service, we'll make it right or refund your money. Your satisfaction is our priority.",
      color: "bg-yellow-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Shield className="h-5 w-5 mr-2" />
            Our Promise To You
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Emergency Service
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              With Ironclad Guarantees
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When you're in an emergency, you need service you can trust. Our guarantees ensure you'll receive fast, reliable, and professional assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guarantees.map((guarantee, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 flex">
              <div className={`${guarantee.color} w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0`}>
                <guarantee.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{guarantee.title}</h3>
                <p className="text-gray-300">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-red-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Emergency Guarantee Activation</h3>
              <p className="text-gray-300">If our technician doesn't arrive within the promised timeframe, you'll receive a 20% discount on our service. That's how confident we are in our response times.</p>
            </div>
            <div className="flex-shrink-0">
              <a href="tel:+61280000000" className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                Emergency Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}