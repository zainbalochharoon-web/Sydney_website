"use client"
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contactInfoRef, isVisible: contactInfoVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.3 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.4 })

  const handleWhatsAppClick = () => {
    const phoneNumber = "61414713777"
    const message = "Hi, I need car locksmith services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["0414 713 777", "24/7 Emergency Service"],
      color: "from-green-500 to-emerald-500",
      link: "#",
      action: handleWhatsAppClick // Added action for WhatsApp
    },
    {
      icon: Mail,
      title: "Email",
      details: ["goldenmotors128@gmail.com", "We'll respond within 2 hours"],
      color: "from-blue-500 to-indigo-500",
      link: "mailto:goldenmotors128@gmail.com",
      action: null
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Sydney Metropolitan Area", "Mobile service available"],
      color: "from-purple-500 to-pink-500",
      link: "#",
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Emergency Service", "15-30 min response time"],
      color: "from-yellow-500 to-orange-500",
      link: "#",
      action: null
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
        {/* Enhanced Header */}
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
            <MessageCircle className="h-5 w-5 mr-2" />
            Get In Touch
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold text-slate-900 mb-6 transition-all duration-700 delay-300 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            Contact
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Us Today</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            Need emergency locksmith services? We're here to help 24/7. Contact us for fast, reliable assistance across Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div 
            ref={contactInfoRef}
            className={`space-y-8 transition-all duration-1000 ${
              contactInfoVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
              contactInfoVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    contactInfoVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className={`bg-gradient-to-r ${info.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                  {info.action ? (
                    <button
                      onClick={info.action}
                      className="text-blue-600 hover:text-blue-800 font-medium mt-2 transition-colors"
                    >
                      Click to WhatsApp →
                    </button>
                  ) : (
                    <a
                      href={info.link}
                      className="text-blue-600 hover:text-blue-800 font-medium mt-2 transition-colors inline-block"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Emergency CTA */}
            <div className={`bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden ${
              contactInfoVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '1000ms' }}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 mr-3 animate-pulse" />
                  <h3 className="text-2xl font-bold">Emergency Service</h3>
                </div>
                <p className="text-lg mb-6">
                  Locked out of your car? Need immediate assistance? Our emergency team is available 24/7.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Call Now
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div 
            ref={formRef}
            className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-1000 ${
              formVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className={`text-3xl font-bold text-slate-900 mb-8 ${
              formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '200ms' }}>
              Send Us a Message
            </h3>
            <form className={`space-y-6 ${
              formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`} 
            style={{ animationDelay: '400ms' }}
            action="/api/contact" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" placeholder="0414 713 777" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" aria-label="Service needed">
                  <option value="">Select a service</option>
                  <option value="emergency-lockout">Emergency Lockout</option>
                  <option value="key-replacement">Key Replacement</option>
                  <option value="ignition-repair">Ignition Repair</option>
                  <option value="transponder-programming">Transponder Programming</option>
                  <option value="broken-key-extraction">Broken Key Extraction</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Suburb</label>
                <input type="text" name="suburb" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" placeholder="e.g., Parramatta" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300" placeholder="Tell us about your car locksmith needs..."></textarea>
              </div>
              
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <input id="privacy" name="privacy" type="checkbox" className="mt-1" required />
                <label htmlFor="privacy">
                  I agree to the processing of my information in line with the Privacy Policy.
                </label>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Send Message
              </button>
            </form>

            {/* Business Info Card */}
            <div className={`mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-gray-200 ${
              formVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '600ms' }}>
              <h4 className="font-bold text-slate-900 mb-3">Business Information</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">ABN:</span>
                  <span>31317969962</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Email:</span>
                  <span>goldenmotors128@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white relative overflow-hidden ${
            ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '200ms' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className={`text-3xl font-bold mb-4 ${
                ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '400ms' }}>
                Ready to Get Started?
              </h3>
              <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${
                ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '600ms' }}>
                Contact us today for professional car locksmith services. We're here to help 24/7.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center ${
                ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '800ms' }}>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp: 0414 713 777
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
                </button>
                <a
                  href="#services"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center transform hover:scale-105"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
