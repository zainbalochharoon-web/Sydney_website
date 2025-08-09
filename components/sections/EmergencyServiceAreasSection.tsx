import { MapPin, CheckCircle, Clock } from "lucide-react"

export default function EmergencyServiceAreasSection() {
  const areas = [
    {
      region: "Sydney CBD & Eastern Suburbs",
      suburbs: ["Sydney CBD", "Bondi", "Surry Hills", "Paddington", "Double Bay", "Randwick", "Maroubra"]
    },
    {
      region: "Inner West & South Sydney",
      suburbs: ["Newtown", "Marrickville", "Leichhardt", "Hurstville", "Rockdale", "Kogarah", "Sutherland"]
    },
    {
      region: "North Shore & Northern Beaches",
      suburbs: ["North Sydney", "Chatswood", "Manly", "Mosman", "Dee Why", "Hornsby", "Mona Vale"]
    },
    {
      region: "Western Sydney",
      suburbs: ["Parramatta", "Blacktown", "Penrith", "Liverpool", "Bankstown", "Campbelltown", "Fairfield"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <MapPin className="h-5 w-5 mr-2" />
            Service Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Emergency Service
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Across All Sydney
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our mobile emergency locksmiths are strategically positioned throughout Sydney to provide rapid response times, no matter where you're stranded.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                {area.region}
              </h3>
              <ul className="space-y-2">
                {area.suburbs.map((suburb, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                    {suburb}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold border border-white/10">
            <Clock className="h-6 w-6 mr-3 text-yellow-400" />
            15-30 Minute Response Time Across Sydney
          </div>
        </div>
      </div>
    </section>
  )
}