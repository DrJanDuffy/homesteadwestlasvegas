import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Blog | Dr. Jan Duffy | Market Updates & Tips',
  description: 'Stay informed with Las Vegas real estate market updates, home buying tips, and investment advice from Dr. Jan Duffy (License S.0197614).',
  keywords: 'Las Vegas real estate blog, market updates, home buying tips, real estate investment advice, Dr. Jan Duffy blog',
  openGraph: {
    title: 'Las Vegas Real Estate Blog | Dr. Jan Duffy',
    description: 'Stay informed with Las Vegas real estate market updates and expert advice.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/blog',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Las Vegas Real Estate Blog',
    description: 'Expert insights and market updates from Dr. Jan Duffy, Las Vegas real estate agent',
    url: 'https://homesteadwestlasvegas.com/blog',
    author: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022221988',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      licenseNumber: 'S.0197614'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Homestead West | Homes by Dr Jan Duffy'
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'Las Vegas Market Update: October 2025',
        description: 'Current market trends and insights for Las Vegas real estate',
        url: 'https://homesteadwestlasvegas.com/blog/las-vegas-market-update-october-2025',
        datePublished: '2025-10-01',
        author: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy'
        }
      },
      {
        '@type': 'BlogPosting',
        headline: 'First-Time Home Buyer Guide: Las Vegas',
        description: 'Complete guide for first-time home buyers in Las Vegas',
        url: 'https://homesteadwestlasvegas.com/blog/first-time-home-buyer-guide-las-vegas',
        datePublished: '2025-09-15',
        author: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Las Vegas Real Estate Blog</h1>
            <p className="text-xl">Expert insights and market updates from Dr. Jan Duffy</p>
          </div>
        </header>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-gray-500 text-lg">Featured Blog Image</span>
                  </div>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Featured Post</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4">Las Vegas Market Update: October 2025</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Get the latest insights on Las Vegas real estate market trends, pricing, 
                    and what to expect in the coming months. Dr. Jan Duffy shares expert 
                    analysis and predictions for buyers and sellers.
                  </p>
                  <div className="flex items-center text-gray-500 mb-6">
                    <span className="mr-4">By Dr. Jan Duffy</span>
                    <span className="mr-4">•</span>
                    <span>October 1, 2025</span>
                  </div>
                  <a
                    href="/blog/las-vegas-market-update-october-2025"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Market Updates</h3>
                <p className="text-gray-600 text-sm">Latest Las Vegas real estate trends and data</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Buying Tips</h3>
                <p className="text-gray-600 text-sm">Expert advice for home buyers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Investment Advice</h3>
                <p className="text-gray-600 text-sm">Real estate investment strategies</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏘️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Neighborhood Guides</h3>
                <p className="text-gray-600 text-sm">Las Vegas area insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <span className="text-blue-600 font-semibold text-sm">Market Update</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Las Vegas Market Update: October 2025</h3>
                  <p className="text-gray-600 mb-4">
                    Current market trends and insights for Las Vegas real estate buyers and sellers...
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>Dr. Jan Duffy</span>
                    <span className="mx-2">•</span>
                    <span>Oct 1, 2025</span>
                  </div>
                  <a
                    href="/blog/las-vegas-market-update-october-2025"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              {/* Post 2 */}
              <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <span className="text-green-600 font-semibold text-sm">Buying Tips</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">First-Time Home Buyer Guide: Las Vegas</h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide for first-time home buyers in Las Vegas, from pre-approval to closing...
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>Dr. Jan Duffy</span>
                    <span className="mx-2">•</span>
                    <span>Sep 15, 2025</span>
                  </div>
                  <a
                    href="/blog/first-time-home-buyer-guide-las-vegas"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              {/* Post 3 */}
              <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <span className="text-purple-600 font-semibold text-sm">Investment</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Real Estate Investment Strategies for 2025</h3>
                  <p className="text-gray-600 mb-4">
                    Expert advice on building wealth through strategic real estate investments in Las Vegas...
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>Dr. Jan Duffy</span>
                    <span className="mx-2">•</span>
                    <span>Sep 1, 2025</span>
                  </div>
                  <a
                    href="/blog/real-estate-investment-strategies-2025"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              {/* Post 4 */}
              <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <span className="text-orange-600 font-semibold text-sm">Neighborhood</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Northwest Las Vegas: Community Spotlight</h3>
                  <p className="text-gray-600 mb-4">
                    Discover why Northwest Las Vegas is becoming one of the most desirable areas for families...
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>Dr. Jan Duffy</span>
                    <span className="mx-2">•</span>
                    <span>Aug 20, 2025</span>
                  </div>
                  <a
                    href="/blog/northwest-las-vegas-community-spotlight"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              {/* Post 5 */}
              <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <span className="text-blue-600 font-semibold text-sm">Tips</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Home Selling Checklist: Las Vegas</h3>
                  <p className="text-gray-600 mb-4">
                    Essential checklist for selling your home in Las Vegas market for maximum value...
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>Dr. Jan Duffy</span>
                    <span className="mx-2">•</span>
                    <span>Aug 5, 2025</span>
                  </div>
                  <a
                    href="/blog/home-selling-checklist-las-vegas"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More →
                  </a>
                </div>
              </article>

              {/* Post 6 */}
              <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <span className="text-green-600 font-semibold text-sm">Market</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Las Vegas Luxury Market Trends</h3>
                  <p className="text-gray-600 mb-4">
                    Insights into the luxury real estate market in Las Vegas and what drives high-end sales...
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>Dr. Jan Duffy</span>
                    <span className="mx-2">•</span>
                    <span>Jul 20, 2025</span>
                  </div>
                  <a
                    href="/blog/las-vegas-luxury-market-trends"
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest Las Vegas real estate insights
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-2">
                Get weekly market updates and expert tips delivered to your inbox
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
