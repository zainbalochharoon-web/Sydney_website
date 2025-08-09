import { Clock, Phone, SignalHigh } from "lucide-react"

export default function EmergencyAvailabilityBanner() {
  return (
    <section className="py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SignalHigh className="h-6 w-6" />
            <p className="font-bold text-lg">Live Availability: Technicians On The Road Near You</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Avg ETA: 15–30 mins</span>
            </div>
            <a href="tel:+61280000000" className="bg-black/10 hover:bg-black/20 px-5 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

