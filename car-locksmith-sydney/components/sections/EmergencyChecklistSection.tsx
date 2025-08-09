import { CheckCircle, Phone, MapPin, Shield, Info } from "lucide-react"

export default function EmergencyChecklistSection() {
  const steps = [
    {
      title: "Stay Calm & Check Safety",
      text: "Ensure everyone is safe and away from traffic. If a child or pet is locked in, call emergency services first.",
      icon: Shield
    },
    {
      title: "Share Your Exact Location",
      text: "Use your phone’s maps to share street and nearby landmark for faster arrival.",
      icon: MapPin
    },
    {
      title: "Call Or WhatsApp Us",
      text: "We’ll dispatch the nearest technician and provide an ETA immediately.",
      icon: Phone
    },
    {
      title: "Keep Proof Of Ownership Ready",
      text: "Have your ID and vehicle details handy to speed up the job.",
      icon: Info
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-yellow-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-yellow-500/10 border border-yellow-400/30 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <CheckCircle className="h-4 w-4 mr-2" /> What To Do Right Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Quick Emergency Checklist</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="shrink-0 bg-yellow-100 text-yellow-700 p-3 rounded-xl">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

