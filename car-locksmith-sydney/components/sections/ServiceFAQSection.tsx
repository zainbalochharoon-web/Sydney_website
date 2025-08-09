"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function ServiceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How quickly can you respond to an emergency lockout?",
      answer: "We typically respond within 15-30 minutes for emergency lockouts. Our mobile locksmiths are strategically located across Sydney to provide fast service when you need it most."
    },
    {
      question: "Do you work on all car makes and models?",
      answer: "Yes, we work on all car makes and models including European, Asian, and American vehicles. From classic cars to the latest models with smart keys, we have the expertise and equipment to handle any vehicle."
    },
    {
      question: "What if my key breaks off in the lock or ignition?",
      answer: "We can safely extract broken keys without damaging your lock or ignition. Our locksmiths use specialized tools and techniques to remove broken keys and then cut you a new key on the spot."
    },
    {
      question: "How much does a new car key cost?",
      answer: "Key replacement costs vary depending on the type of key (basic, transponder, smart key) and your car's make and model. Prices start from $89 for basic keys and $129 for transponder keys. We provide upfront pricing with no hidden fees."
    },
    {
      question: "Are your locksmiths licensed and insured?",
      answer: "Yes, all our locksmiths are fully licensed, insured, and police-checked. We maintain the highest standards of professionalism and security for your peace of mind."
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide a 12-month warranty on all key cutting, programming, and ignition repair services. We stand behind our work and ensure customer satisfaction."
    },
    {
      question: "Can you program remote key fobs?",
      answer: "Absolutely! We can program all types of remote key fobs, including those for modern vehicles with advanced security systems. Our technicians are trained on the latest programming equipment."
    },
    {
      question: "What areas do you service in Sydney?",
      answer: "We provide mobile locksmith services across all Sydney suburbs including the CBD, Eastern Suburbs, Northern Beaches, Western Sydney, and surrounding areas. No extra travel charges within the metro area."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="text-lg mr-2">❓</span>
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Common Questions
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most frequently asked questions about our car locksmith services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white rounded-xl shadow-md border border-gray-100 p-6 text-left hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
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
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+61280000000" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 inline-flex items-center justify-center"
            >
              Call Us Now
            </a>
            <a 
              href="/contact" 
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
