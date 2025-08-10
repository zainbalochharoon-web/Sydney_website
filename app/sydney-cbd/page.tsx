import type { Metadata } from "next"
import { Phone, Clock, Shield, Star, MapPin, CheckCircle, Car, Key, Wrench, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Car Locksmith Sydney CBD | 24/7 Emergency Auto Locksmith",
  description: "Professional car locksmith services in Sydney CBD. 24/7 emergency lockout, key replacement, ignition repair. Fast, reliable, licensed. Call now!",
  keywords: "car locksmith sydney cbd, emergency locksmith sydney cbd, car key replacement sydney cbd, ignition repair sydney cbd",
  openGraph: {
    title: "Car Locksmith Sydney CBD | 24/7 Emergency Auto Locksmith",
    description: "Professional car locksmith services in Sydney CBD. 24/7 emergency lockout, key replacement, ignition repair.",
    url: "https://carlocksmithsydney.com.au/sydney-cbd",
    siteName: "Car Locksmith Sydney",
    locale: "en_AU",
    type: "website",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Car Locksmith Sydney",
  description: "Professional 24/7 car locksmith services in Sydney CBD. Emergency lockout, key replacement, ignition repair.",
  url: "https://carlocksmithsydney.com.au/sydney-cbd",
  telephone: "+61414713777",
  email: "goldenmotors128@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sydney CBD",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "2000",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Sydney CBD",
  },
  sameAs: [
    "https://www.google.com/maps?cid=your-business-id",
    "https://www.facebook.com/carlocksmithsydney",
    "https://www.instagram.com/carlocksmithsydney"
  ]
}

export default function SydneyCBDPage() {
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
              Car Locksmith in <span className="text-yellow-400">Sydney CBD</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Fast, reliable, and professional car locksmith services in the heart of Sydney. 
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
              Professional Car Locksmith Services in Sydney CBD
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Located in the bustling heart of Sydney, we provide comprehensive automotive locksmith services 
              to residents and businesses throughout the CBD area. From emergency lockouts to advanced key programming, 
              our team of licensed professionals ensures your vehicle security needs are met with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Why Choose Our Sydney CBD Locksmith Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="bg-yellow-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Emergency service available around the clock, even in the heart of Sydney CBD</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="bg-yellow-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed professionals with comprehensive insurance coverage</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="bg-yellow-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">Quick arrival times throughout Sydney CBD and surrounding areas</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="bg-yellow-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Affordable Rates</h3>
                <p className="text-gray-600">Competitive pricing with no hidden fees or surprise charges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Our Car Locksmith Services in Sydney CBD
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-yellow-400 p-3 rounded-lg w-14 h-14 mb-4">
                  <Car className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Car Lockout</h3>
                <p className="text-gray-600">Fast response to get you back in your vehicle when you're locked out</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-yellow-400 p-3 rounded-lg w-14 h-14 mb-4">
                  <Key className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Car Key Replacement</h3>
                <p className="text-gray-600">Complete key cutting and programming for all vehicle makes and models</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-yellow-400 p-3 rounded-lg w-14 h-14 mb-4">
                  <Wrench className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ignition Repair</h3>
                <p className="text-gray-600">Professional ignition system repair and replacement services</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-yellow-400 p-3 rounded-lg w-14 h-14 mb-4">
                  <Key className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transponder Programming</h3>
                <p className="text-gray-600">Advanced key programming for modern vehicle security systems</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-yellow-400 p-3 rounded-lg w-14 h-14 mb-4">
                  <Wrench className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Broken Key Extraction</h3>
                <p className="text-gray-600">Safe removal of broken keys from locks and ignition systems</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-yellow-400 p-3 rounded-lg w-14 h-14 mb-4">
                  <Key className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Remote Key Services</h3>
                <p className="text-gray-600">Programming and repair of remote key fobs and smart keys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              What Our Sydney CBD Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <Users className="h-6 w-6 text-slate-900" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-slate-900">Sarah M.</h4>
                    <p className="text-sm text-gray-500">Sydney CBD Resident</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Locked myself out of my car near Martin Place. They arrived in 15 minutes and had me sorted in no time. 
                  Excellent service in the heart of Sydney!"
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <Users className="h-6 w-6 text-slate-900" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-slate-900">Michael T.</h4>
                    <p className="text-sm text-gray-500">CBD Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Professional service when I needed a new key for my company vehicle. 
                  They came to our office in the CBD and completed the job efficiently."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <Users className="h-6 w-6 text-slate-900" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-slate-900">Emma L.</h4>
                    <p className="text-sm text-gray-500">Pyrmont Resident</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Great locksmith service near Darling Harbour. Fast response and fair pricing. 
                  Highly recommend for anyone in the Sydney CBD area."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions - Sydney CBD
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How quickly can you respond to emergencies in Sydney CBD?
                </h3>
                <p className="text-gray-600">
                  We typically respond to emergency calls in Sydney CBD within 15-20 minutes. 
                  Our team is strategically located to provide fast service throughout the central business district.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you service all areas within Sydney CBD?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive coverage throughout Sydney CBD including The Rocks, 
                  Circular Quay, Martin Place, Darling Harbour, and all surrounding business districts.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What types of vehicles do you work with in the CBD?
                </h3>
                <p className="text-gray-600">
                  We service all vehicle types including cars, SUVs, trucks, and motorcycles. 
                  Our technicians are certified to work with both domestic and imported vehicles.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Are your services available 24/7 in Sydney CBD?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We provide 24/7 emergency locksmith services throughout Sydney CBD. 
                  Whether it's 2 AM or 2 PM, we're here to help with your automotive security needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you offer mobile service in the CBD area?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide fully mobile locksmith services throughout Sydney CBD. 
                  Our technicians come to your location with all necessary equipment and tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contact Our Sydney CBD Locksmith Team
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Need immediate assistance? Our Sydney CBD locksmith team is ready to help 24/7. 
                  Call us now for fast, reliable service.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">0414 713 777</div>
                      <div className="text-gray-300">24/7 Emergency Service</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Sydney CBD</div>
                      <div className="text-gray-300">Serving all CBD areas</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">24/7 Availability</div>
                      <div className="text-gray-300">Emergency service anytime</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get a Quote</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Describe your locksmith needs"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Serving Sydney CBD and Surrounding Areas
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our locksmith services extend beyond Sydney CBD to nearby suburbs and districts
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/north-sydney" className="text-yellow-600 hover:text-yellow-700 font-medium">
                North Sydney
              </Link>
              <Link href="/eastern-suburbs" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Eastern Suburbs
              </Link>
              <Link href="/inner-west" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Inner West
              </Link>
              <Link href="/darlinghurst" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Darlinghurst
              </Link>
              <Link href="/surry-hills" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Surry Hills
              </Link>
              <Link href="/woolloomooloo" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Woolloomooloo
              </Link>
              <Link href="/potts-point" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Potts Point
              </Link>
              <Link href="/darling-point" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Darling Point
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
