import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blocklens-flame.vercel.app',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://blocklens-flame.vercel.app/home',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://blocklens-flame.vercel.app/store',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    // Dynamic routes example (you would typically fetch these from a database)
    {
      url: 'https://blocklens-flame.vercel.app/print',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: 'https://blocklens-flame.vercel.app/book',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://blocklens-flame.vercel.app/conference',
        lastModified: new Date('2025-01-09'),
        changeFrequency: 'weekly',
        priority: 0.6,
    },
    {
      url: 'https://blocklens-flame.vercel.app/corporation',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.7,
  },
   {
    url: 'https://blocklens-flame.vercel.app/utxo',
    lastModified: new Date('2025-01-09'),
    changeFrequency: 'weekly',
    priority: 0.8,
    },
    {
      url: 'https://blocklens-flame.vercel.app/conference',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://blocklens-flame.vercel.app/articles',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
      priority: 0.10,
     },
     {
      url: 'https://blocklens-flame.vercel.app/take',
      lastModified: new Date('2025-01-09'),
      changeFrequency: 'weekly',
       priority: 0.11,
      },
      {
        url: 'https://blocklens-flame.vercel.app/authors',
        lastModified: new Date('2025-01-09'),
        changeFrequency: 'weekly',
        priority: 0.12,
       },
       {
        url: 'https://blocklens-flame.vercel.app/guides',
        lastModified: new Date('2025-01-09'),
        changeFrequency: 'weekly',
        priority: 0.13,
       },
       {
        url: 'https://blocklens-flame.vercel.app/pro',
        lastModified: new Date('2025-01-09'),
        changeFrequency: 'weekly',
        priority: 0.14,
       },


  ]
}