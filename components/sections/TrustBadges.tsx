import { Shield, Award, Clock, Users } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed locksmith with comprehensive insurance coverage",
    },
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Experienced professionals serving Sydney since 2019",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock emergency locksmith services",
    },
    {
      icon: Users,
      title: "1000+ Happy Customers",
      description: "Trusted by Sydney residents and businesses",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-900 text-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <badge.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
