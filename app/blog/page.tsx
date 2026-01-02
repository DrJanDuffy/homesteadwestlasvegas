import { Metadata } from 'next';
import Link from 'next/link';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'Blog | Las Vegas Real Estate News & Market Updates | Dr. Jan Duffy',
  description: 'Stay informed with Las Vegas real estate market updates, new construction insights, and builder news from VIP specialist Dr. Jan Duffy.',
  keywords: [
    'Las Vegas real estate blog',
    'Las Vegas market updates',
    'new construction Las Vegas',
    'new construction news',
    'Homestead West updates',
    'Dr. Jan Duffy blog',
    'Las Vegas real estate trends'
  ],
  openGraph: {
    title: 'Blog | Las Vegas Real Estate News & Market Updates',
    description: 'Stay informed with Las Vegas real estate market updates and new construction insights.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/blog',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Dr. Jan Duffy Real Estate Blog',
    description: 'Las Vegas real estate market updates and new construction insights',
    url: 'https://homesteadwestlasvegas.com/blog',
    publisher: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'VIP New Construction Specialist'
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Northwest Las Vegas Market Updates - December 2024',
        url: 'https://homesteadwestlasvegas.com/blog/northwest-las-vegas-market-updates',
        datePublished: '2024-12-01',
        author: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy'
        }
      },
      {
        '@type': 'BlogPosting',
        headline: 'New Construction vs. Resale Homes: Which is Right for You?',
        url: 'https://homesteadwestlasvegas.com/blog/new-construction-vs-resale',
        datePublished: '2024-11-15',
        author: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy'
        }
      },
      {
        '@type': 'BlogPosting',
        headline: 'New Construction Builder Profile: Premier Homebuilder',
        url: 'https://homesteadwestlasvegas.com/blog/century-communities-builder-profile',
        datePublished: '2024-11-01',
        author: {
          '@type': 'Person',
          name: 'Dr. Jan Duffy'
        }
      }
    ]
  };

  const blogPosts = [
    {
      id: 'northwest-las-vegas-market-updates',
      title: 'Northwest Las Vegas Market Updates - December 2024',
      excerpt: 'Latest market trends, pricing insights, and inventory updates for Northwest Las Vegas real estate market.',
      date: 'December 1, 2024',
      category: 'Market Updates',
      readTime: '5 min read',
      image: '/blog/northwest-market-updates.jpg'
    },
    {
      id: 'new-construction-vs-resale',
      title: 'New Construction vs. Resale Homes: Which is Right for You?',
      excerpt: 'Compare the advantages of new construction homes versus resale properties in Las Vegas.',
      date: 'November 15, 2024',
      category: 'Buyer Guide',
      readTime: '7 min read',
      image: '/blog/new-construction-vs-resale.jpg'
    },
    {
      id: 'century-communities-builder-profile',
      title: 'New Construction Builder Profile: Premier Homebuilder',
      excerpt: 'Learn about the builder\'s history, quality standards, and why they\'re a top choice for Las Vegas homebuyers.',
      date: 'November 1, 2024',
      category: 'Builder Profile',
      readTime: '6 min read',
      image: '/blog/century-communities-profile.jpg'
    },
    {
      id: 'homestead-west-floor-plan-guide',
      title: 'Homestead West Floor Plan Guide: Plan 3336 vs Plan 3704',
      excerpt: 'Detailed comparison of Homestead West floor plans to help you choose the perfect ranch home layout.',
      date: 'October 20, 2024',
      category: 'Floor Plans',
      readTime: '8 min read',
      image: '/blog/homestead-west-floor-plans.jpg'
    },
    {
      id: 'first-time-homebuyer-tips',
      title: 'First-Time Homebuyer Tips for Las Vegas New Construction',
      excerpt: 'Essential tips and strategies for first-time homebuyers considering new construction in Las Vegas.',
      date: 'October 5, 2024',
      category: 'Buyer Guide',
      readTime: '6 min read',
      image: '/blog/first-time-buyer-tips.jpg'
    },
    {
      id: 'las-vegas-school-districts',
      title: 'Las Vegas School Districts: What Homebuyers Need to Know',
      excerpt: 'Complete guide to Las Vegas school districts and how they impact your home buying decision.',
      date: 'September 20, 2024',
      category: 'Community',
      readTime: '9 min read',
      image: '/blog/las-vegas-schools.jpg'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                ⭐ VIP NEW CONSTRUCTION INSIGHTS ⭐
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Homestead West Real Estate Blog</h1>
              <p className="text-2xl md:text-3xl mb-4 text-blue-100">Las Vegas Market Updates</p>
              <p className="text-xl text-blue-200">Expert Insights from VIP New Construction Specialist</p>
            </div>
          </div>
        </header>

        {/* VIP Partnership */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Homestead West VIP Market Intelligence</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Dr. Jan Duffy's VIP new construction partnership provides exclusive Homestead West market insights, 
                  Homestead West builder updates, and insider Homestead West knowledge you won't find anywhere else.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Market Updates</h3>
                  <p className="text-gray-700">Latest Homestead West Las Vegas real estate trends and pricing insights</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Builder Insights</h3>
                  <p className="text-gray-700">Exclusive Homestead West new construction updates and announcements</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Expert Tips</h3>
                  <p className="text-gray-700">Professional guidance for Homestead West new construction buyers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Latest Homestead West Posts</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Homestead West Blog Categories</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Homestead West Market Updates</h3>
                  <p className="text-gray-600 text-sm">Homestead West Las Vegas real estate trends and pricing</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Homestead West Buyer Guide</h3>
                  <p className="text-gray-600 text-sm">Tips and strategies for Homestead West homebuyers</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Homestead West Builder Profile</h3>
                  <p className="text-gray-600 text-sm">Homestead West new construction insights and updates</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏘️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Homestead West Community</h3>
                  <p className="text-gray-600 text-sm">Homestead West local amenities and neighborhood info</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Stay Updated with Homestead West VIP Insights</h2>
              <p className="text-xl mb-8 text-blue-100">
                Get exclusive market updates and new construction news delivered to your inbox
              </p>
              
              <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-gray-600 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Work with a Homestead West VIP Specialist?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let Dr. Jan Duffy's VIP new construction partnership guide your real estate journey
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 299-6607
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
              
              <div className="mt-8 text-blue-200">
                <p className="text-lg font-semibold">Dr. Jan Duffy - VIP New Construction Specialist</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homestead West Homes and Las Vegas MLS Listings
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
            </p>
            
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
