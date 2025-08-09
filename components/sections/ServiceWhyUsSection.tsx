import { Star, Shield, Clock, Users } from "lucide-react"

export default function ServiceWhyUsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
          <Star className="h-5 w-5 mr-2" />
          Why Choose Us
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Car Locksmith Services?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We are Sydney’s trusted car locksmiths, known for our fast response, professional service, and customer satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <Shield className="h-10 w-10 text-blue-600 mb-4" />
            <div className="font-bold text-xl text-slate-900 mb-2">Licensed & Insured</div>
            <div className="text-gray-600">Fully licensed, insured, and police-checked technicians</div>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-10 w-10 text-yellow-500 mb-4" />
            <div className="font-bold text-xl text-slate-900 mb-2">24/7 Fast Response</div>
            <div className="text-gray-600">15-30 min average response time, day or night</div>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-10 w-10 text-orange-500 mb-4" />
            <div className="font-bold text-xl text-slate-900 mb-2">4.9/5 Customer Rating</div>
            <div className="text-gray-600">Hundreds of 5-star reviews from happy customers</div>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-10 w-10 text-green-500 mb-4" />
            <div className="font-bold text-xl text-slate-900 mb-2">5000+ Customers</div>
            <div className="text-gray-600">Trusted by thousands of Sydney residents and businesses</div>
          </div>
        </div>
      </div>
    </section>
  )
}
