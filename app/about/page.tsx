import type { Metadata } from "next"
import { Shield, Award, Users, Clock, CheckCircle, Star, Calendar, MapPin, Hammer, Wrench, Zap, Key, MessageSquare, Map, Award as Certificate, HelpCircle, Phone, Mail, Target, Compass, Heart, DollarSign, CreditCard, BadgeCheck, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "About Car Locksmith Sydney | Licensed Auto Locksmith Professionals",
  description:
    "Learn about Car Locksmith Sydney - licensed, insured professionals serving Sydney since 2019. 5+ years experience, 1000+ satisfied customers.",
  keywords: "about car locksmith sydney, licensed locksmith, professional locksmith, auto locksmith experience",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "David Mitchell",
      role: "Founder & Master Locksmith",
      experience: "15+ years",
      certifications: ["Licensed Security Professional", "Automotive Specialist"],
      bio: "David founded Car Locksmith Sydney with a vision to provide reliable, professional automotive locksmith services across Sydney."
    },
    {
      name: "Sarah Johnson",
      role: "Senior Locksmith Technician",
      experience: "10+ years",
      certifications: ["Certified Automotive Locksmith", "Electronic Security Specialist"],
      bio: "Sarah specializes in advanced key programming and electronic security systems for modern vehicles."
    },
    {
      name: "Michael Chen",
      role: "Emergency Response Specialist",
      experience: "8+ years",
      certifications: ["Emergency Locksmith Certification", "Vehicle Entry Specialist"],
      bio: "Michael leads our 24/7 emergency response team, ensuring rapid assistance for urgent lockout situations."
    },
    {
      name: "Emma Wilson",
      role: "Customer Service Manager",
      experience: "7+ years",
      certifications: ["Customer Experience Professional", "Service Excellence"],
      bio: "Emma ensures every customer receives exceptional service from first call to job completion."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We're there when you need us, with prompt service and consistent results.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Licensed, insured, and highly trained locksmiths for all automotive security needs.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description: "Premium parts and meticulous workmanship for lasting solutions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Fast response times and efficient service to get you back on the road quickly.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Users className="h-5 w-5 mr-2" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Car Locksmith Sydney
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sydney's trusted automotive locksmith service since 2019. Licensed professionals dedicated to keeping you secure on the road.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">V+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">V,000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">XV min</div>
              <div className="text-gray-300">Average Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">XXIV/VII</div>
              <div className="text-gray-300">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4 mr-2" />
              Our Mission & Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Driven By
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We exist to deliver fast, safe and professional automotive locksmith solutions, keeping Sydney moving 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-xl p-3 mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable, damage-free vehicle access, key replacement and ignition repair at honest prices, with
                a response time of 15–30 minutes and a 100% satisfaction guarantee.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-xl p-3 mr-4">
                  <Compass className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be Sydney’s most trusted automotive locksmith, known for exceptional service, modern technology and
                genuine care for our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="h-4 w-4 mr-2" />
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              A Smooth, Safe
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> 6-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the first call to job completion, our process is designed for speed, clarity and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Call & Diagnose', desc: 'We confirm your location, vehicle details and issue to prepare the right solution.' },
              { step: '02', title: 'Dispatch', desc: 'Nearest licensed technician heads to you with the correct tools and parts.' },
              { step: '03', title: 'Arrival', desc: 'Technician arrives within 15–30 minutes and confirms the plan and price.' },
              { step: '04', title: 'Work Begins', desc: 'Non-destructive entry, key cutting/programming or ignition repair performed carefully.' },
              { step: '05', title: 'Testing', desc: 'We fully test keys, remote functions and locks before handover.' },
              { step: '06', title: 'Payment & Receipt', desc: 'Pay via cash/card. You receive a digital receipt and warranty details.' },
            ].map((item) => (
              <div key={item.step} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-3xl font-extrabold text-blue-600 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees & Policies Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <BadgeCheck className="h-4 w-4 mr-2" />
              Our Promises
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Guarantees &
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Policies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every job is backed by strong guarantees so you’re never left unsure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <ShieldCheck className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">No Damage Guarantee</h3>
              <p className="text-gray-300">We use non-destructive methods. If damage occurs, we’ll make it right.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <BadgeCheck className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Workmanship Warranty</h3>
              <p className="text-gray-300">All jobs include a written warranty for parts and labour.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Clock className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">15–30 Min ETA</h3>
              <p className="text-gray-300">Our average arrival time across Sydney during operating hours.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <CheckCircle className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Upfront Pricing</h3>
              <p className="text-gray-300">Clear, transparent quotes before any work starts. No surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment Options Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4 mr-2" />
              Pricing & Payments
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Fair Prices.
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> Flexible Options.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We aim to save you time and money without compromising on quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Emergency Lockout</h3>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">From $89</div>
              <p className="text-gray-600 mb-4">No damage entry, fast response</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Key Replacement</h3>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">From $149</div>
              <p className="text-gray-600 mb-4">Cutting & programming included</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ignition Repair</h3>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">From $199</div>
              <p className="text-gray-600 mb-4">Diagnostic & warranty included</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-2">
                <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-semibold text-slate-900">Payment Methods</h4>
              </div>
              <p className="text-gray-600">We accept cash, EFTPOS, Visa, Mastercard and contactless payments.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-rose-600 mr-2" />
                <h4 className="font-semibold text-slate-900">Discounts</h4>
              </div>
              <p className="text-gray-600">Senior, student and emergency personnel discounts available. Ask when booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Principles That
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Guide Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our values define how we work and the service we provide to every customer across Sydney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8"
              >
                <div className={`bg-gradient-to-r ${value.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Meet Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Expert Locksmiths
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> At Your Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of certified professionals brings years of experience and specialized knowledge to every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                  {member.name === "David Mitchell" ? (
                    <img 
                      src="/David_mitchell.jpg" 
                      alt="David Mitchell" 
                      className="w-24 h-24 object-cover rounded-full border-2 border-white"
                    />
                  ) : member.name === "Michael Chen" ? (
                    <img 
                      src="/michel.avif" 
                      alt="Michael Chen" 
                      className="w-24 h-24 object-cover rounded-full border-2 border-white"
                    />
                  ) : member.name === "Sarah Johnson" ? (
                    <img 
                      src="/sarah.png" 
                      alt="Sarah Johnson" 
                      className="w-24 h-24 object-cover rounded-full border-2 border-white"
                    />
                  ) : member.name === "Emma Wilson" ? (
                    <img 
                      src="/emma.png" 
                      alt="Emma Wilson" 
                      className="w-24 h-24 object-cover rounded-full border-2 border-white"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-3xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{member.experience} Experience</span>
                  </div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Hammer className="h-5 w-5 mr-2" />
              Our Equipment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Technology
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                For Every Vehicle
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We invest in the latest locksmith equipment and technology to provide efficient, effective solutions for all vehicle makes and models.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Key Programming</h3>
              <p className="text-gray-300">
                State-of-the-art key programming devices compatible with all modern vehicle transponder systems.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Non-Destructive Entry Tools</h3>
              <p className="text-gray-300">
                Specialized equipment for damage-free vehicle entry during lockouts and emergencies.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ignition Repair Systems</h3>
              <p className="text-gray-300">
                Precision tools for diagnosing and repairing complex ignition system issues in all vehicle types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Customer Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied customers across Sydney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JM
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">James Morrison</h4>
                  <div className="text-gray-500 text-sm">Eastern Suburbs</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I was locked out of my car at midnight and called Car Locksmith Sydney. They arrived within 20 minutes and had my door open in seconds. Professional, fast, and reasonably priced!"
              </p>
              <div className="text-sm text-blue-600 font-medium">Emergency Lockout Service</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RL
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Rebecca Lee</h4>
                  <div className="text-gray-500 text-sm">Northern Beaches</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "After losing my only car key, I was worried about the cost and time to replace it. Car Locksmith Sydney provided a new key at half the dealer price and in just 30 minutes!"
              </p>
              <div className="text-sm text-blue-600 font-medium">Key Replacement Service</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  TP
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Thomas Patel</h4>
                  <div className="text-gray-500 text-sm">Western Sydney</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-gray-600 mb-4">
                "My ignition was giving me trouble for weeks. The team diagnosed and fixed the issue in one visit. Great service and they explained everything clearly."
              </p>
              <div className="text-sm text-blue-600 font-medium">Ignition Repair Service</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View more customer reviews
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Community & CSR Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Community Commitment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Supporting Our
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Local Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We’re proud to support local initiatives and give back to the community that trusts us every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Roadside Safety</h3>
              <p className="text-gray-600">We run free workshops on safe vehicle lockout practices and emergency readiness.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Local Sponsorships</h3>
              <p className="text-gray-600">Proud supporters of community sports clubs and youth development programs.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Environmental Care</h3>
              <p className="text-gray-600">We recycle parts where possible and reduce waste across our mobile operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Map Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Map className="h-4 w-4 mr-2" />
              Service Coverage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              We Serve
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> All Sydney Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mobile locksmith service covers the entire Sydney metropolitan area with fast response times.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 mb-8 bg-gray-100 rounded-xl overflow-hidden">
              {/* This would be replaced with an actual map component in a real implementation */}
              <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center flex items-center justify-center">
                <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl max-w-md">
                  <Map className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Sydney Metropolitan Coverage</h3>
                  <p className="text-gray-600">Interactive map would be displayed here showing our service areas across Sydney</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">Eastern Suburbs</h4>
                <p className="text-sm text-gray-600">15-20 min response</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">Inner West</h4>
                <p className="text-sm text-gray-600">15-20 min response</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">North Shore</h4>
                <p className="text-sm text-gray-600">20-30 min response</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">Northern Beaches</h4>
                <p className="text-sm text-gray-600">25-35 min response</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">Western Sydney</h4>
                <p className="text-sm text-gray-600">25-35 min response</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">South Sydney</h4>
                <p className="text-sm text-gray-600">20-30 min response</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">CBD & Surrounds</h4>
                <p className="text-sm text-gray-600">10-15 min response</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <h4 className="font-bold text-blue-800 mb-2">Sutherland Shire</h4>
                <p className="text-sm text-gray-600">30-40 min response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted By Thousands
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Across Sydney</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine experience, technology and a customer-first approach to deliver service you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully compliant with NSW regulations. Your vehicle is in safe hands.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <Clock className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Average 15–30 minute arrival times in most Sydney suburbs.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <Wrench className="h-6 w-6 text-indigo-600 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Modern Equipment</h3>
              <p className="text-gray-600">We invest in the latest key programming and diagnostic tools.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <Star className="h-6 w-6 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">4.9/5 Rating</h3>
              <p className="text-gray-600">Thousands of happy customers and counting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Certificate className="h-4 w-4 mr-2" />
              Our Credentials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Certifications &
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"> Affiliations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We maintain the highest standards through professional certifications and industry affiliations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Licensed Security Professionals</h4>
                    <p className="text-gray-600">All our locksmiths are fully licensed security professionals in NSW.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Certified Automotive Specialists</h4>
                    <p className="text-gray-600">Advanced training in modern vehicle security systems and key technologies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Emergency Response Certification</h4>
                    <p className="text-gray-600">Specialized training in rapid, non-destructive emergency entry techniques.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Industry Affiliations</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Master Locksmiths Association of Australia</h4>
                    <p className="text-gray-600">Active members committed to industry best practices and standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Automotive Locksmiths of Australia</h4>
                    <p className="text-gray-600">Specialized network of automotive security professionals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">NSW Security Industry Association</h4>
                    <p className="text-gray-600">Maintaining the highest security standards and practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 w-40 h-24 flex items-center justify-center">
              <div className="text-center text-gray-400">Association Logo 1</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 w-40 h-24 flex items-center justify-center">
              <div className="text-center text-gray-400">Association Logo 2</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 w-40 h-24 flex items-center justify-center">
              <div className="text-center text-gray-400">Association Logo 3</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 w-40 h-24 flex items-center justify-center">
              <div className="text-center text-gray-400">Association Logo 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Training Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Safety & Training
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Continuous Training.
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Zero Compromise Safety.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technicians train quarterly on new vehicle systems, safe entry and best-practice diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Quarterly Training</h3>
              <p className="text-gray-300">Hands-on workshops for the latest key types, immobilisers and ECU programming.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Safety Protocols</h3>
              <p className="text-gray-300">Site safety, non-destructive techniques, and vehicle protection procedures.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p className="text-gray-300">Multi-point checks before completion and documented workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <HelpCircle className="h-5 w-5 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Common Questions
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to the most common questions about our automotive locksmith services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Are your locksmiths licensed and insured?</h3>
                <p className="text-gray-300">
                  Yes, all our locksmiths are fully licensed security professionals in NSW and carry comprehensive insurance coverage. We adhere to all industry regulations and standards.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">How quickly can you respond to an emergency lockout?</h3>
                <p className="text-gray-300">
                  Our average response time is 15-30 minutes depending on your location in Sydney. We prioritize emergency lockout situations and dispatch the nearest available technician immediately.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Can you make keys for all car makes and models?</h3>
                <p className="text-gray-300">
                  Yes, we can create keys for virtually all vehicle makes and models, including modern cars with transponder keys, proximity keys, and smart keys. Our technicians are equipped with advanced programming technology.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">How much does it cost to replace a lost car key?</h3>
                <p className="text-gray-300">
                  The cost varies depending on your vehicle make, model, and key type. However, our prices are typically 40-60% lower than dealership prices. We provide upfront quotes before beginning any work.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
                Have more questions? Contact us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Brands & Models
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              We Work With
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> All Major Brands</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From popular models to prestige vehicles, our tools and experience cover a wide range.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Toyota","Honda","Mazda","Hyundai","Kia","Nissan","Ford","Holden","BMW","Mercedes","Audi","Volkswagen"].map((brand) => (
              <div key={brand} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 text-center border border-gray-100 text-slate-700 font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Phone className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Contact
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're available 24/7 to assist with all your automotive locksmith needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phone</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for emergency service</p>
              <a href="tel:+61280000000" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                (02) 8000 0000
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-4">Send us a message anytime</p>
              <a href="mailto:info@carlocksmiths.com.au" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                info@carlocksmiths.com.au
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Location</h3>
              <p className="text-gray-600 mb-4">Mobile service covering all Sydney areas</p>
              <div className="text-xl font-bold text-blue-600">
                Sydney Metropolitan Area
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Automotive Locksmith Services?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team of expert locksmiths is ready to assist you with any car key or lock emergency across Sydney.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+61280000000"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-lg"
              >
                <Clock className="h-5 w-5 mr-2" />
                Call 24/7 Emergency
              </a>
              <a
                href="/contact"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Media Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              In The Media
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Featured &
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Recognised</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality and community has been highlighted by local media and partners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 text-center border border-gray-100 text-gray-400">
                Media Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
