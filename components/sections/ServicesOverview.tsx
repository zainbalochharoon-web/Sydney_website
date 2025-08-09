"use client"
import { Car, Key, Wrench, Smartphone, AlertTriangle, MapPin, ArrowRight, Shield, Phone, Clock, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ServicesOverview() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 })

  const handleWhatsAppClick = () => {
    const phoneNumber = "61414713777"
    const message = "Hi, I need car locksmith services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const services = [
    {
      icon: AlertTriangle,
      title: "Emergency Lockout",
      description: "Locked out of your car? We'll get you back in quickly and safely without damage.",
      link: "/emergency-car-locksmith",
      price: "From $89",
      originalPrice: "$120",
      features: ["15-30 min response", "No damage guarantee", "24/7 service"],
      color: "from-red-500 to-orange-500",
      badge: "Most Popular",
      priority: "high"
    },
    {
      icon: Key,
      title: "Key Replacement",
      description: "Lost or broken car keys? We cut and program new keys for all vehicle makes.",
      link: "/car-key-replacement",
      price: "From $149",
      originalPrice: "$200",
      features: ["All vehicle types", "Transponder keys", "Remote programming"],
      color: "from-blue-500 to-indigo-500",
      badge: "Best Value",
      priority: "medium"
    },
    {
      icon: Wrench,
      title: "Ignition Repair",
      description: "Ignition won't turn? We repair and replace faulty ignition systems.",
      link: "/ignition-repair",
      price: "From $199",
      originalPrice: "$280",
      features: ["Diagnostic included", "Warranty provided", "Mobile service"],
      color: "from-green-500 to-emerald-500",
      badge: "Expert Service",
      priority: "medium"
    },
    {
      icon: Smartphone,
      title: "Remote Programming",
      description: "Need a new remote key? We program all types of remote keys and fobs.",
      link: "/services",
      price: "From $129",
      originalPrice: "$180",
      features: ["All remote types", "Fast programming", "Testing included"],
      color: "from-purple-500 to-pink-500",
      badge: "Quick Service",
      priority: "medium"
    },
    {
      icon: Car,
      title: "Transponder Keys",
      description: "Modern vehicle keys with chips. We cut and program transponder keys.",
      link: "/services",
      price: "From $169",
      originalPrice: "$220",
      features: ["Chip programming", "Vehicle specific", "Warranty included"],
      color: "from-yellow-500 to-orange-500",
      badge: "Advanced Tech",
      priority: "high"
    },
    {
      icon: Shield,
      title: "Broken Key Extraction",
      description: "Key broken in lock? We safely extract broken keys without damage.",
      link: "/services",
      price: "From $79",
      originalPrice: "$120",
      features: ["Safe extraction", "No damage", "Quick service"],
      color: "from-teal-500 to-cyan-500",
      badge: "Emergency",
      priority: "high"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg transition-all duration-700 delay-200 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <Shield className="h-5 w-5 mr-2" />
            Our Services
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold text-slate-900 mb-6 transition-all duration-700 delay-300 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            Professional
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Car Locksmith</span>
            <br />Services
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            From emergency lockouts to key replacement, we provide comprehensive automotive locksmith services across Sydney with rapid response times and guaranteed workmanship.
          </p>

          {/* Service Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-700 delay-700 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
              <div className="text-sm text-gray-600">Core Services</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-purple-600 mb-1">15-30</div>
              <div className="text-sm text-gray-600">Min Response</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-600 transition-all duration-700 delay-900 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center">
              <span className="mr-2">Email:</span>
              <a href="mailto:goldenmotors128@gmail.com" className="text-blue-600 hover:text-blue-700">
                goldenmotors128@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">ABN:</span>
              <span>31317969962</span>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            servicesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${
                servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {service.badge && (
                <div className={`absolute top-4 right-4 z-10 ${
                  servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                }`}
                style={{ animationDelay: `${(index * 100) + 200}ms` }}>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    service.priority === 'high' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`p-6 ${
                servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${(index * 100) + 300}ms` }}>
                <div className={`bg-gradient-to-r ${service.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className={`px-6 pb-4 ${
                servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${(index * 100) + 400}ms` }}>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className={`px-6 pb-6 ${
                servicesVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: `${(index * 100) + 500}ms` }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{service.price}</div>
                    {service.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{service.originalPrice}</div>
                    )}
                  </div>
                  <Link
                    href={service.link}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white relative overflow-hidden transition-all duration-700 delay-200 ${
            ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="relative z-10">
              {/* Emergency Badge */}
              <div className={`inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg transition-all duration-700 delay-400 ${
                ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}>
                <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
                Emergency Service Available 24/7
              </div>
              
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-600 ${
                ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}>
                Need Emergency Service?
              </h3>
              <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-800 ${
                ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}>
                Our team is available 24/7 for emergency car locksmith services across Sydney.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-1000 ${
                ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp: 0414 713 777
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
                </button>
                <Link
                  href="/services"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center transform hover:scale-105"
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
