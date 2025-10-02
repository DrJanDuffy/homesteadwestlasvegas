import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homesteadwestlasvegas.com'
  const now = new Date()

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // VIP Partnership - High Priority (Key Differentiator)
    {
      url: `${baseUrl}/century-communities-vip`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    
    // Floor Plans - High Priority (Core Product)
    {
      url: `${baseUrl}/floor-plans`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/floor-plans/3336`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/floor-plans/3704`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    
    // Community & Location - High Priority
    {
      url: `${baseUrl}/community`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/community-map`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/virtual-tour`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // About & Credentials - High Priority
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Buyer Resources - High Priority
    {
      url: `${baseUrl}/buyers-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/homebuying-process`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Content & SEO Pages
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    
    // Services
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/buying`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/selling`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/investment`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Contact & Location
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/location/las-vegas-office`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
