import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Jan Duffy - Las Vegas Real Estate Expert | Homestead West',
  description: 'Expert Las Vegas real estate agent Dr. Jan Duffy (License S.0197614) helps you buy, sell, and invest in Las Vegas properties. Professional service with local market expertise.',
  keywords: 'Las Vegas real estate, Dr. Jan Duffy, real estate agent, Las Vegas homes, property sales, real estate investment, Homestead West',
  openGraph: {
    title: 'Dr. Jan Duffy - Las Vegas Real Estate Expert',
    description: 'Expert Las Vegas real estate agent Dr. Jan Duffy helps you buy, sell, and invest in Las Vegas properties.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Homestead West | Homes by Dr Jan Duffy',
    description: '$910K+ ranch-style homes on pool-sized lots in Northwest Las Vegas',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5592 N Dapple Gray Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89149',
      addressCountry: 'US'
    },
    telephone: '+17022221988',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    url: 'https://homesteadwestlasvegas.com',
    agent: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022221988',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US'
      },
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
        '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
      }
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '910990',
      highPrice: '940990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Dr. Jan Duffy</h1>
            <p className="text-2xl mb-4">Las Vegas Real Estate Expert</p>
            <p className="text-lg mb-8 opacity-90">License S.0197614 | Homestead West | Homes by Dr Jan Duffy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Dr. Duffy
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

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real Estate Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
                  href="/services"
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
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Property Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ranch Home - Northwest Las Vegas</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$910,990</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">3 bed</span>
                    <span className="mr-4">2 bath</span>
                    <span>2,400 sq ft</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Beautiful ranch-style home on pool-sized lot in Northwest Las Vegas.
                  </p>
                  <a
                    href="/properties"
                    className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Properties
                  </a>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Property Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ranch Home - Premium Lot</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$925,990</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">4 bed</span>
                    <span className="mr-4">3 bath</span>
                    <span>2,800 sq ft</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Spacious ranch home with premium pool-sized lot and updated features.
                  </p>
                  <a
                    href="/properties"
                    className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Properties
                  </a>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Property Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Ranch Home - Executive Lot</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$940,990</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-4">4 bed</span>
                    <span className="mr-4">3 bath</span>
                    <span>3,200 sq ft</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Executive ranch home with oversized pool lot and luxury finishes.
                  </p>
                  <a
                    href="/properties"
                    className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Properties
          </a>
        </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Dr. Jan Duffy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Dr. Jan Duffy</h2>
                <p className="text-lg mb-6">
                  Dr. Jan Duffy brings extensive expertise and dedication to every real estate transaction. 
                  With a deep understanding of the Las Vegas market and a commitment to exceptional service, 
                  Dr. Duffy helps clients achieve their real estate goals with confidence and professionalism.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Licensed Real Estate Agent</h3>
                      <p>Nevada License S.0197614</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Las Vegas Market Specialist</h3>
                      <p>Deep knowledge of Northwest Las Vegas and surrounding areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Investment Expertise</h3>
                      <p>Specialized knowledge in real estate investment strategies</p>
                    </div>
                  </div>
                </div>
                <a
                  href="/about"
                  className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More About Dr. Duffy
                </a>
              </div>
              
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl">👩‍💼</span>
                  </div>
                  <p className="text-gray-600">Professional Headshot</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-lg">(702) 222-1988</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-lg">DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-lg">5592 N Dapple Gray Rd<br />Las Vegas, NV 89149</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Dr. Jan Duffy?</h2>
            <p className="text-xl mb-8">
              Contact Dr. Jan Duffy today for expert real estate guidance in Las Vegas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Dr. Duffy
        </a>
        <a
                href="/appointment"
                className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
    </div>
    </>
  );
}