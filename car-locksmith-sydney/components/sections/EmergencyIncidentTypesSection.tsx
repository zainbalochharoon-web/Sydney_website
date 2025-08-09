import { AlertTriangle, Key, Car, Lock, Wrench, Battery } from "lucide-react"

export default function EmergencyIncidentTypesSection() {
  const incidents = [
    {
      icon: Lock,
      title: "Keys Locked In Car",
      desc: "Fast, damage-free unlocking for all makes and models."
    },
    {
      icon: Car,
      title: "Keys Locked In Boot",
      desc: "Special techniques to access the boot without harming your vehicle."
    },
    {
      icon: Key,
      title: "Lost Or Stolen Keys",
      desc: "On-the-spot key cutting and programming, plus rekeying if needed."
    },
    {
      icon: Wrench,
      title: "Broken Or Jammed Key",
      desc: "Safe extraction from door or ignition and immediate replacement."
    },
    {
      icon: Battery,
      title: "Dead Remote Battery",
      desc: "Remote diagnosis, battery replacement and re-sync on site."
    },
    {
      icon: AlertTriangle,
      title: "Urgent Safety Situations",
      desc: "Priority response when someone is locked inside or at risk."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-red-950 via-orange-950 to-yellow-950 text-white/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 to-yellow-800/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-yellow-300 mb-4">
            <AlertTriangle className="h-4 w-4 mr-2" /> Common Emergency Incidents
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            We Handle All Emergency Scenarios
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {incidents.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/15 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="shrink-0 bg-yellow-500/20 text-yellow-300 rounded-xl p-3">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

