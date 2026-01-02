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
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* VIP Badge */}
              <div className="mb-8">
                <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-lg mb-6 animate-bounce">
                  ⭐ VIP Berkshire Hathaway HomeServices Buyer Program ⭐
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Homestead West Las Vegas: Luxury Ranch Homes in Northwest Las Vegas
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold text-blue-100">
                $910K+ Luxury Ranch Homes on Pool-Sized Lots
              </p>
              <p className="text-xl mb-8 text-blue-50">
                Expert Guidance from Dr. Jan Duffy | VIP Berkshire Hathaway HomeServices Buyer Program
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">🏆</span>
                  <span>500+ Families Helped</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">⭐</span>
                  <span>Elite Builder Access</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:7022221988"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📞 Call: (702) 222-1988
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg border-2 border-white transform hover:scale-105"
                >
                  📧 Email Dr. Jan
                </a>
                <a
                  href="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west-in-las-vegas-nv/194163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg border-2 border-white transform hover:scale-105"
                >
                  🏠 View on ShowingNew
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Homestead West - SEO Content Heavy */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Discover Homestead West: Premier New Construction Community in Las Vegas
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Homestead West</strong> offers exceptional <strong>new homes for sale in Las Vegas, NV</strong>. This prestigious Northwest Las Vegas community features a luxurious lineup of <strong>single-story ranch-style homes</strong> on <strong>pool-sized lots</strong>, with optional detached casitas and multi-generational layouts. Homestead West represents the pinnacle of luxury living in Las Vegas, combining sophisticated design with the natural beauty of the Nevada landscape.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Homestead West combines luxury and convenience for the ideal home in Clark County. Quick access to <strong>US 95 & CC 215</strong> provides easy connectivity to downtown Las Vegas, Red Rock Canyon, and Mount Charleston. The Homestead West community is strategically positioned to offer residents the perfect balance between urban convenience and natural serenity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you choose Homestead West, you're selecting more than just a home—you're investing in a lifestyle. The Homestead West development showcases meticulous attention to detail, from the architectural design to the premium finishes throughout each residence. Homestead West homes are built to the highest standards, ensuring that your investment will provide lasting value and enjoyment for years to come.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Homestead West community is designed with modern families in mind, offering spacious floor plans that accommodate various lifestyles. Whether you're looking for a primary residence, a vacation home, or an investment property, Homestead West provides the perfect foundation for your Las Vegas real estate goals. The community's thoughtful planning ensures that every Homestead West homeowner enjoys privacy, security, and access to world-class amenities.
                </p>
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

        {/* MLS Search Widget Section */}
        <section id="search-homes" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Search Homestead West Available Homes and New Construction Listings
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
                          <option value="850000">$850,000</option>
                          <option value="900000">$900,000</option>
                          <option value="950000">$950,000</option>
                          <option value="999000">$999,000</option>
                          <option value="1000000">$1,000,000</option>
                          <option value="1200000">$1,200,000</option>
                        </select> 
                        <select 
                          aria-label="PriceHigh" 
                          id="PriceHigh" 
                          name="PriceHigh"
                          style={{flex: 1, minWidth: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccdbe4', background: '#fff', color: '#333'}}
                        >
                          <option value="">Max Price</option>
                          <option value="850000">$850,000</option>
                          <option value="900000">$900,000</option>
                          <option value="950000">$950,000</option>
                          <option value="999000">$999,000</option>
                          <option value="1000000">$1,000,000</option>
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
              Homestead West Location: Prime Northwest Las Vegas Real Estate
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Homestead West: 9 Miles to Red Rock Canyon</h3>
                <p className="text-gray-600">
                  World-class hiking, climbing, and scenic drives at your doorstep from Homestead West
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌆</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Homestead West: 18 Miles to Downtown Las Vegas</h3>
                <p className="text-gray-600">
                  Easy access to world-class entertainment, dining, and culture from Homestead West
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">⛰️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Homestead West: 23 Miles to Mount Charleston</h3>
                <p className="text-gray-600">
                  Alpine escape with skiing, hiking, and 20°F cooler temperatures near Homestead West
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Homestead West Nearby Amenities and Local Attractions</h3>
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

        {/* Available Homes Section - Live MLS Feed */}
        <section id="available-homes" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Available New Homes</h2>
                <p className="text-xl text-gray-600">Live MLS listings updated daily — Northwest Las Vegas, NV 89149</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">$910K+</span>
                  <span className="text-sm">Starting Price</span>
                </div>
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">3,336–3,704</span>
                  <span className="text-sm">Sq Ft</span>
                </div>
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">4 Bed / 4+ Bath</span>
                  <span className="text-sm">Bed & Bath</span>
                </div>
                <div className="bg-[#001D31] text-white p-4 rounded-lg text-center">
                  <span className="block text-2xl font-bold text-[#f58220]">89149</span>
                  <span className="text-sm">Zip Code</span>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west/194163"
                  title="Homestead West Las Vegas - Live MLS Listings"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  loading="lazy"
                  className="w-full border-0 block"
                />
              </div>
            </div>
          </div>
        </section>

            {/* VIP Berkshire Hathaway HomeServices Buyer Program */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-lg mb-6">
                    ⭐ VIP Berkshire Hathaway HomeServices Buyer Program ⭐
                  </div>
                  <h2 className="text-4xl font-bold mb-6">
                    VIP Berkshire Hathaway HomeServices Buyer Program for Homestead West
                  </h2>
                  <p className="text-xl mb-8 text-blue-100">
                    Premier New Home Buyer Program for Homestead West Las Vegas
                  </p>
                  <p className="text-lg mb-8 text-blue-200">
                    The VIP Berkshire Hathaway HomeServices New Home Buyer Program provides <strong>Homestead West</strong> buyers with exclusive access to Las Vegas new construction homes through Dr. Jan Duffy's elite builder partnerships. This premier program delivers insider access, priority lot selection, and expert negotiation—giving YOU the ultimate advantage when purchasing your new Homestead West home.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">🚀</div>
                      <h3 className="text-lg font-bold mb-2">Early Phase Access Through VIP Program</h3>
                      <p className="text-sm text-blue-100">First access to new Homestead West phases before public release through the Berkshire Hathaway HomeServices program</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">⚡</div>
                      <h3 className="text-lg font-bold mb-2">Priority Lot Selection Benefits</h3>
                      <p className="text-sm text-blue-100">VIP program status ensures priority treatment throughout the entire Homestead West homebuying process</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                      <div className="text-3xl mb-3">🎯</div>
                      <h3 className="text-lg font-bold mb-2">Expert Negotiation Power</h3>
                      <p className="text-sm text-blue-100">Elite builder relationships backed by Berkshire Hathaway HomeServices deliver superior negotiation results for Homestead West buyers</p>
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

            {/* Register Your Buyer - Fast-Track Process */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                      Register as a New Home Buyer for New Homes - Dr. Jan Duffy Fast-Track Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Dr. Jan Duffy's VIP Berkshire Hathaway HomeServices partnership includes a streamlined registration process that gets your buyers priority treatment from day one for new construction homes.
                    </p>
                  </div>

                  {/* Process Steps */}
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-full border-2 border-blue-200">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                          1
                        </div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                          Initial Consultation for New Homes
                        </h3>
                        <p className="text-gray-700 text-center">
                          Discuss needs, budget, and preferences for new construction homes
                        </p>
                      </div>
                      {/* Connector Arrow */}
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 h-full border-2 border-purple-200">
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                          2
                        </div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                          VIP Registration for New Homes
                        </h3>
                        <p className="text-gray-700 text-center">
                          Register with VIP Berkshire Hathaway HomeServices buyer program portal
                        </p>
                      </div>
                      {/* Connector Arrow */}
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 h-full border-2 border-green-200">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                          3
                        </div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                          Priority Access to New Homes
                        </h3>
                        <p className="text-gray-700 text-center">
                          Get early access to new construction phases and lots
                        </p>
                      </div>
                      {/* Connector Arrow */}
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div>
                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 h-full border-2 border-yellow-200">
                        <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full text-2xl font-bold mb-4 mx-auto">
                          4
                        </div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                          Expert Guidance for New Homes
                        </h3>
                        <p className="text-gray-700 text-center">
                          Navigate the entire new construction process with VIP treatment
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center mt-12">
                    <a
                      href="/vip-buyer-program"
                      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      Start Your VIP Registration
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Work With Dr. Jan - Trust Building */}
            <section className="py-16 bg-blue-50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                    Why Work With Dr. Jan Duffy for Your Homestead West Home Purchase?
                  </h2>
                  <p className="text-xl text-center text-gray-700 mb-12">
                    Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
                  </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Builder Relationship</h3>
                  <p className="text-gray-700">
                    I work directly with the Homestead West builder to give you insider access while representing YOUR interests, not theirs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Market Expertise</h3>
                  <p className="text-gray-700">
                    I'll show you comparable communities to Homestead West and help you understand true market value—not just what the builder tells you.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Negotiation Power</h3>
                  <p className="text-gray-700">
                    Even with new construction at Homestead West, there's room to negotiate. I know how to maximize your leverage and protect your interests.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West Las Vegas Specialist</h3>
                  <p className="text-gray-700">
                    Nevada License S.0197614. Deep knowledge of Homestead West, Northwest Las Vegas, and the entire metro area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Homestead West Content for SEO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Why Choose Homestead West for Your Las Vegas Home?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Homestead West stands out as one of Las Vegas's premier new construction communities, offering an unparalleled combination of luxury, location, and lifestyle. When you invest in a Homestead West home, you're choosing a property that represents the best of Northwest Las Vegas living. The Homestead West community has been carefully planned to provide residents with everything they need for a comfortable, sophisticated lifestyle.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West: A Community Built for Modern Living</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Homestead West development represents a new standard in Las Vegas residential construction. Each Homestead West home is designed with attention to detail, featuring premium finishes, energy-efficient systems, and thoughtful layouts that accommodate today's modern families. Homestead West homeowners enjoy the peace of mind that comes with new construction warranties, cutting-edge home technology, and the latest building standards.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Investment Potential</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Investing in Homestead West real estate offers significant potential for appreciation. The Northwest Las Vegas area has shown consistent growth, and Homestead West's prime location positions it well for future value increases. Whether you're purchasing a Homestead West home as a primary residence or as an investment property, you can be confident that you're making a smart real estate decision in one of Las Vegas's most desirable neighborhoods.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Homestead West Lifestyle Benefits</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Life at Homestead West offers residents the perfect balance between urban convenience and suburban tranquility. Homestead West homeowners enjoy easy access to major employment centers, world-class entertainment, and natural attractions, all while living in a peaceful, well-maintained community. The Homestead West location provides the ideal setting for families, professionals, and retirees who want the best that Las Vegas has to offer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strong CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Homestead West Las Vegas?
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

    </div>
    <SearchWidgetScript />
    </>
  );
}
