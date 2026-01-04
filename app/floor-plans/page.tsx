import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';

export const metadata: Metadata = {
  title: 'Available Homes | Homestead West Las Vegas | MLS Listings',
  description: 'Browse current available homes in Las Vegas MLS. Updated daily with the latest properties from Homestead West and surrounding areas. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'available homes Las Vegas',
    'Las Vegas MLS listings',
    'Homestead West homes',
    'Las Vegas real estate listings',
    'new construction homes Las Vegas',
    'Las Vegas property search',
    'current listings Las Vegas'
  ],
  openGraph: {
    title: 'Available Homes | Homestead West Las Vegas',
    description: 'Browse current available homes in Las Vegas MLS. Updated daily with the latest properties.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/floor-plans',
  },
};

export default function FloorPlansPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    telephone: '+17022996607',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5592 N Dapple Gray Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89149',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas'
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'MLS Listings',
      'New Construction Homes',
      'Homestead West'
    ],
    sameAs: [
      'https://www.homesteadwestlasvegas.com',
      'https://www.homesteadwestlasvegas.com/about',
      'https://www.homesteadwestlasvegas.com/vip-buyer-program',
      'https://www.homesteadwestlasvegas.com/contact',
      'https://www.homesteadwestlasvegas.com/floor-plans/3336',
      'https://www.homesteadwestlasvegas.com/floor-plans/3704'
    ]
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Floor Plans', url: 'https://www.homesteadwestlasvegas.com/floor-plans' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Available Homestead West Homes</h1>
            <p className="text-xl text-blue-100">Homestead West Las Vegas MLS Listings - Updated Daily</p>
          </div>
        </header>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                Available Homestead West Homes and Las Vegas MLS Listings
              </h2>
              <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
                Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
              </p>
              
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* About Homestead West Listings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Understanding Homestead West MLS Listings</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6">
                  The Homestead West MLS listings you see above are updated daily from the Las Vegas Multiple Listing Service, 
                  ensuring you have access to the most current available Homestead West homes. These Homestead West listings 
                  include both new construction homes and resale properties within the Homestead West community, giving you a 
                  comprehensive view of all available options in this premier Northwest Las Vegas neighborhood.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Homestead West MLS listings provide detailed information about each property, including square footage, lot size, 
                  number of bedrooms and bathrooms, and key features. As your Homestead West real estate expert, Dr. Jan Duffy 
                  can help you interpret these Homestead West listings, schedule viewings, and provide additional context about 
                  each Homestead West property that may not be immediately apparent from the listing details.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West New Construction vs. Resale</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Homestead West MLS listings include both brand new construction homes and resale properties. New construction 
                  Homestead West homes offer the advantage of modern design, energy-efficient features, and the ability to customize 
                  finishes and selections. Resale Homestead West properties may offer immediate availability and potentially 
                  established landscaping, but may require updates or renovations. Dr. Jan Duffy can help you evaluate which 
                  Homestead West option best fits your timeline, budget, and preferences.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  When considering Homestead West new construction, your consultation with Dr. Jan Duffy will cover the construction 
                  timeline, available upgrades, and lot selection process. For Homestead West resale properties, Dr. Jan Duffy 
                  provides market analysis, comparable sales data, and negotiation strategies to help you secure the best possible 
                  price for your Homestead West home purchase.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Price Range and Market Trends</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Homestead West homes typically range from $850,000 to $990,000, offering luxury living at various price points. 
                  The Homestead West MLS listings above are filtered to show properties within this range, ensuring you see 
                  relevant Homestead West options that match your budget. Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, often provides access 
                  to Homestead West pricing incentives and special offers that may not be reflected in standard MLS listings.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Understanding Homestead West market trends is crucial for making informed purchasing decisions. Dr. Jan Duffy 
                  tracks Homestead West sales data, price appreciation, and inventory levels to provide you with current market 
                  insights. This Homestead West market knowledge helps you understand whether it's a good time to buy, what to expect 
                  in terms of appreciation, and how Homestead West compares to other Northwest Las Vegas communities.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Property Features and Amenities</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Homestead West homes feature single-story ranch designs on pool-sized lots, with optional detached casitas and 
                  multi-generational layouts. The Homestead West community offers luxury living with attention to detail in every 
                  aspect of design and construction. When viewing Homestead West MLS listings, consider not just the home itself, 
                  but also the lot characteristics, community amenities, and proximity to key features like schools, shopping, 
                  and transportation.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Dr. Jan Duffy's Homestead West expertise includes detailed knowledge of floor plans, lot premiums, and community 
                  features that may influence your decision. During your Homestead West consultation, you'll learn about the 
                  specific advantages of different Homestead West lots, available upgrades, and community amenities that enhance 
                  your Homestead West living experience. This comprehensive Homestead West knowledge helps you make the best 
                  choice for your lifestyle and investment goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Find Your Homestead West Dream Home?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy for expert guidance on your Homestead West Las Vegas home search. Schedule a consultation 
                to learn more about available Homestead West properties, VIP program benefits, and how to navigate the Homestead 
                West homebuying process with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7022996607"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  📞 Call (702) 299-6607
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
                <a
                  href="/appointment"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                >
                  📅 Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More About Homestead West</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/floor-plans/3336" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Plan 3336</h3>
                  <p className="text-gray-700">3,336 sq ft • 4-5 beds • From $910,990</p>
                </a>
                <a href="/floor-plans/3704" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Plan 3704</h3>
                  <p className="text-gray-700">3,704 sq ft • 4 beds • From $940,990</p>
                </a>
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Program</h3>
                  <p className="text-gray-700">Exclusive access and priority treatment</p>
                </a>
                <a href="/community" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Community Guide</h3>
                  <p className="text-gray-700">Learn about Homestead West location</p>
                </a>
                <a href="/homebuying-process" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
                </a>
                <a href="/about" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Meet your Las Vegas real estate expert</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
