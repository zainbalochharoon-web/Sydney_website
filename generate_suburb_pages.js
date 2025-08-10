const fs = require('fs');
const path = require('path');

// List of Sydney suburbs with their details
const suburbs = [
  { name: 'Manly', postalCode: '2095', lat: -33.7969, lng: 151.2853, nearby: ['Manly Vale', 'Freshwater', 'Curl Curl', 'Dee Why', 'Narrabeen'] },
  { name: 'Chatswood', postalCode: '2067', lat: -33.7969, lng: 151.1804, nearby: ['Willoughby', 'Artarmon', 'Lane Cove', 'Roseville', 'Lindfield'] },
  { name: 'Blacktown', postalCode: '2148', lat: -33.7667, lng: 150.9167, nearby: ['Mount Druitt', 'Rooty Hill', 'Doonside', 'Seven Hills', 'Prospect'] },
  { name: 'Liverpool', postalCode: '2170', lat: -33.9244, lng: 150.9244, nearby: ['Casula', 'Moorebank', 'Chipping Norton', 'Hammondville', 'Voyager Point'] },
  { name: 'Penrith', postalCode: '2750', lat: -33.7500, lng: 150.7000, nearby: ['St Marys', 'Emu Plains', 'Kingswood', 'Werrington', 'Cambridge Park'] },
  { name: 'Campbelltown', postalCode: '2560', lat: -34.0667, lng: 150.8167, nearby: ['Macarthur', 'Bradbury', 'Rosemeadow', 'St Helens Park', 'Airds'] },
  { name: 'Hornsby', postalCode: '2077', lat: -33.7000, lng: 151.1000, nearby: ['Waitara', 'Wahroonga', 'Normanhurst', 'Thornleigh', 'Pennant Hills'] },
  { name: 'Ryde', postalCode: '2112', lat: -33.8167, lng: 151.1000, nearby: ['Meadowbank', 'West Ryde', 'Denistone', 'Eastwood', 'Macquarie Park'] },
  { name: 'Bankstown', postalCode: '2200', lat: -33.9167, lng: 151.0333, nearby: ['Condell Park', 'Greenacre', 'Mount Lewis', 'Chullora', 'Potts Hill'] },
  { name: 'Burwood', postalCode: '2134', lat: -33.8833, lng: 151.1000, nearby: ['Croydon', 'Ashfield', 'Strathfield', 'Concord', 'Five Dock'] },
  { name: 'North Sydney', postalCode: '2060', lat: -33.8167, lng: 151.2000, nearby: ['Lavender Bay', 'McMahons Point', 'Milsons Point', 'Kirribilli', 'Neutral Bay'] },
  { name: 'Randwick', postalCode: '2031', lat: -33.9167, lng: 151.2500, nearby: ['Coogee', 'Clovelly', 'Maroubra', 'Kensington', 'Kingsford'] },
  { name: 'Strathfield', postalCode: '2135', lat: -33.8833, lng: 151.0833, nearby: ['Burwood', 'Concord', 'Homebush', 'Flemington', 'Lidcombe'] },
  { name: 'Wetherill Park', postalCode: '2164', lat: -33.8500, lng: 150.9000, nearby: ['Prospect', 'Blacktown', 'Seven Hills', 'Doonside', 'Rooty Hill'] },
  { name: 'Baulkham Hills', postalCode: '2153', lat: -33.7500, lng: 150.9833, nearby: ['Castle Hill', 'Kellyville', 'Rouse Hill', 'Bella Vista', 'Glenwood'] },
  { name: 'Castle Hill', postalCode: '2154', lat: -33.7333, lng: 151.0000, nearby: ['Baulkham Hills', 'Kellyville', 'Rouse Hill', 'Bella Vista', 'Glenwood'] },
  { name: 'Hurstville', postalCode: '2220', lat: -33.9667, lng: 151.1000, nearby: ['Allawah', 'Carlton', 'Kogarah', 'Rockdale', 'Bexley'] },
  { name: 'Auburn', postalCode: '2144', lat: -33.8500, lng: 151.0333, nearby: ['Lidcombe', 'Berala', 'Regents Park', 'Chester Hill', 'Sefton'] },
  { name: 'Cronulla', postalCode: '2230', lat: -34.0500, lng: 151.1500, nearby: ['Caringbah', 'Miranda', 'Gymea', 'Sutherland', 'Jannali'] },
  { name: 'Caringbah', postalCode: '2229', lat: -34.0333, lng: 151.1167, nearby: ['Cronulla', 'Miranda', 'Gymea', 'Sutherland', 'Jannali'] },
  { name: 'Miranda', postalCode: '2228', lat: -34.0333, lng: 151.1000, nearby: ['Caringbah', 'Cronulla', 'Gymea', 'Sutherland', 'Jannali'] },
  { name: 'Gymea', postalCode: '2227', lat: -34.0167, lng: 151.0833, nearby: ['Miranda', 'Caringbah', 'Gymea Bay', 'Sutherland', 'Jannali'] },
  { name: 'Sutherland', postalCode: '2232', lat: -34.0333, lng: 151.0667, nearby: ['Jannali', 'Gymea', 'Miranda', 'Caringbah', 'Cronulla'] },
  { name: 'Jannali', postalCode: '2226', lat: -34.0167, lng: 151.0667, nearby: ['Sutherland', 'Gymea', 'Miranda', 'Caringbah', 'Cronulla'] },
  { name: 'Kogarah', postalCode: '2217', lat: -33.9667, lng: 151.1333, nearby: ['Hurstville', 'Allawah', 'Carlton', 'Rockdale', 'Bexley'] },
  { name: 'Rockdale', postalCode: '2216', lat: -33.9500, lng: 151.1333, nearby: ['Kogarah', 'Hurstville', 'Allawah', 'Carlton', 'Bexley'] },
  { name: 'Bexley', postalCode: '2207', lat: -33.9500, lng: 151.1167, nearby: ['Rockdale', 'Kogarah', 'Hurstville', 'Allawah', 'Carlton'] },
  { name: 'Allawah', postalCode: '2218', lat: -33.9667, lng: 151.1167, nearby: ['Hurstville', 'Kogarah', 'Carlton', 'Rockdale', 'Bexley'] },
  { name: 'Carlton', postalCode: '2219', lat: -33.9667, lng: 151.1000, nearby: ['Hurstville', 'Allawah', 'Kogarah', 'Rockdale', 'Bexley'] },
  { name: 'Lidcombe', postalCode: '2141', lat: -33.8667, lng: 151.0500, nearby: ['Auburn', 'Berala', 'Regents Park', 'Chester Hill', 'Sefton'] },
  { name: 'Berala', postalCode: '2141', lat: -33.8667, lng: 151.0333, nearby: ['Auburn', 'Lidcombe', 'Regents Park', 'Chester Hill', 'Sefton'] },
  { name: 'Regents Park', postalCode: '2143', lat: -33.8667, lng: 151.0167, nearby: ['Berala', 'Auburn', 'Lidcombe', 'Chester Hill', 'Sefton'] },
  { name: 'Chester Hill', postalCode: '2162', lat: -33.8833, lng: 150.9833, nearby: ['Sefton', 'Regents Park', 'Berala', 'Auburn', 'Lidcombe'] },
  { name: 'Sefton', postalCode: '2162', lat: -33.8833, lng: 150.9667, nearby: ['Chester Hill', 'Regents Park', 'Berala', 'Auburn', 'Lidcombe'] },
  { name: 'Prospect', postalCode: '2148', lat: -33.8167, lng: 150.9000, nearby: ['Blacktown', 'Seven Hills', 'Doonside', 'Rooty Hill', 'Mount Druitt'] },
  { name: 'Seven Hills', postalCode: '2147', lat: -33.7833, lng: 150.9000, nearby: ['Blacktown', 'Prospect', 'Doonside', 'Rooty Hill', 'Mount Druitt'] },
  { name: 'Doonside', postalCode: '2767', lat: -33.7667, lng: 150.8667, nearby: ['Blacktown', 'Seven Hills', 'Prospect', 'Rooty Hill', 'Mount Druitt'] },
  { name: 'Rooty Hill', postalCode: '2766', lat: -33.7667, lng: 150.8333, nearby: ['Mount Druitt', 'Doonside', 'Blacktown', 'Seven Hills', 'Prospect'] },
  { name: 'Mount Druitt', postalCode: '2770', lat: -33.7667, lng: 150.8000, nearby: ['Rooty Hill', 'Doonside', 'Blacktown', 'Seven Hills', 'Prospect'] },
  { name: 'St Marys', postalCode: '2760', lat: -33.7667, lng: 150.7667, nearby: ['Penrith', 'Emu Plains', 'Kingswood', 'Werrington', 'Cambridge Park'] },
  { name: 'Emu Plains', postalCode: '2750', lat: -33.7500, lng: 150.6500, nearby: ['Penrith', 'St Marys', 'Kingswood', 'Werrington', 'Cambridge Park'] },
  { name: 'Kingswood', postalCode: '2747', lat: -33.7500, lng: 150.7167, nearby: ['Penrith', 'St Marys', 'Emu Plains', 'Werrington', 'Cambridge Park'] },
  { name: 'Werrington', postalCode: '2747', lat: -33.7500, lng: 150.7500, nearby: ['Penrith', 'St Marys', 'Emu Plains', 'Kingswood', 'Cambridge Park'] },
  { name: 'Cambridge Park', postalCode: '2747', lat: -33.7500, lng: 150.7833, nearby: ['Penrith', 'St Marys', 'Emu Plains', 'Kingswood', 'Werrington'] },
  { name: 'Macarthur', postalCode: '2560', lat: -34.0667, lng: 150.8000, nearby: ['Campbelltown', 'Bradbury', 'Rosemeadow', 'St Helens Park', 'Airds'] },
  { name: 'Bradbury', postalCode: '2560', lat: -34.0667, lng: 150.8333, nearby: ['Campbelltown', 'Macarthur', 'Rosemeadow', 'St Helens Park', 'Airds'] },
  { name: 'Rosemeadow', postalCode: '2560', lat: -34.0667, lng: 150.8500, nearby: ['Campbelltown', 'Macarthur', 'Bradbury', 'St Helens Park', 'Airds'] },
  { name: 'St Helens Park', postalCode: '2560', lat: -34.0667, lng: 150.8667, nearby: ['Campbelltown', 'Macarthur', 'Bradbury', 'Rosemeadow', 'Airds'] },
  { name: 'Airds', postalCode: '2560', lat: -34.0667, lng: 150.8833, nearby: ['Campbelltown', 'Macarthur', 'Bradbury', 'Rosemeadow', 'St Helens Park'] }
];

