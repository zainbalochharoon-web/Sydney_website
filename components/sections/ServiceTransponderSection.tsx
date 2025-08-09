import { Smartphone, CheckCircle } from "lucide-react"

export default function ServiceTransponderSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white border-b border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Smartphone className="h-5 w-5 mr-2" />
            Transponder Key Programming
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transponder & Remote Programming</h2>
          <p className="text-lg text-gray-600 mb-6">
            We program new transponder keys, remotes, and smart keys for all modern vehicles. Fast, secure, and affordable.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-700"><CheckCircle className="h-4 w-4 mr-2 text-pink-500" /> All brands & models</li>
            <li className="flex items-center text-gray-700"><CheckCircle className="h-4 w-4 mr-2 text-pink-500" /> On-site programming</li>
            <li className="flex items-center text-gray-700"><CheckCircle className="h-4 w-4 mr-2 text-pink-500" /> Remote & smart key support</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/transponder.jpg" alt="Transponder Key Programming" className="rounded-2xl shadow-xl w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}
