"use client"
import { Star, Quote, User, MapPin, Clock, Shield, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation({ threshold: 0.3 })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.4 })

  const handleWhatsAppClick = () => {
    const phoneNumber = "61414713777"
    const message = "Hi, I need car locksmith services. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "North Sydney",
      rating: 5,
      text: "Amazing service! Locked out of my car at 2 AM and they were here in 20 minutes. Professional, quick, and reasonably priced. Highly recommend!",
      service: "Emergency Lockout",
      time: "2 hours ago",
      avatar: "/sarah.png"
    },
    {
      name: "Michael Chen",
      location: "Eastern Suburbs",
      rating: 5,
      text: "Lost my car keys and needed a replacement. The locksmith was knowledgeable about my specific vehicle and had the new key programmed perfectly. Great work!",
      service: "Key Replacement",
      time: "1 day ago",
      avatar: "/michel.avif"
    },
    {
      name: "Emma Wilson",
      location: "Western Sydney",
      rating: 5,
      text: "Professional service from start to finish. They explained everything clearly and the ignition repair was done quickly. Very satisfied with the work.",
      service: "Ignition Repair",
      time: "3 days ago",
      avatar: "/emma.png"
    },
    {
      name: "David Mitchell",
      location: "CBD",
      rating: 5,
      text: "Fast response time and excellent service. They helped me when I was stranded in the city. Very reliable and trustworthy locksmith service.",
      service: "Emergency Service",
      time: "1 week ago",
      avatar: "/David_mitchell.jpg"
    }
  ]

  const stats = [
    { number: "5000+", label: "Happy Customers", icon: User },
    { number: "15-30", label: "Min Response Time", icon: Clock },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "100%", label: "Satisfaction Rate", icon: Shield }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`inline-flex items-center bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-medium text-yellow-300 mb-6 transition-all duration-700 delay-200 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <Star className="h-4 w-4 fill-current mr-2" />
            Customer Reviews
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-300 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            What Our
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Customers</span>
            <br />Say
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            Don't just take our word for it. Here's what our satisfied customers across Sydney have to say about our professional locksmith services.
          </p>

          {/* Contact Info */}
          <div className={`flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-300 transition-all duration-700 delay-700 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center">
              <span className="mr-2">Email:</span>
              <a href="mailto:goldenmotors128@gmail.com" className="text-yellow-400 hover:text-yellow-300">
                goldenmotors128@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">ABN:</span>
              <span>31317969962</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className={`text-center group transition-all duration-700 delay-${index * 200} ${
              statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="bg-yellow-500 p-3 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-slate-900" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={testimonialsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            testimonialsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 transition-all duration-700 delay-${index * 200} ${
                testimonialsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-yellow-400 opacity-50" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-gray-200 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="text-right">
                  <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-400/30 rounded-full px-3 py-1 text-xs font-medium text-yellow-300">
                    {testimonial.service}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{testimonial.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className={`bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-8 backdrop-blur-sm transition-all duration-700 delay-200 ${
            ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 transition-all duration-700 delay-400 ${
              ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Ready to Experience Our Service?
            </h3>
            <p className={`text-gray-300 mb-6 max-w-2xl mx-auto transition-all duration-700 delay-600 ${
              ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}>
              Join thousands of satisfied customers who trust us with their automotive locksmith needs.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-800 ${
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
              <a
                href="#contact"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center transform hover:scale-105"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
