import { Metadata } from 'next';
import SearchWidgetScript from '@/components/SearchWidgetScript';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'Homestead West Las Vegas: Luxury Ranch Homes in Northwest Las Vegas',
  description: 'Luxury single-story ranch homes at Homestead West Las Vegas. $910K+ homes, 3,336-3,704 sq ft, pool-sized lots. Get early access to new phases 48 hours before public release. Expert guidance from independent agent with VIP builder access.',
  keywords: 'Homestead West Las Vegas, luxury ranch homes, single-story homes, Northwest Las Vegas, new construction, pool-sized lots, $910K homes, Las Vegas real estate',
  alternates: {
    canonical: 'https://www.homesteadwestlasvegas.com/',
  },
  openGraph: {
    title: 'Homestead West Las Vegas: Luxury Ranch Homes in Northwest Las Vegas',
    description: 'Luxury single-story ranch homes $910K+ on pool-sized lots. Get early access to new Homestead West phases before public release.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/',
  },
};

// Force revalidation to clear stale cache
export const revalidate = 0; // Always revalidate (no static caching)

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
    telephone: '+17022996607',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    url: 'https://www.homesteadwestlasvegas.com',
    agent: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+17022996607',
      email: 'DrJanSells@HomesteadWestLasVegas.com',
      image: 'https://www.homesteadwestlasvegas.com/images/dr-jan-duffy.jpg',
      priceRange: '$850,000-$990,000',
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
        <section className="relative bg-gradient-to-br from-[#1a365d] via-[#0f2439] to-[#1a365d] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Subtle professional background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-[#2c5282] rounded-full mix-blend-multiply filter blur-xl"></div>
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* VIP Badge */}
              <div className="mb-8">
                <div className="inline-block bg-[#d4af37] text-[#1a365d] px-6 py-2 rounded-full font-bold text-lg mb-6 shadow-lg">
                  ⭐ VIP Berkshire Hathaway HomeServices Buyer Program ⭐
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Homestead West Las Vegas: Luxury Ranch Homes in Northwest Las Vegas
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold text-gray-200">
                $910K+ Single-Story Ranch Homes on Pool-Sized Lots
              </p>
              <p className="text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
                Tired of showing up to find the corner lot already sold? What if you could see new Homestead West phases before anyone else?
                <br /><br />
                Homestead West offers luxury single-story ranch homes from 3,336 to 3,704 square feet. Starting at $910,000. Pool-sized lots. Optional detached casitas. Perfect for families who want space without stairs.
                <br /><br />
                Work with an independent agent who has VIP access to new phases 48 hours before public release. Get the best lots, negotiate upgrades, and secure your dream home.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">📜</span>
                  <span>Nevada License S.0197614</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">🏢</span>
                  <span>Berkshire Hathaway HomeServices</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">⭐</span>
                  <span>30+ years experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">🏆</span>
                  <span>500+ families helped</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:7022996607"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📞 Call: (702) 299-6607
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Why Most Buyers Miss Out on the Best Homestead West Lots
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Here's what happens when you buy Homestead West homes alone:
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The builder's sales rep works for the builder. Their job is to sell you a house at full price. They won't tell you about better Homestead West lots coming next month. They won't negotiate upgrades. They won't share insider pricing.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You show up on opening day. The corner lots are gone. The premium floor plans are sold out. You're left choosing from what's left at Homestead West.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You pay asking price. No negotiation. No leverage. The builder holds all the cards.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  What if you had someone on your side? Someone with early access to new Homestead West phases? Someone who could negotiate upgrades and incentives?
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  That's the difference between buying alone and working with an independent agent who has VIP access to Homestead West.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                How to Get the Best Homestead West Home
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  Work with an independent agent who has VIP access to Homestead West. Dr. Jan Duffy works for you, not the builder. That means you get the best lots, better pricing, and expert negotiation.
                </p>
                <p className="text-lg leading-relaxed mb-6 font-semibold">
                  Here's what you get:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Early Phase Access to Homestead West</h3>
                  <p className="text-gray-700">
                    Get notified 48 hours before new Homestead West phases go public. See available lots before anyone else. Secure the corner lot. The premium view. The floor plan you want.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Direct Builder Contact</h3>
                  <p className="text-gray-700">
                    Office at the Homestead West builder's sales office. Direct access to lot availability, pricing questions, and timeline updates. Get answers faster.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation Power</h3>
                  <p className="text-gray-700">
                    Even with new construction at Homestead West, there's room to negotiate. Upgrades. Closing costs. Incentives. Know which ones stack and how to get your offer accepted.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">VIP Program Benefits</h3>
                  <p className="text-gray-700">
                    Priority treatment throughout your Homestead West purchase. Faster responses. Better service. Access to spec homes before they hit the market.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-xl font-bold text-gray-900 mb-2">What You Pay</p>
                <p className="text-lg text-gray-700">
                  Nothing. The builder pays the commission. You get expert representation for your Homestead West home at no cost to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Real Results from Real Families
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>[CLIENT NAME 1]</strong> and <strong>[CLIENT NAME 2]</strong> wanted a corner lot in Homestead West Phase 3. They called me two weeks before the public release. I registered them in my VIP program. They secured Lot 47—corner position, mountain views—before anyone else saw it. Final savings: <strong>[SAVINGS AMOUNT]</strong> in negotiated upgrades.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>[CLIENT NAME 3]</strong> was relocating from California. They needed to close in 60 days. I connected them with a spec home that wasn't listed yet. We negotiated <strong>[SAVINGS AMOUNT]</strong> in closing cost credits. They moved in on schedule.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>[CLIENT NAME 4]</strong> wanted the Plan 3704 with a casita. The builder's sales rep said it wasn't available. I checked my VIP portal. Found one coming available in 30 days. They secured it before it went public. Saved <strong>[SAVINGS AMOUNT]</strong> through my negotiation.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Homestead West by the Numbers</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">500+</p>
                    <p className="text-sm">Homestead West families helped since [YEAR]</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">[AMOUNT]</p>
                    <p className="text-sm">average savings per Homestead West transaction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">[NUMBER]</p>
                    <p className="text-sm">Homestead West lots secured before public release</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">[PERCENTAGE]%</p>
                    <p className="text-sm">Homestead West client satisfaction rate</p>
                  </div>
                </div>
              </div>
              
              {/* Video Testimonial Placeholder */}
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                <p className="text-gray-600 mb-4">[VIDEO TESTIMONIAL PLACEHOLDER: If available, embed 60-90 second video testimonial from [CLIENT NAME] discussing their experience]</p>
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

        {/* Community Snapshot */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Homestead West: Single-Story Living in Northwest Las Vegas
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Homes at Homestead West</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• 3,336 to 3,704 square feet</li>
                  <li>• 4 bedrooms, 4+ bathrooms</li>
                  <li>• Starting at $910,000</li>
                  <li>• Pool-sized lots (average [LOT SIZE] square feet)</li>
                  <li>• Optional detached casitas</li>
                  <li>• Multi-generational floor plans available</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Location</h3>
                <p className="text-lg text-gray-700">
                  9 miles to Red Rock Canyon. 18 miles to downtown Las Vegas. 23 miles to Mount Charleston. Quick access to US 95 and CC 215.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Lifestyle</h3>
                <p className="text-lg text-gray-700">
                  No stairs. Spacious layouts. Private backyards. Perfect for retirees, families with young kids, or anyone who wants single-story living.
                </p>
              </div>
              
              {/* Virtual Tour Placeholder */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">[VIRTUAL TOUR PLACEHOLDER: Link to virtual tour or lifestyle image]</p>
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

            {/* Process Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                      How to Secure Your Homestead West Home: 4 Simple Steps
                    </h2>
                  </div>

                  {/* Process Steps */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Step 1 */}
                    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                        Initial Consultation (Day 1)
                      </h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>What happens:</strong> We talk about your needs. Budget. Timeline. Must-have features.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>How long:</strong> 30-minute phone call or in-person meeting.</p>
                      <p className="text-gray-700 text-sm"><strong>What you get:</strong> Customized search strategy. Pre-approval lender connections if needed.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                      <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                        VIP Registration (Day 1-2)
                      </h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>What happens:</strong> I register you in my VIP buyer program. You get access to my portal.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>How long:</strong> 24 hours to activate.</p>
                      <p className="text-gray-700 text-sm"><strong>What you get:</strong> Early notifications. Priority lot holds. Direct builder contact.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                      <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                        Early Access (Ongoing)
                      </h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>What happens:</strong> I notify you 48 hours before new phases release. You see lots before public.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>How long:</strong> As long as you're actively looking.</p>
                      <p className="text-gray-700 text-sm"><strong>What you get:</strong> First choice on premium lots. Better floor plans. Preferred locations.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                      <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full text-2xl font-bold mb-4 mx-auto">
                        4
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                        Expert Guidance (Through Closing)
                      </h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>What happens:</strong> I handle negotiations. Coordinate inspections. Manage timelines. Solve problems.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>How long:</strong> Typically 90-120 days from contract to closing.</p>
                      <p className="text-gray-700 text-sm"><strong>What you get:</strong> Smooth process. Maximum savings. Peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Common Questions About Buying New Construction
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Do I need an agent to buy at Homestead West?</h3>
                      <p className="text-gray-700">
                        You don't need one, but you should use one. The builder's sales rep works for the builder. An independent agent works for you. Plus, it costs you nothing—the builder pays the commission. You get expert representation at zero cost.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Can I just go to the Homestead West builder directly?</h3>
                      <p className="text-gray-700">
                        You can. But you'll work with the builder's sales rep. They work for the builder, not you. They won't negotiate. They won't share early access to new phases. You'll pay full price and choose from what's left.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">What if I'm buying Homestead West from out of state?</h3>
                      <p className="text-gray-700">
                        Many Homestead West buyers relocate from other states. Video tours of available lots. Virtual consultations. Document signing via DocuSign. Everything can be coordinated remotely. You'll have local representation even if you're 2,000 miles away.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">How does early access to Homestead West phases work?</h3>
                      <p className="text-gray-700">
                        Get notified when new Homestead West phases are about to release. Usually 48 hours before public. See available lots, floor plans, and pricing. Secure your lot before anyone else sees it.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">What if I'm not ready to buy at Homestead West for 6 months?</h3>
                      <p className="text-gray-700">
                        That's fine. Register in the VIP program now. You'll get early notifications about new phases. Watch the market. When you're ready, you'll already have priority access to the best Homestead West lots.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">What makes Homestead West different from other communities?</h3>
                      <p className="text-gray-700">
                        Homestead West offers luxury single-story ranch homes on pool-sized lots. 3,336 to 3,704 square feet. Starting at $910,000. Optional detached casitas. Perfect for families who want space without stairs. Located in prime Northwest Las Vegas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#0f2439] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Early Access?
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto text-gray-200">
              Don't wait until opening day. Don't settle for what's left.
            </p>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-200">
              Register in my VIP program today. Get early access to new phases. Secure the lot you want. Save money through expert negotiation.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold text-yellow-400">
              Limited lots available. Homestead West Phase [NUMBER] releases [DATE]. Corner lots go fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="tel:7022996607"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                📞 Call: (702) 299-6607
              </a>
              <a 
                href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                className="bg-[#d4af37] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg"
              >
                📧 Get Early Access Form
              </a>
            </div>
            <p className="text-sm text-gray-300 max-w-xl mx-auto">
              Contact Dr. Jan Duffy for expert guidance on your Homestead West home purchase. I'll call you within 24 hours to discuss your needs and get you registered in the VIP program.
            </p>
          </div>
        </section>

    </div>
    <SearchWidgetScript />
    </>
  );
}
