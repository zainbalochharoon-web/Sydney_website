import { Smartphone, Wifi } from "lucide-react"

export default function ServiceRemoteSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white border-b border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Wifi className="h-5 w-5 mr-2" />
            Remote Key & Fob Programming
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Remote & Fob Programming</h2>
          <p className="text-lg text-gray-600 mb-6">
            We program and replace remote keys and key fobs for all car brands. Fast, reliable, and affordable service at your location.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-700"><Wifi className="h-4 w-4 mr-2 text-blue-500" /> All remote & fob types</li>
            <li className="flex items-center text-gray-700"><span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span> On-site programming</li>
            <li className="flex items-center text-gray-700"><span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span> Fast turnaround</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/remote-fob.jpg" alt="Remote Key & Fob Programming" className="rounded-2xl shadow-xl w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}
