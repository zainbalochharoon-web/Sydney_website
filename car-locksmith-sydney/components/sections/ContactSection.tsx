import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["0414 713 777", "24/7 Emergency Service"],
      color: "from-green-500 to-emerald-500",
      link: "tel:+61414713777"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["goldenmotors128@gmail.com", "We'll respond within 2 hours"],
      color: "from-blue-500 to-indigo-500",
      link: "mailto:goldenmotors128@gmail.com"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: ["All Sydney Suburbs", "No extra travel charges"],
      color: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Emergency Service", "7 days a week"],
      color: "from-yellow-500 to-orange-500",
      link: "#"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Contact
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Need immediate assistance? Call us 24/7 for emergency car locksmith services across Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${info.color} text-white w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency CTA */}
            <div className="mt-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Emergency Service</h4>
              <p className="text-red-100 mb-6">
                Locked out? Lost keys? Need immediate assistance? Call us now for 24/7 emergency car locksmith services.
              </p>
              <a
                href="tel:+61414713777"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0414 713 777
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="(02) 8000 0000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                  <option>Select a service</option>
                  <option>Emergency Lockout</option>
                  <option>Key Replacement</option>
                  <option>Ignition Repair</option>
                  <option>Transponder Programming</option>
                  <option>Broken Key Extraction</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your car locksmith needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
