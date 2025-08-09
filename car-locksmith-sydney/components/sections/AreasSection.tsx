import { MapPin, Car, Clock } from "lucide-react"

export default function AreasSection() {
  const areas = [
    {
      region: "North Sydney",
      suburbs: ["North Sydney", "Crows Nest", "St Leonards", "Lane Cove", "Chatswood", "Willoughby", "Mosman", "Neutral Bay"]
    },
    {
      region: "Eastern Suburbs",
      suburbs: ["Bondi", "Bondi Junction", "Coogee", "Bronte", "Tamarama", "Rose Bay", "Double Bay", "Vaucluse", "Woollahra", "Paddington"]
    },
    {
      region: "Western Sydney",
      suburbs: ["Parramatta", "Blacktown", "Penrith", "Liverpool", "Campbelltown", "Fairfield", "Bankstown", "Auburn", "Merrylands", "Guildford"]
    },
    {
      region: "Northern Beaches",
      suburbs: ["Manly", "Dee Why", "Collaroy", "Narrabeen", "Avalon", "Palm Beach", "Freshwater", "Curl Curl", "Bilgola", "Newport"]
    },
    {
      region: "Inner West",
      suburbs: ["Newtown", "Glebe", "Annandale", "Leichhardt", "Balmain", "Rozelle", "Lilyfield", "Drummoyne", "Five Dock", "Burwood"]
    },
    {
      region: "Southern Sydney",
      suburbs: ["Hurstville", "Kogarah", "Rockdale", "Sutherland", "Cronulla", "Miranda", "Caringbah", "Sylvania", "Oatley", "Mortdale"]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            Service Areas
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Areas We
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide mobile car locksmith services across all Sydney suburbs. No extra travel charges within Sydney metropolitan area.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-green-600 transition-colors">
                {area.region}
              </h3>
              
              <div className="space-y-2">
                {area.suburbs.map((suburb, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                    {suburb}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Car className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile Service</h3>
            <p className="text-gray-600 leading-relaxed">
              We come to you anywhere in Sydney. No need to tow your vehicle or travel to us.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">24/7 Availability</h3>
            <p className="text-gray-600 leading-relaxed">
              Emergency services available round the clock. We respond within 15-30 minutes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No Travel Charges</h3>
            <p className="text-gray-600 leading-relaxed">
              No extra fees for travel within Sydney. Transparent pricing with no hidden costs.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Service in Your Area?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're in the CBD, Eastern Suburbs, or Western Sydney, we're here to help with all your car locksmith needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61414713777"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Call Now: 0414 713 777
              </a>
              <a
                href="/contact"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Check Your Area
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
