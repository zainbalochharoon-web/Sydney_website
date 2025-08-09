import { Star, Quote, User, MapPin } from "lucide-react"

export default function ServiceTestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Bondi Beach",
      rating: 5,
      service: "Emergency Lockout",
      text: "Amazing service! I was locked out of my car at 2 AM and they arrived within 20 minutes. Professional, friendly, and got me back in my car without any damage. Highly recommend!",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Michael Chen",
      location: "Parramatta",
      rating: 5,
      service: "Key Replacement",
      text: "Lost my car keys and needed a replacement urgently. They came to my office, cut and programmed a new key on the spot. Fast, reliable, and affordable. Great service!",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Emma Wilson",
      location: "Manly",
      rating: 5,
      service: "Ignition Repair",
      text: "My ignition was stuck and wouldn't turn. They diagnosed the problem quickly and fixed it same day. Very knowledgeable and honest about pricing. Will definitely use again.",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "David Thompson",
      location: "Chatswood",
      rating: 5,
      service: "Transponder Programming",
      text: "Excellent work on programming my new transponder key. They had all the right equipment and knew exactly what they were doing. Professional service from start to finish.",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Lisa Rodriguez",
      location: "Surry Hills",
      rating: 5,
      service: "Broken Key Extraction",
      text: "My key broke off in the ignition. They extracted it safely and cut me a new key immediately. No damage to my car and very reasonable pricing. Highly professional!",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "James Anderson",
      location: "North Sydney",
      rating: 5,
      service: "Remote Programming",
      text: "Had issues with my remote key fob. They reprogrammed it perfectly and even tested it to make sure it worked. Great attention to detail and customer service.",
      avatar: "/placeholder-user.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Star className="h-5 w-5 mr-2" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Customers
            <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our car locksmith services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-yellow-400" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Service Badge */}
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.service}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">4.9/5 Average Rating</h3>
            <p className="text-gray-600 mb-4">Based on 500+ verified customer reviews</p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                5000+ Happy Customers
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                All Sydney Areas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
