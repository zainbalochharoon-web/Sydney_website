"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center py-24">
      <h1 className="text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
      <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
        Have a question or need help? Reach out to our team for fast, friendly support and emergency locksmith services.
      </p>
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg">
        More details coming soon!
        </div>
      </section>
  )
}
