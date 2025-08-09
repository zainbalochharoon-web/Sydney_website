import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://carlocksmithsydney.com.au/sitemap.xml",
    host: "carlocksmithsydney.com.au",
  }
}
