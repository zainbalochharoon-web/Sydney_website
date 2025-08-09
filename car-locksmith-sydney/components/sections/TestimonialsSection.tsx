import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "North Sydney",
      rating: 5,
      text: "Amazing service! They arrived within 20 minutes when I was locked out of my car at 2 AM. Professional, quick, and reasonably priced.",
      service: "Emergency Lockout",
    },
    {
      name: "Michael Chen",
      location: "Bondi",
      rating: 5,
      text: "Lost my car keys and needed a replacement urgently. They programmed a new transponder key on the spot. Highly recommend!",
      service: "Key Replacement",
    },
    {
      name: "Emma Wilson",
      location: "Parramatta",
      rating: 5,
      text: "My ignition was stuck and wouldn't turn. The locksmith diagnosed and fixed the issue quickly. Great workmanship and fair pricing.",
      service: "Ignition Repair",
    },
    {
      name: "David Thompson",
      location: "Manly",
      rating: 5,
      text: "Broken key extraction service was excellent. They removed the broken piece without any damage to my lock. Very skilled technicians.",
      service: "Broken Key Extraction",
    },
    {
      name: "Lisa Rodriguez",
      location: "Chatswood",
      rating: 5,
      text: "24/7 service is a lifesaver! Called them at midnight and they were here in 15 minutes. Professional and courteous service.",
      service: "Emergency Service",
    },
    {
      name: "James Brown",
      location: "Hurstville",
      rating: 5,
      text: "Mobile service is fantastic. They came to my office parking lot and fixed my car key issue without me having to leave work.",
      service: "Mobile Service",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2 fill-current" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what Sydney residents say about our car locksmith services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-yellow-400 opacity-20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Service Badge */}
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.service}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-center text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">4.9/5 Average Rating</h3>
            <p className="text-gray-600 mb-6">Based on 500+ verified customer reviews</p>
            <a
              href="tel:+61280000000"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Join Our Happy Customers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
