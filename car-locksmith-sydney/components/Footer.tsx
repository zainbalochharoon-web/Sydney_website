import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  const services = [
    "Emergency Car Locksmith",
    "Car Key Replacement",
    "Ignition Repair",
    "Transponder Programming",
    "Broken Key Extraction",
    "Remote Key Services",
  ]

  const areas = ["Sydney CBD", "North Sydney", "Eastern Suburbs", "Western Sydney", "Inner West", "Northern Beaches"]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Car Locksmith Sydney</h3>
            <p className="text-gray-300 mb-4">
              Professional 24/7 car locksmith services across Sydney. Fast, reliable, and licensed.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-yellow-400" />
                <span>+61 2 8000 0000</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-yellow-400" />
                <span>goldenmotors128@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
                <span>Sydney, NSW</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-yellow-400" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Information</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>ABN:</strong> 31317969962
              </p>
              <p>
                <strong>Licensed & Insured</strong>
              </p>
              <p>
                <strong>Response Time:</strong> 15-30 minutes
              </p>
              <p>
                <strong>Service Guarantee:</strong> 100% satisfaction
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Car Locksmith Sydney. All rights reserved. ABN: 31317969962</p>
        </div>
      </div>
    </footer>
  )
}
