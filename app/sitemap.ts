// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aswebmatrix.com'
  const currentDate = new Date()
  
  // All Services
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

  // Indian Cities
  const indianCities = [
    'delhi', 'mumbai', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 
    'pune', 'ahmedabad', 'jaipur', 'noida', 'gurugram', 'faridabad',
    'lucknow', 'chandigarh', 'bhopal', 'indore', 'nagpur', 'patna'
  ]

  // International Locations
  const internationalLocations = [
    // USA
    'usa/new-york', 'usa/los-angeles', 'usa/chicago', 'usa/houston', 
    'usa/phoenix', 'usa/philadelphia', 'usa/san-antonio', 'usa/san-diego',
    'usa/dallas', 'usa/san-jose', 'usa/austin', 'usa/jacksonville',
    'usa/fort-worth', 'usa/columbus', 'usa/charlotte', 'usa/san-francisco',
    'usa/indianapolis', 'usa/seattle', 'usa/denver', 'usa/washington-dc',
    
    // UK
    'uk/london', 'uk/manchester', 'uk/birmingham', 'uk/leeds', 
    'uk/glasgow', 'uk/sheffield', 'uk/bradford', 'uk/liverpool',
    'uk/edinburgh', 'uk/bristol', 'uk/cardiff', 'uk/belfast',
    
    // Canada
    'canada/toronto', 'canada/vancouver', 'canada/montreal', 'canada/calgary',
    'canada/edmonton', 'canada/ottawa', 'canada/winnipeg', 'canada/quebec-city',
    'canada/hamilton', 'canada/kitchener', 'canada/london', 'canada/halifax',
    
    // Australia
    'australia/sydney', 'australia/melbourne', 'australia/brisbane', 
    'australia/perth', 'australia/adelaide', 'australia/gold-coast',
    'australia/canberra', 'australia/newcastle', 'australia/wollongong',
    'australia/hobart', 'australia/darwin',
    
    // UAE
    'uae/dubai', 'uae/abu-dhabi', 'uae/sharjah', 'uae/ajman',
    'uae/ras-al-khaimah', 'uae/fujairah', 'uae/umm-al-quwain',
    
    // Other Countries
    'singapore',
    'malaysia/kuala-lumpur',
    'new-zealand/auckland',
    'germany/berlin',
    'france/paris',
    'italy/rome',
    'spain/madrid',
    'netherlands/amsterdam'
  ]

  // FIX: Explicitly type the array
  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Main Pages
  const mainPages = [
    { url: '', priority: 1.0, freq: 'daily' },
    { url: '/about', priority: 0.8, freq: 'monthly' },
    { url: '/contact', priority: 0.8, freq: 'monthly' },
    { url: '/portfolio', priority: 0.9, freq: 'weekly' },
    { url: '/testimonials', priority: 0.7, freq: 'monthly' },
    { url: '/blog', priority: 0.9, freq: 'daily' },
    { url: '/careers', priority: 0.6, freq: 'weekly' },
    { url: '/pricing', priority: 0.8, freq: 'weekly' },
  ]

  mainPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    })
  })

  // 2. Service Pages (Main Services)
  services.forEach((service) => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    })
  })

  // 3. Indian Cities - All Services Combination
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

  // 4. International Locations - SEO Services (Primary Service)
  internationalLocations.forEach((location) => {
    sitemapEntries.push({
      url: `${baseUrl}/international/${location}/seo-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    })
    
    // Also add website development for major locations
    if (location.includes('new-york') || location.includes('london') || 
        location.includes('toronto') || location.includes('sydney') || 
        location.includes('dubai')) {
      sitemapEntries.push({
        url: `${baseUrl}/international/${location}/website-development`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  })

  // 5. Portfolio/Work Pages
  const portfolioItems = [
    'ecommerce-website-development',
    'wordpress-business-website',
    'mern-stack-application',
    'mobile-app-portfolio',
    'seo-case-studies'
  ]

  portfolioItems.forEach((item) => {
    sitemapEntries.push({
      url: `${baseUrl}/portfolio/${item}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return sitemapEntries
}