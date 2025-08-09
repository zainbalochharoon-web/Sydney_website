import { Shield, Clock, MapPin, Star, Award, Users } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "We're available round the clock for emergency lockouts and urgent car key issues.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed locksmiths with comprehensive insurance for your peace of mind.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to you anywhere in Sydney - no need to tow your vehicle to us.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently rated 4.9/5 stars by our satisfied customers across Sydney.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Over a decade of experience in automotive locksmith services.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "5000+ Happy Customers",
      description: "Trusted by thousands of Sydney residents and businesses.",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Our Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another locksmith service. We're your trusted partner for all automotive security needs in Sydney.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8"
            >
              <div className={`bg-gradient-to-r ${reason.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15min</div>
              <div className="text-gray-300">Average Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
