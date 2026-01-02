import { Metadata } from 'next';
import SearchWidgetScript from '@/components/SearchWidgetScript';
import RealScoutListings from '@/components/RealScoutListings';

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
        {/* Hero Section - Above the Fold */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Homestead West Las Vegas
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold text-blue-100">
                $910K+ Luxury Ranch Homes on Pool-Sized Lots
              </p>
              <p className="text-xl mb-8 text-blue-50">
                Expert Guidance from Dr. Jan Duffy | VIP Berkshire Hathaway HomeServices Buyer Program
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:7022221988"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  📞 Call: (702) 222-1988
          </a>
          <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg border-2 border-white"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                5592 N Dapple Gray Rd, Las Vegas, NV 89149
              </p>
            </div>
          </div>
        </section>

        {/* About Homestead West - SEO Content Heavy */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                About Homestead West
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Homestead West</strong> offers exceptional <strong>new homes for sale in Las Vegas, NV</strong>. This prestigious Northwest Las Vegas community features a luxurious lineup of <strong>single-story ranch-style homes</strong> on <strong>pool-sized lots</strong>, with optional detached casitas and multi-generational layouts.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Located at <strong>5592 N Dapple Gray Rd, Las Vegas, NV 89149</strong>, Homestead West combines luxury and convenience for the ideal home in Clark County. Quick access to <strong>US 95 & CC 215</strong> provides easy connectivity to downtown Las Vegas, Red Rock Canyon, and Mount Charleston.
                </p>
              </div>
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
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* MLS Search Widget Section */}
        <section id="search-homes" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Search Available Homes
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Explore new construction listings in Northwest Las Vegas
              </p>
              
              <div className="flex justify-center">
                {/* ShowingNew Widget */}
                <div id="widget-box" className="w-full max-w-2xl">
                  <form 
                    action="https://www.showingnew.com/skyecanyon/home/redirecttoresultspage" 
                    className="pro-search-box" 
                    encType="multipart/form-data" 
                    id="pro-search-box-widget" 
                    method="post" 
                    name="pro-search-box" 
                    target="_blank"
                  >
                    <div id="home-search-form" className="clearfix home-search-form">
                      <h2 id="titleText">Search New Construction Home Listings</h2>
                      <fieldset id="widget-home-search-location" style={{border:0,padding:0}}>
                        <p id="HomesTypeField" className="flex m-0 homes-type-field">
                          <input 
                            className="homes-type-field--input" 
                            id="AllNew" 
                            name="QuickMoveIn" 
                            type="radio" 
                            value="0" 
                            defaultChecked
                          /> 
                          <label className="homes-type-field--label" htmlFor="AllNew">All New Homes</label> 
                          <input 
                            className="homes-type-field--input" 
                            id="QMIOnly" 
                            name="QuickMoveIn" 
                            type="radio" 
                            value="1"
                          /> 
                          <label className="homes-type-field--label" htmlFor="QMIOnly">Inventory Homes</label> 
                          <a 
                            className="homes-type-field--link" 
                            href="https://www.showingnew.com/skyecanyon/new-homes-today" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          > 
                            <b>See What&apos;s New Today</b> 
                            <svg 
                              className="homes-type-field--link--svg" 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 492.004 492.004" 
                              fill="#f58220"
                            >
                              <path d="M484.14 226.886L306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04s2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836a26.74 26.74 0 0 0 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"></path>
                            </svg>
                          </a>
                        </p>
                        <p className="flex ac search-field" style={{display: 'flex', alignItems: 'center'}}>
                          <label htmlFor="SearchTextWidget"></label> 
                          <input 
                            autoComplete="off" 
                            id="SearchTextWidget" 
                            aria-label="SearchTextWidget" 
                            maxLength={100} 
                            name="SearchText" 
                            placeholder="Enter City, Zip Code, School District or Community Name" 
                            type="text" 
                            defaultValue="Homestead West, Las Vegas, NV" 
                            style={{fontSize:'16px', flex: 1, padding: '14px 16px', borderRadius: '4px 0 0 4px', border: '1px solid #ccdbe4'}}
                          /> 
                          <input 
                            type="submit" 
                            className="btn HomeSearchBtn" 
                            id="HomeSearchBtnWidget" 
                            value="Find Homes"
                            style={{backgroundColor: '#f58220', color: 'white', border: 'none', padding: '14px 20px', borderRadius: '0 4px 4px 0', cursor: 'pointer', fontWeight: 600}}
                          />
                        </p>
                      </fieldset>
                      <p 
                        id="WidgetSearchValidationError" 
                        className="field-validation-error SearchValidationError text-red-600 font-semibold mt-2" 
                        style={{display:'none'}}
                      >
                        <strong>Oops!</strong> Please enter a valid location.
                      </p>
                      <div id="home-search-options" className="flex flex-wrap gap-2 mt-4" style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px'}}>
                        <select 
                          aria-label="PriceLow" 
                          id="PriceLow" 
                          name="PriceLow"
                          style={{flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333'}}
                        >
                          <option value="">Min Price</option>
                          <option value="500000">$500,000</option>
                          <option value="600000">$600,000</option>
                          <option value="700000">$700,000</option>
                          <option value="800000">$800,000</option>
                          <option value="900000">$900,000</option>
                          <option value="1000000">$1,000,000</option>
                          <option value="1100000">$1,100,000</option>
                          <option value="1200000">$1,200,000</option>
                        </select> 
                        <select 
                          aria-label="PriceHigh" 
                          id="PriceHigh" 
                          name="PriceHigh"
                          style={{flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333'}}
                        >
                          <option value="">Max Price</option>
                          <option value="900000">$900,000</option>
                          <option value="1000000">$1,000,000</option>
                          <option value="1100000">$1,100,000</option>
                          <option value="1200000">$1,200,000</option>
                          <option value="1500000">$1,500,000</option>
                          <option value="2000000">$2,000,000</option>
                        </select> 
                        <select 
                          aria-label="BedRooms" 
                          id="BedRooms" 
                          name="BedRooms"
                          style={{flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333'}}
                        >
                          <option value="-1">Beds</option>
                          <option value="3">3+</option>
                          <option value="4">4+</option>
                          <option value="5">5+</option>
                        </select> 
                        <select 
                          aria-label="Bathrooms" 
                          id="Bathrooms" 
                          name="Bathrooms"
                          style={{flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333'}}
                        >
                          <option value="-1">Baths</option>
                          <option value="3">3+</option>
                          <option value="4">4+</option>
                        </select> 
                        <select 
                          aria-label="SqFtLow" 
                          id="SqFtLow" 
                          name="SqFtLow"
                          style={{flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333'}}
                        >
                          <option value="0">Square Feet</option>
                          <option value="3000">3000+</option>
                          <option value="3500">3500+</option>
                          <option value="4000">4000+</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Lifestyle - Local SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Northwest Las Vegas Location
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">9 Miles to Red Rock Canyon</h3>
                <p className="text-gray-600">
                  World-class hiking, climbing, and scenic drives at your doorstep
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌆</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">18 Miles to Downtown Las Vegas</h3>
                <p className="text-gray-600">
                  Easy access to world-class entertainment, dining, and culture
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⛰️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">23 Miles to Mount Charleston</h3>
                <p className="text-gray-600">
                  Alpine escape with skiing, hiking, and 20°F cooler temperatures
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Nearby Amenities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">📍 Parks & Recreation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lone Mountain Park</li>
                    <li>• Gilcrease Orchard</li>
                    <li>• Centennial Hills Park</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">🛒 Shopping & Dining</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Target, Walmart, Trader Joe's</li>
                    <li>• Rachel's Kitchen, Egg Works</li>
                    <li>• My Garage Restaurant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

            {/* VIP Berkshire Hathaway HomeServices Buyer Program */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-lg mb-6">
                    ⭐ VIP BUILDER PARTNERSHIP ⭐
                  </div>
                  <h2 className="text-4xl font-bold mb-6">
                    VIP Berkshire Hathaway HomeServices Buyer Program
                  </h2>
                  <p className="text-xl mb-8 text-blue-100">
                    Exclusive Access to Las Vegas New Construction Homes at Homestead West
                  </p>
                  <p className="text-lg mb-8 text-blue-200">
                    This is a VIP Berkshire Hathaway HomeServices Buyer Program for <strong>Homestead West</strong>—exclusive access to Las Vegas new construction homes. Dr. Jan Duffy delivers insider access, priority lot selection, and expert negotiation backed by her elite builder relationships—giving YOU the ultimate advantage.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">🚀</div>
                      <h3 className="text-lg font-bold mb-2">Early Phase Access</h3>
                      <p className="text-sm text-blue-100">First access to new phases before public release</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">⚡</div>
                      <h3 className="text-lg font-bold mb-2">Priority Lot Selection</h3>
                      <p className="text-sm text-blue-100">VIP status throughout the entire process</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">🎯</div>
                      <h3 className="text-lg font-bold mb-2">Expert Negotiation</h3>
                      <p className="text-sm text-blue-100">Elite builder relationship-backed negotiation power</p>
                    </div>
                  </div>
                  <a
                    href="/vip-buyer-program"
                    className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                  >
                    Learn More About VIP Buyer Program
                  </a>
                </div>
              </div>
            </section>

            {/* Why Work With Dr. Jan - Trust Building */}
            <section className="py-16 bg-blue-50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                    Why Work With Dr. Jan Duffy?
                  </h2>
                  <p className="text-xl text-center text-gray-700 mb-12">
                    Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
                  </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Builder Relationship</h3>
                  <p className="text-gray-700">
                    I work directly with the builder to give you insider access while representing YOUR interests, not theirs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Market Expertise</h3>
                  <p className="text-gray-700">
                    I'll show you comparable communities and help you understand true market value—not just what the builder tells you.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation Power</h3>
                  <p className="text-gray-700">
                    Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Las Vegas Specialist</h3>
                  <p className="text-gray-700">
                    Nevada License S.0197614. Deep knowledge of Northwest Las Vegas and the entire metro area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strong CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Homestead West?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Call or email Dr. Jan Duffy today for a private tour and expert guidance on your Homestead West home purchase
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-200 mb-2">CALL NOW</p>
                <a 
                  href="tel:7022221988"
                  className="text-3xl font-bold hover:text-blue-200 transition-colors"
                >
                  (702) 222-1988
                </a>
              </div>
              <div className="hidden sm:block w-px h-16 bg-blue-400"></div>
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-200 mb-2">EMAIL</p>
                <a 
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="text-xl font-semibold hover:text-blue-200 transition-colors break-all"
                >
                  DrJanSells@HomesteadWestLasVegas.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Local SEO */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Homestead West Las Vegas</h3>
                <p className="mb-2">5592 N Dapple Gray Rd</p>
                <p className="mb-2">Las Vegas, NV 89149</p>
                <p>(702) 222-1988</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Dr. Jan Duffy</h3>
                <p className="mb-2">Las Vegas Real Estate Expert</p>
                <p className="mb-2">Nevada License: S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p className="mb-2">
                © 2025 Homestead West | Homes by Dr Jan Duffy. All rights reserved.
              </p>
              <p className="text-gray-400">
                Independent real estate resource. Not affiliated with or endorsed by the builder. 
                Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
              </p>
            </div>
          </div>
      </footer>
    </div>
    <SearchWidgetScript />
    </>
  );
}
