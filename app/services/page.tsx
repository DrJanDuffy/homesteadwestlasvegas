import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Services | Dr. Jan Duffy | Las Vegas Real Estate Agent',
  description: 'Comprehensive real estate services by Dr. Jan Duffy (License S.0197614) in Las Vegas. Buying, selling, investment consulting, and property management.',
  keywords: 'real estate services Las Vegas, Dr. Jan Duffy services, buying homes Las Vegas, selling homes Las Vegas, real estate investment',
  openGraph: {
    title: 'Real Estate Services | Dr. Jan Duffy',
    description: 'Comprehensive real estate services by Dr. Jan Duffy in Las Vegas.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/services',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Real Estate Services',
    description: 'Comprehensive real estate services including buying, selling, investment consulting, and property management',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022221988',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      licenseNumber: 'S.0197614'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
    },
    serviceType: ['Real Estate Sales', 'Property Management', 'Real Estate Investment Consulting'],
    offers: {
      '@type': 'Offer',
      description: 'Professional real estate services',
      priceCurrency: 'USD'
    }
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
            <h1 className="text-4xl font-bold mb-4">Real Estate Services</h1>
            <p className="text-xl">Comprehensive real estate solutions by Dr. Jan Duffy</p>
          </div>
        </header>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy provides comprehensive real estate services throughout Las Vegas, 
                helping clients achieve their property goals with expertise, integrity, and 
                personalized attention.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Buying Homes</h3>
                <p className="text-gray-600 mb-6">
                  Expert guidance through the home buying process, from first-time buyers to luxury properties.
                </p>
                <a
                  href="/services/buying"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Selling Homes</h3>
                <p className="text-gray-600 mb-6">
                  Maximize your home's value with professional marketing and negotiation expertise.
                </p>
                <a
                  href="/services/selling"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Investment Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Strategic real estate investment advice to build wealth through smart property decisions.
                </p>
                <a
                  href="/services/investment"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Property Management</h3>
                <p className="text-gray-600 mb-6">
                  Professional property management services for rental properties and investment portfolios.
                </p>
                <a
                  href="/services/property-management"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan Duffy */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dr. Jan Duffy?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep knowledge of the Las Vegas real estate market, including Northwest Las Vegas 
                  and surrounding communities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
                <p className="text-gray-600">
                  Every client receives individualized attention and customized strategies 
                  tailored to their specific real estate goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Market Knowledge</h3>
                <p className="text-gray-600">
                  Up-to-date market analysis and trends to help you make informed decisions 
                  about your real estate investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">
                  Initial meeting to understand your goals and requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-gray-600">
                  Develop a customized plan based on your specific needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Execution</h3>
                <p className="text-gray-600">
                  Implement the plan with professional guidance and support
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Follow-up</h3>
                <p className="text-gray-600">
                  Ongoing support and relationship building for future needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact Dr. Jan Duffy today to discuss your real estate needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/appointment"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homes in Las Vegas
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
            </p>
            
            <div className="max-w-7xl mx-auto">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_HIGH" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="400000" 
                price-max="700000"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