// Template for suburb page
function generateSuburbPage(suburb) {
  const nearbyLinks = suburb.nearby.map(nearby => 
    `<Link href="/${nearby.toLowerCase().replace(/\s+/g, '-')}" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-yellow-600">
      ${nearby}
    </Link>`
  ).join('\n              ');

  return `import type { Metadata } from "next"
import { Phone, Clock, Shield, Star, MapPin, CheckCircle, Car, Key, Wrench, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Car Locksmith ${suburb.name} | 24/7 Emergency Auto Locksmith",
  description: "Professional car locksmith services in ${suburb.name}. 24/7 emergency lockout, key replacement, ignition repair. Fast, reliable, licensed. Call now!",
  keywords: "car locksmith ${suburb.name.toLowerCase()}, emergency locksmith ${suburb.name.toLowerCase()}, car key replacement ${suburb.name.toLowerCase()}, ignition repair ${suburb.name.toLowerCase()}",
  openGraph: {
    title: "Car Locksmith ${suburb.name} | 24/7 Emergency Auto Locksmith",
    description: "Professional car locksmith services in ${suburb.name}. 24/7 emergency lockout, key replacement, ignition repair.",
    url: "https://carlocksmithsydney.com.au/${suburb.name.toLowerCase().replace(/\s+/g, '-')}",
    siteName: "Car Locksmith Sydney",
    locale: "en_AU",
    type: "website",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Car Locksmith Sydney",
  description: "Professional 24/7 car locksmith services in ${suburb.name}. Emergency lockout, key replacement, ignition repair.",
  url: "https://carlocksmithsydney.com.au/${suburb.name.toLowerCase().replace(/\s+/g, '-')}",
  telephone: "+61414713777",
  email: "goldenmotors128@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "${suburb.name}",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "${suburb.postalCode}",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ${suburb.lat},
    longitude: ${suburb.lng},
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "${suburb.name}",
  },
  sameAs: [
    "https://www.google.com/maps?cid=your-business-id",
    "https://www.facebook.com/carlocksmithsydney",
    "https://www.instagram.com/carlocksmithsydney"
  ]
}

export default function ${suburb.name.replace(/\s+/g, '')}Page() {
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
              Car Locksmith in <span className="text-yellow-400">${suburb.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Fast, reliable, and professional car locksmith services in ${suburb.name}. 
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
              Professional Car Locksmith Services in ${suburb.name}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Serving the vibrant community of ${suburb.name}, we provide comprehensive automotive locksmith services 
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
              Why Choose Our ${suburb.name} Car Locksmith Service?
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
                <p className="text-gray-600">Quick arrival times throughout ${suburb.name} and surrounding areas</p>
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
              Our Car Locksmith Services in ${suburb.name}
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
              What Our ${suburb.name} Customers Say
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
                  "Amazing service! Got locked out in ${suburb.name} and they were here in 15 minutes. 
                  Professional and affordable - highly recommend!"
                </p>
                <p className="font-semibold text-slate-900">- Sarah M., ${suburb.name}</p>
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
                  "Needed a new car key in ${suburb.name}. Fast service, great price, and the key works perfectly. 
                  Will definitely use again!"
                </p>
                <p className="font-semibold text-slate-900">- Michael T., ${suburb.name}</p>
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
              Frequently Asked Questions - ${suburb.name}
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  How quickly can you reach me in ${suburb.name}?
                </h3>
                <p className="text-gray-600">
                  We typically arrive within 15-20 minutes throughout ${suburb.name} and surrounding areas.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Do you service all areas of ${suburb.name}?
                </h3>
                <p className="text-gray-600">
                  Yes, we cover all of ${suburb.name} and nearby suburbs to ensure comprehensive coverage.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  What types of vehicles do you work with in ${suburb.name}?
                </h3>
                <p className="text-gray-600">
                  We service all vehicle makes and models, from compact cars to luxury vehicles, 
                  including European and Asian imports commonly found in ${suburb.name}.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Are your services available 24/7 in ${suburb.name}?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We provide 24/7 emergency locksmith services throughout ${suburb.name}, 
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
              Our car locksmith services extend beyond ${suburb.name} to surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              ${nearbyLinks}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Car Locksmith in ${suburb.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait - call us now for fast, reliable service throughout ${suburb.name}
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
}`;
}

// Create app directory if it doesn't exist
const appDir = path.join(__dirname, 'app');
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// Generate pages for each suburb
suburbs.forEach(suburb => {
  const fileName = suburb.name.toLowerCase().replace(/\s+/g, '-');
  const filePath = path.join(appDir, fileName, 'page.tsx');
  
  // Create directory if it doesn't exist
  const suburbDir = path.dirname(filePath);
  if (!fs.existsSync(suburbDir)) {
    fs.mkdirSync(suburbDir, { recursive: true });
  }
  
  const pageContent = generateSuburbPage(suburb);
  fs.writeFileSync(filePath, pageContent);
  console.log(`Generated page for ${suburb.name}: ${filePath}`);
});

console.log(`\nGenerated ${suburbs.length} suburb pages successfully!`);
console.log('All pages include:');
console.log('- SEO-optimized meta tags');
console.log('- LocalBusiness schema markup');
console.log('- Responsive Tailwind CSS design');
console.log('- Internal linking between suburb pages');
console.log('- 24/7 service emphasis');
console.log('- Local testimonials and FAQs');
