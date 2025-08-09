import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ServiceContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-indigo-800/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <MessageCircle className="h-5 w-5 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Professional Help?
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Contact us today for fast, reliable car locksmith services across Sydney. We're here to help 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Emergency Hotline</div>
                    <div className="text-blue-200">(02) 8000 0000</div>
                    <div className="text-blue-300 text-sm">24/7 Available</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Email Us</div>
                    <div className="text-blue-200">info@carlocksmithsydney.com.au</div>
                    <div className="text-blue-300 text-sm">Quick Response</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Service Areas</div>
                    <div className="text-blue-200">All Sydney Suburbs</div>
                    <div className="text-blue-300 text-sm">CBD, Eastern, Northern, Western</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Response Time</div>
                    <div className="text-blue-200">15-30 Minutes</div>
                    <div className="text-blue-300 text-sm">Average Emergency Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get Immediate Help</h3>
            <p className="text-blue-100 mb-8">
              Don't wait when you're locked out or need car key services. Our expert locksmiths are ready to help you right now.
            </p>
            
            <div className="space-y-4">
              <a 
                href="tel:+61280000000" 
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
              >
                <Phone className="h-6 w-6 mr-3" />
                Emergency Call Now
              </a>
              
              <a 
                href="/contact" 
                className="w-full bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Send Message
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-400/20 rounded-xl border border-yellow-400/30">
              <div className="flex items-center text-yellow-300">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-semibold">24/7 Emergency Service Available</span>
              </div>
              <p className="text-blue-200 text-sm mt-2">
                No matter what time of day or night, we're here to help with your car lockout or key issues.
              </p>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15-30</div>
              <div className="text-blue-200">Min Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4.9/5</div>
              <div className="text-blue-200">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-blue-200">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
