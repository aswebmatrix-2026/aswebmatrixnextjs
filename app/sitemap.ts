// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aswebmatrix.com'
  const currentDate = new Date()
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Directly push entries with proper string literals
  sitemapEntries.push(
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // About
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contact
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    }
  )

  // Add all services
  const services = [
    'seo-services',
    'website-development',
    'wordpress-development',
    'mern-stack-development',
    'digital-marketing',
    'ecommerce-development',
    'mobile-app-development',
    'ppc-services',
    'social-media-marketing',
    'content-writing'
  ]

  services.forEach((service) => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    })
  })

  // Add Indian cities
  const indianCities = [
    'delhi', 'mumbai', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 
    'pune', 'ahmedabad', 'jaipur', 'noida', 'gurugram', 'faridabad'
  ]

  indianCities.forEach((city) => {
    services.forEach((service) => {
      sitemapEntries.push({
        url: `${baseUrl}/${city}/${service}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
      })
    })
  })

  return sitemapEntries
}