import { Wrench, Shield, Zap, Key, Hammer, Cpu } from "lucide-react"

export default function EmergencyEquipmentSection() {
  const equipment = [
    {
      icon: Key,
      title: "Advanced Key Decoders",
      description: "State-of-the-art key decoders that can quickly create new keys for virtually any vehicle make and model.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Hammer,
      title: "Non-Destructive Entry Tools",
      description: "Specialized tools that allow us to unlock your vehicle without causing any damage to the doors or windows.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Cpu,
      title: "Transponder Programmers",
      description: "Advanced diagnostic equipment to program and clone transponder chips and smart keys on the spot.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "ECU Diagnostic Systems",
      description: "Professional-grade diagnostic systems to interface with your vehicle's electronic control unit for key programming.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "Ignition Repair Kits",
      description: "Comprehensive ignition repair tools and parts to fix damaged ignitions without replacing the entire system.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Mobile Key Cutting Machines",
      description: "High-precision mobile key cutting machines that produce perfect duplicates of your original keys.",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-700 to-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Wrench className="h-5 w-5 mr-2" />
            Professional Equipment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cutting-Edge Technology
            <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              For Emergency Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our emergency locksmiths arrive equipped with the latest automotive locksmith technology to solve any car key or lock problem on the spot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className={`bg-gradient-to-r ${item.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-slate-700 to-slate-900 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Zap className="h-6 w-6 mr-3" />
            Emergency Assistance Available 24/7
          </a>
        </div>
      </div>
    </section>
  )
}