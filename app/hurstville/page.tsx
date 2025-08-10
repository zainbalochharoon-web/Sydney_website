import type { Metadata } from "next"
import { Phone, Clock, Shield, Star, MapPin, CheckCircle, Car, Key, Wrench, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Car Locksmith Hurstville | 24/7 Emergency Auto Locksmith",
  description: "Professional car locksmith services in Hurstville. 24/7 emergency lockout, key replacement, ignition repair. Fast, reliable, licensed. Call now!",
  keywords: "car locksmith hurstville, emergency locksmith hurstville, car key replacement hurstville, ignition repair hurstville",
  openGraph: {
    title: "Car Locksmith Hurstville | 24/7 Emergency Auto Locksmith",
    description: "Professional car locksmith services in Hurstville. 24/7 emergency lockout, key replacement, ignition repair.",
    url: "https://carlocksmithsydney.com.au/hurstville",
    siteName: "Car Locksmith Sydney",
    locale: "en_AU",
    type: "website",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Car Locksmith Sydney",
  description: "Professional 24/7 car locksmith services in Hurstville. Emergency lockout, key replacement, ignition repair.",
  url: "https://carlocksmithsydney.com.au/hurstville",
  telephone: "+61414713777",
  email: "goldenmotors128@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hurstville",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "2220",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9667,
    longitude: 151.1,
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Hurstville",
  },
  sameAs: [
    "https://www.google.com/maps?cid=your-business-id",
    "https://www.facebook.com/carlocksmithsydney",
    "https://www.instagram.com/carlocksmithsydney"
  ]
}

export default function HurstvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Car Locksmith in <span className="text-yellow-400">Hurstville</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Fast, reliable, and professional car locksmith services in Hurstville. 
              Available 24/7 for all your automotive security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61414713777"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-6 w-6" />
                Call Now: 0414 713 777
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Professional Car Locksmith Services in Hurstville
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Serving the vibrant community of Hurstville, we provide comprehensive automotive locksmith services 
              to keep you moving. Whether you're locked out of your car or need key replacement 
              services, our expert team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Why Choose Our Hurstville Car Locksmith Service?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600">Available round the clock for urgent lockout situations</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast Local Response</h3>
                <p className="text-gray-600">Quick arrival times throughout Hurstville and surrounding areas</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully qualified professionals with proper insurance coverage</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Affordable Rates</h3>
                <p className="text-gray-600">Competitive pricing with no hidden fees or charges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Our Car Locksmith Services in Hurstville
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Car Lockout Service</h3>
                <p className="text-gray-600">Emergency assistance when you're locked out of your vehicle</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Car Key Replacement</h3>
                <p className="text-gray-600">Professional key cutting and programming for all vehicle types</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Ignition Repair</h3>
                <p className="text-gray-600">Expert ignition system repair and replacement services</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Security System Installation</h3>
                <p className="text-gray-600">Advanced automotive security system setup and maintenance</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Transponder Key Programming</h3>
                <p className="text-gray-600">Specialized programming for modern vehicle security keys</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Lock Repair & Replacement</h3>
                <p className="text-gray-600">Comprehensive lock repair and replacement for all vehicle makes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              What Our Hurstville Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Amazing service! Got locked out in Hurstville and they were here in 15 minutes. 
                  Professional and affordable - highly recommend!"
                </p>
                <p className="font-semibold text-slate-900">- Sarah M., Hurstville</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Needed a new car key in Hurstville. Fast service, great price, and the key works perfectly. 
                  Will definitely use again!"
                </p>
                <p className="font-semibold text-slate-900">- Michael T., Hurstville</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions - Hurstville
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How quickly can you reach me in Hurstville?
                </h3>
                <p className="text-gray-600">
                  We typically arrive within 15-20 minutes throughout Hurstville and surrounding areas.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Do you service all areas of Hurstville?
                </h3>
                <p className="text-gray-600">
                  Yes, we cover all of Hurstville and nearby suburbs to ensure comprehensive coverage.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  What types of vehicles do you work with in Hurstville?
                </h3>
                <p className="text-gray-600">
                  We service all vehicle makes and models, from compact cars to luxury vehicles, 
                  including European and Asian imports commonly found in Hurstville.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Are your services available 24/7 in Hurstville?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We provide 24/7 emergency locksmith services throughout Hurstville, 
                  so you're never stranded regardless of the time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Suburbs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Serving Nearby Suburbs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our car locksmith services extend beyond Hurstville to surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/allawah" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-yellow-600">
      Allawah
    </Link>
              <Link href="/carlton" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-yellow-600">
      Carlton
    </Link>
              <Link href="/kogarah" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-yellow-600">
      Kogarah
    </Link>
              <Link href="/rockdale" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-yellow-600">
      Rockdale
    </Link>
              <Link href="/bexley" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-yellow-600">
      Bexley
    </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Car Locksmith in Hurstville?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait - call us now for fast, reliable service throughout Hurstville
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+61414713777"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-6 w-6" />
                Call Now: 0414 713 777
              </a>
              <a
                href="mailto:goldenmotors128@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                Email Us
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">0414 713 777</p>
              </div>
              <div>
                <MessageCircle className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">goldenmotors128@gmail.com</p>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">Available</h3>
                <p className="text-gray-300">24/7 Emergency Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}