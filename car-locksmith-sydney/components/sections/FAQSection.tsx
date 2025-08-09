"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How quickly can you respond to an emergency lockout?",
      answer: "We typically respond within 15-30 minutes across Sydney. Our emergency service is available 24/7, and we prioritize urgent situations like lockouts."
    },
    {
      question: "Do you work on all car makes and models?",
      answer: "Yes, we work on all vehicle makes and models including European, Asian, and American cars. Our technicians are trained on the latest key programming and security systems."
    },
    {
      question: "How much does car key replacement cost?",
      answer: "Car key replacement costs vary depending on the type of key and vehicle. Basic keys start from $149, while transponder keys and smart keys range from $179-$299. We provide upfront pricing before starting any work."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed locksmiths with comprehensive insurance coverage. This ensures your vehicle and our work are protected. We can provide license details upon request."
    },
    {
      question: "Can you program new transponder keys?",
      answer: "Absolutely! We have the latest equipment to program transponder keys, remote controls, and smart keys for all modern vehicles. We can program keys on-site or at your location."
    },
    {
      question: "What areas do you service in Sydney?",
      answer: "We provide mobile locksmith services across all Sydney suburbs including North Sydney, Eastern Suburbs, Western Sydney, Northern Beaches, and surrounding areas. No extra travel charges within Sydney."
    },
    {
      question: "Do you offer warranty on your work?",
      answer: "Yes, we provide a 12-month warranty on all our work including key cutting, programming, and ignition repairs. We stand behind the quality of our services."
    },
    {
      question: "Can you help with ignition problems?",
      answer: "Yes, we diagnose and repair ignition issues including stuck ignitions, key won't turn, ignition replacement, and ignition cylinder problems. We can often fix these issues on-site."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our car locksmith services in Sydney.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our friendly team is here to help. Call us anytime for immediate assistance or to get answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61280000000"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Call Now: (02) 8000 0000
              </a>
              <a
                href="/contact"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
