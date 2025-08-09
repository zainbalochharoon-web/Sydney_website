import { Car, Key, Wrench, Smartphone, AlertTriangle, MapPin, ArrowRight, Shield, Phone } from "lucide-react"
import Link from "next/link"

export default function ServicesOverview() {
  const services = [
    {
      icon: AlertTriangle,
      title: "Emergency Lockout",
      description: "Locked out of your car? We'll get you back in quickly and safely without damage.",
      link: "/emergency-car-locksmith",
      price: "From $89",
      features: ["15-30 min response", "No damage guarantee", "24/7 service"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Key,
      title: "Key Replacement",
      description: "Lost or broken car keys? We cut and program new keys for all vehicle makes.",
      link: "/car-key-replacement",
      price: "From $149",
      features: ["All vehicle types", "Transponder keys", "Remote programming"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Wrench,
      title: "Ignition Repair",
      description: "Ignition won't turn? We repair and replace faulty ignition systems.",
      link: "/ignition-repair",
      price: "From $199",
      features: ["Diagnostic included", "Warranty provided", "Mobile service"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Transponder Programming",
      description: "Program new transponder keys and remote controls for modern vehicles.",
      link: "/transponder-programming",
      price: "From $179",
      features: ["Latest equipment", "All brands", "Same day service"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Car,
      title: "Broken Key Extraction",
      description: "Key broken in lock? We safely extract broken keys without damage.",
      link: "/broken-key-extraction",
      price: "From $99",
      features: ["Specialized tools", "No damage", "Quick service"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to you anywhere in Sydney - home, office, or roadside.",
      link: "/mobile-locksmith",
      price: "No extra charge",
      features: ["Citywide coverage", "Flexible hours", "Professional van"],
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Car Locksmith</span>
            <br />Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency lockouts to key programming, we provide complete automotive locksmith solutions across Sydney with 
            <span className="font-semibold text-slate-900"> fast response times</span> and 
            <span className="font-semibold text-slate-900"> competitive pricing</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative bg-white rounded-2xl p-8">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${service.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  <Link
                    href={service.link}
                    className="group/btn bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need Emergency Service?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is available 24/7 for emergency car locksmith services across Sydney.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+61280000000"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (02) 8000 0000
                </a>
                <Link
                  href="/services"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
