import { Phone, Mail, MapPin, Clock, AlertTriangle, MessageSquare } from "lucide-react"

export default function EmergencyContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/30 to-yellow-800/30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border border-white/20">
              <AlertTriangle className="h-5 w-5 mr-2 text-yellow-400" />
              24/7 Emergency Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Locked Out?
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                We're One Call Away
              </span>
            </h2>
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              Our emergency response team is available 24/7 to help you with any car lockout situation. Don't panic - help is just a phone call away.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <Phone className="h-6 w-6 mr-4 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Emergency Hotline</h3>
                  <p className="text-yellow-100 mb-2">Available 24/7 for immediate assistance</p>
                  <a href="tel:+61280000000" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                    (02) 8000 0000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <MessageSquare className="h-6 w-6 mr-4 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">SMS Emergency Service</h3>
                  <p className="text-yellow-100 mb-2">Text your location for callback</p>
                  <a href="sms:+61480000000" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                    0480 000 000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <Mail className="h-6 w-6 mr-4 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Email Support</h3>
                  <p className="text-yellow-100 mb-2">For non-urgent inquiries</p>
                  <a href="mailto:emergency@carlocksmithsydney.com" className="text-lg font-bold text-yellow-400 hover:text-yellow-300 transition-colors break-all">
                    emergency@carlocksmithsydney.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center bg-red-500/30 rounded-xl p-4 border border-red-400/30">
              <Clock className="h-6 w-6 mr-3 text-red-300" />
              <p className="text-red-200 font-medium">
                Average response time: <span className="font-bold">15-30 minutes</span> across Sydney metropolitan area
              </p>
            </div>
          </div>
          
          {/* Right: Emergency Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Request Emergency Assistance</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-yellow-100 mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-yellow-100 mb-2 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="0400 000 000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-yellow-100 mb-2 font-medium">Your Location</label>
                <div className="flex">
                  <div className="bg-white/20 flex items-center justify-center px-4 rounded-l-lg border-y border-l border-white/20">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/20 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                    placeholder="Street address, suburb"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-yellow-100 mb-2 font-medium">Vehicle Details</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                  placeholder="Make, model, year"
                />
              </div>
              
              <div>
                <label className="block text-yellow-100 mb-2 font-medium">Emergency Details</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 h-24"
                  placeholder="Describe your emergency situation"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Send Emergency Request
              </button>
              
              <p className="text-yellow-200 text-sm text-center">
                For immediate assistance, please call our emergency hotline directly
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}