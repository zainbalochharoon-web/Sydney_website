import { MapPin, Car } from "lucide-react"

export default function ServiceMobileSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            Mobile Locksmith Service
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">We Come to You Anywhere in Sydney</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our fully equipped mobile locksmith vans cover all Sydney suburbs. We provide on-site service at your home, office, or roadside.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-700"><Car className="h-4 w-4 mr-2 text-blue-500" /> Citywide coverage</li>
            <li className="flex items-center text-gray-700"><MapPin className="h-4 w-4 mr-2 text-green-500" /> No extra travel charges</li>
            <li className="flex items-center text-gray-700"><span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span> Fast, reliable response</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/mobile-locksmith.jpg" alt="Mobile Locksmith Service" className="rounded-2xl shadow-xl w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}
