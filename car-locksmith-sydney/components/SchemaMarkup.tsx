export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Car Locksmith Sydney",
    description:
      "Professional 24/7 car locksmith services in Sydney. Emergency lockout, key replacement, ignition repair.",
    url: "https://carlocksmithsydney.com.au",
    telephone: "+61-2-8000-0000",
    email: "goldenmotors128@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sydney CBD",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      postalCode: "2000",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.8688,
      longitude: 151.2093,
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Sydney",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -33.8688,
        longitude: 151.2093,
      },
      geoRadius: "50000",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "ABN",
      value: "31317969962",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
}
