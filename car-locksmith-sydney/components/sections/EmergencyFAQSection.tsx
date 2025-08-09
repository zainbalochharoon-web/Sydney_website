"use client"

import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function EmergencyFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How quickly can you respond to my emergency car lockout?",
      answer: "Our emergency locksmiths typically arrive within 15-30 minutes of your call. We have technicians strategically positioned throughout Sydney to ensure the fastest possible response times, day or night."
    },
    {
      question: "Will unlocking my car cause any damage?",
      answer: "No. We use specialized non-destructive entry tools and techniques that allow us to unlock your vehicle without causing any damage to the doors, windows, or locking mechanism. Our no-damage guarantee ensures your car remains in perfect condition."
    },
    {
      question: "What information do I need to provide when I call for emergency service?",
      answer: "When you call, please provide your exact location, the make, model, and year of your vehicle, and a brief description of the emergency (locked keys in car, broken key, etc.). This helps us dispatch the right technician with the appropriate equipment."
    },
    {
      question: "How much does emergency car lockout service cost?",
      answer: "Our emergency car lockout service starts from $89, with the final price depending on your vehicle type, location, and the complexity of the lockout situation. We always provide upfront pricing before beginning any work, so there are no surprises."
    },
    {
      question: "Do you handle all types of car keys, including smart keys and transponder keys?",
      answer: "Yes, our emergency locksmiths are equipped to handle all types of car keys, including basic mechanical keys, transponder keys, proximity keys, and smart keys for all makes and models. We carry advanced programming equipment in our mobile units."
    },
    {
      question: "What if my key is broken in the lock or ignition?",
      answer: "Our technicians can safely extract broken keys from locks or ignitions without causing damage. After extraction, we can cut and program a new key for you on the spot, getting you back on the road quickly."
    },
    {
      question: "Are your emergency locksmiths certified and insured?",
      answer: "Yes, all our emergency locksmiths are fully licensed, certified, and insured. They undergo rigorous training and stay updated with the latest automotive lock and key technologies to provide the highest quality service."
    },
    {
      question: "Do you service all areas of Sydney for emergency lockouts?",
      answer: "Yes, we provide emergency car locksmith services throughout all Sydney metropolitan areas and surrounding suburbs. Our extensive coverage ensures we can reach you quickly, no matter where you're stranded."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/5 to-orange-500/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <HelpCircle className="h-5 w-5 mr-2" />
            Emergency FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Common Questions About
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Emergency Car Locksmith Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most frequently asked questions about our emergency car locksmith services in Sydney.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full rounded-xl p-6 text-left transition-all duration-300 ${openIndex === index ? 'bg-gradient-to-r from-red-50 to-orange-50 shadow-md border border-red-100' : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-lg font-semibold pr-4 ${openIndex === index ? 'text-red-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-red-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions about our emergency car locksmith services?
          </p>
          <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Contact Us For Immediate Assistance
          </a>
        </div>
      </div>
    </section>
  )
}