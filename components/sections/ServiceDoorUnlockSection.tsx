import { Car, Unlock } from "lucide-react"

export default function ServiceDoorUnlockSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Unlock className="h-5 w-5 mr-2" />
            Car Door Unlocking
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Car Door Unlocking</h2>
          <p className="text-lg text-gray-600 mb-6">
            Locked your keys inside? Our locksmiths use non-destructive techniques to unlock your car doors quickly and safely.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-gray-700"><Unlock className="h-4 w-4 mr-2 text-yellow-500" /> No damage to your car</li>
            <li className="flex items-center text-gray-700"><Car className="h-4 w-4 mr-2 text-blue-500" /> All makes & models</li>
            <li className="flex items-center text-gray-700"><span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span> Fast, on-site service</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/door-unlock.jpg" alt="Car Door Unlocking" className="rounded-2xl shadow-xl w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}
