import { CreditCard, Wallet, ShieldCheck, Smartphone } from "lucide-react"

export default function EmergencyPaymentMethodsSection() {
  const methods = [
    { icon: CreditCard, label: "Visa / Mastercard", note: "Tap or chip on-site" },
    { icon: Smartphone, label: "Apple Pay / Google Pay", note: "Contactless available" },
    { icon: Wallet, label: "Cash", note: "Technician will provide receipt" },
    { icon: ShieldCheck, label: "Invoice & ABN", note: "Business/commercial jobs supported" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Payment Options</h2>
          <p className="text-gray-600 mt-2">Simple, transparent pricing. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((m, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100 text-yellow-700 mb-3">
                <m.icon className="h-6 w-6" />
              </div>
              <div className="font-semibold text-slate-900">{m.label}</div>
              <div className="text-sm text-gray-600">{m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

