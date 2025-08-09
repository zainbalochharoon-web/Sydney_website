import { Phone, Clock, Wrench, CheckCircle } from "lucide-react"

export default function ServiceProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Call our 24/7 hotline or request service online. We’ll get your details and location.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Clock,
      title: "Quick Dispatch",
      description: "A mobile locksmith is dispatched to your location within minutes for fast response.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Wrench,
      title: "Expert Service",
      description: "Our licensed technician solves your issue on-site using the latest tools and techniques.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "You’re Back On The Road",
      description: "We test everything, ensure your satisfaction, and provide a warranty on our work.",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How It Works
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Simple, Fast, Reliable
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting help is easy. Here’s how our car locksmith service works from start to finish.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:w-1/4 relative">
              <div className={`bg-gradient-to-r ${step.color} text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg z-10`}>
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center mb-4">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-full h-1 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-50 z-0" style={{ left: '100%', width: '120px' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
