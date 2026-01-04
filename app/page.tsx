import { Metadata } from 'next';
import Image from 'next/image';
import SearchWidgetScript from '@/components/SearchWidgetScript';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K',
  description: 'Get VIP access to Northwest Las Vegas\'s newest luxury community. Dr. Jan Duffy represents YOU—not the builder. Independent buyer\'s agent with Berkshire Hathaway HomeServices Nevada. The VIP Berkshire Hathaway HomeServices Buyer Program has helped 65+ Homestead West families since 2022.',
  keywords: 'Homestead West Las Vegas, luxury ranch homes, single-story homes, Northwest Las Vegas, new construction, pool-sized lots, $910K homes, Las Vegas real estate, Berkshire Hathaway HomeServices, independent buyer agent',
  alternates: {
    canonical: 'https://www.homesteadwestlasvegas.com/',
  },
  openGraph: {
    title: 'Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K',
    description: 'Get VIP access to Northwest Las Vegas\'s newest luxury community. Independent buyer\'s agent with Berkshire Hathaway HomeServices Nevada.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/',
    siteName: 'Homestead West Las Vegas',
    images: [
      {
        url: 'https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg',
        width: 750,
        height: 752,
        alt: 'Dr. Jan Duffy - VIP New Construction Homes Specialist | Homestead West Las Vegas',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K',
    description: 'Get VIP access to Northwest Las Vegas\'s newest luxury community. Independent buyer\'s agent with Berkshire Hathaway HomeServices Nevada.',
    images: ['https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg'],
  },
};

// ISR: Revalidate every hour for fresh content while maintaining performance
// RealScout listings load client-side, so this doesn't affect dynamic data
export const revalidate = 3600; // 1 hour

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Homestead West Las Vegas | Homes by Dr. Jan Duffy',
    description: '$910K+ luxury single-story ranch homes on pool-sized lots in Northwest Las Vegas',
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
      image: 'https://www.homesteadwestlasvegas.com/images/Dr. Duffy Blue_Headshot.jpg',
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
                Homestead West Las Vegas — Luxury Single-Story Ranch Homes from $910K
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold text-gray-200">
                Get VIP access to Northwest Las Vegas's newest luxury community. Dr. Jan Duffy represents YOU—not the builder.
              </p>
              <p className="text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
                Tired of showing up to find the corner lot already sold? What if you could see new phases before anyone else?
                <br /><br />
                These luxury single-story ranch homes range from 3,336 to 3,704 square feet. Starting at $910,000. Pool-sized lots. Optional detached casitas. Perfect for families who want space without stairs.
                <br /><br />
                Work with an independent agent who has VIP access to new phases 48 hours before public release. Get the best lots, negotiate upgrades, and secure your dream home.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">🏢</span>
                  <span>Berkshire Hathaway HomeServices Nevada</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">🏆</span>
                  <span>Expert Buyer Representation & Negotiation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl">📜</span>
                  <span>Nevada License S.0197614</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/appointment"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Schedule Your Private Tour
                </a>
                <a 
                  href="tel:7022996607"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all"
                >
                  📞 (702) 299-6607
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
                The Builder's Sales Team Works for the Builder. Who's Working for You?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  When you walk into a new construction sales office, the on-site agent has one job: sell you a home at the highest price with the fewest concessions. They're not going to:
                </p>
                <ul className="text-lg leading-relaxed mb-6 space-y-2 list-disc list-inside">
                  <li>Tell you which lots have drainage issues</li>
                  <li>Show you comparable sales in competing communities</li>
                  <li>Negotiate upgrades or closing cost credits</li>
                  <li>Alert you when a better lot is about to release</li>
                </ul>
                <p className="text-lg leading-relaxed mb-6">
                  You show up on opening day. The corner lots are gone. The premium floor plans are sold out. You're left choosing from what's left.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You pay asking price. No negotiation. No leverage. The builder holds all the cards.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  That's where Dr. Jan comes in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl ring-2 ring-blue-600/20" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src="/images/Dr. Duffy Blue_Headshot.jpg"
                    alt="Dr. Jan Duffy - VIP New Construction Homes Specialist"
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
                Your Advocate in the New Construction Process
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  Dr. Jan Duffy leads the VIP Berkshire Hathaway HomeServices Buyer Program, which has helped 65+ families buy homes in Homestead West since 2022—with an average savings of $14,200 per transaction.
                </p>
                <p className="text-lg leading-relaxed mb-6 font-semibold">
                  What you get:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Early Phase Access</h3>
                  <p className="text-gray-700">
                    VIP buyers see new lot releases before the general public.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation Leverage</h3>
                  <p className="text-gray-700">
                    New construction prices aren't set in stone. Dr. Jan negotiates upgrades, closing costs, and lot premiums.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Market Intelligence</h3>
                  <p className="text-gray-700">
                    Is this community fairly priced? How does it compare to Skye Canyon, Summerlin, or Providence? Dr. Jan shows you the data so you can decide with confidence.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Zero Cost to You</h3>
                  <p className="text-gray-700">
                    The builder pays the buyer's agent commission. You get expert representation at no additional cost.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="/vip-buyer-program"
                  className="inline-block bg-[#1a365d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0f2439] transition-colors shadow-lg"
                >
                  Join the VIP Buyer Program
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Berkshire Hathaway HomeServices Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Backed by a Name You Can Trust
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Dr. Jan Duffy is proud to represent buyers through Berkshire Hathaway HomeServices Nevada—one of the most respected names in real estate.
              </p>
              
              {/* BHHS Logo */}
              <div className="flex justify-center mb-8">
                <Image 
                  src="/images/bhhs-logo.svg" 
                  alt="Berkshire Hathaway HomeServices Nevada Properties" 
                  width={250}
                  height={80}
                  className="h-16 md:h-20 w-auto"
                  priority
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Global Network</h3>
                  <p className="text-gray-700 text-sm">
                    Part of the Berkshire Hathaway family of companies
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Local Expertise</h3>
                  <p className="text-gray-700 text-sm">
                    Top-producing brokerage in the Las Vegas market
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Buyer-First Philosophy</h3>
                  <p className="text-gray-700 text-sm">
                    Committed to integrity, trust, and exceptional service
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                When you work with Dr. Jan, you're not just getting a real estate agent. You're getting the resources, reputation, and reach of Berkshire Hathaway HomeServices behind every transaction.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">The Berkshire Hathaway HomeServices Advantage</h3>
                <p className="text-gray-700">
                  The VIP Berkshire Hathaway HomeServices Buyer Program's builder relationships and VIP access get you first look at lots, unlisted inventory, and negotiating power that individual buyers don't have.
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
                What Buyers Say
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "A couple in the area wanted a corner lot in Homestead West. They called the VIP Berkshire Hathaway HomeServices Buyer Program two weeks before the public release. We registered them in the VIP program. They secured a corner position with mountain views—before anyone else saw it."
                  </p>
                  <p className="text-gray-900 font-semibold">— Homestead West Buyers</p>
                  <p className="text-gray-700 text-sm">Final savings: $15,000 in negotiated upgrades including quartz countertops and covered patio extension</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600">
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "A local executive was upsizing and needed to close in 60 days. The VIP Berkshire Hathaway HomeServices Buyer Program connected him with a move-in-ready spec home that wasn't publicly listed yet. The program negotiated $12,500 in closing cost credits. He moved in on schedule."
                  </p>
                  <p className="text-gray-900 font-semibold">— Local Executive</p>
                  <p className="text-gray-700 text-sm">Closed in 60 days with $12,500 in closing cost credits</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "A retiring couple nearby wanted a larger floor plan with a casita for visiting grandchildren. The builder's sales rep said it wasn't available. The VIP Berkshire Hathaway HomeServices Buyer Program checked the VIP portal. Found one coming available in 30 days. They secured it before it went public."
                  </p>
                  <p className="text-gray-900 font-semibold">— Retiring Couple</p>
                  <p className="text-gray-700 text-sm">Saved $18,000 through our negotiation—design center upgrades plus lot premium credits</p>
                </div>
              </div>
              
              <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Homestead West by the Numbers</h3>
                <p className="text-center text-blue-100 mb-6 text-sm">VIP Berkshire Hathaway HomeServices Buyer Program results</p>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">VIP</p>
                    <p className="text-sm">Early Access & Priority Lot Selection</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">$14,200</p>
                    <p className="text-sm">Average savings per transaction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">18</p>
                    <p className="text-sm">Lots secured before public release</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400 mb-2">98%</p>
                    <p className="text-sm">Client satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Homes Section */}
        <section id="available-homes" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Available Homes and Las Vegas MLS Listings</h2>
                <p className="text-xl text-gray-700 mb-8">Live MLS listings updated daily — Northwest Las Vegas, NV 89149</p>
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
              
              <div className="max-w-7xl mx-auto mb-8">
                <RealScoutListings />
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.showingnew.com/skyecanyon/community/nevada/las-vegas/homestead-west/194163"
                  title="Las Vegas - Live MLS Listings"
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

        {/* MLS Search Widget Section */}
        <section id="search-homes" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Search Available Homes and New Construction Listings
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                The Community at a Glance
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* HOMES */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">HOMES</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Single-story ranch designs</li>
                    <li>• 3,336 – 3,704 sq ft</li>
                    <li>• 4 bedrooms, 4+ bathrooms</li>
                    <li>• Pool-sized lots</li>
                    <li>• Optional detached casitas</li>
                    <li>• Multi-generational floor plans</li>
                  </ul>
                </div>
                
                {/* LOCATION */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">LOCATION</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Northwest Las Vegas (89149)</li>
                    <li>• W. Ann Rd. & N. Fort Apache Rd.</li>
                    <li>• 9 miles to Red Rock Canyon</li>
                    <li>• 18 miles to Downtown/Strip</li>
                    <li>• 23 miles to Mount Charleston</li>
                  </ul>
                </div>
                
                {/* PRICE */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">PRICE</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Starting from $910K</li>
                    <li>• [PLACEHOLDER: Current inventory count] homes available</li>
                  </ul>
                </div>
                
                {/* NEARBY */}
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">NEARBY</h3>
                  <ul className="space-y-2 text-gray-700 text-sm mb-4">
                    <li>• Centennial Hills Park</li>
                    <li>• Gilcrease Orchard</li>
                    <li>• Lone Mountain Regional Park</li>
                    <li>• Top-rated schools: [PLACEHOLDER: School names]</li>
                  </ul>
                  <a
                    href="https://maps.app.goo.gl/rMPkPwK5Mz7Z2T5J7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    <span>🗺️</span>
                    <span>Explore More Things to Do</span>
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="/properties"
                  className="inline-block bg-[#1a365d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0f2439] transition-colors shadow-lg"
                >
                  View Available Homes
                </a>
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
                      How It Works
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
                        Schedule a Call (15 minutes)
                      </h3>
                      <p className="text-gray-700 text-sm text-center">
                        Tell Dr. Jan what you're looking for—budget, timeline, must-haves.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                      <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                        Get VIP Access
                      </h3>
                      <p className="text-gray-700 text-sm text-center">
                        Receive early alerts on new phases, price changes, and inventory.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                      <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                        Tour with Your Advocate
                      </h3>
                      <p className="text-gray-700 text-sm text-center">
                        Visit the community with someone who works for YOU, not the builder.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                      <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full text-2xl font-bold mb-4 mx-auto">
                        4
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                        Negotiate & Close
                      </h3>
                      <p className="text-gray-700 text-sm text-center">
                        Dr. Jan handles negotiations, inspections, and paperwork through closing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <a
                      href="/appointment"
                      className="inline-block bg-[#1a365d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0f2439] transition-colors shadow-lg"
                    >
                      Book Your 15-Minute Call
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Frequently Asked Questions About Buying in Homestead West Las Vegas
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Do I have to pay Dr. Jan to represent me?</h3>
                      <p className="text-gray-700">
                        No. The builder pays the buyer's agent commission. My services cost you nothing.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Can't I just go directly to the builder's sales office?</h3>
                      <p className="text-gray-700">
                        You can—but you'll be working with someone whose job is to protect the builder's interests, not yours. I level the playing field.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">I'm relocating from out of state. Can you help remotely?</h3>
                      <p className="text-gray-700">
                        Absolutely. Most of my clients start with a video call. I can send virtual tours, market reports, and handle everything until you're ready to visit in person.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Is there room to negotiate on new construction pricing?</h3>
                      <p className="text-gray-700">
                        Yes. Builders have flexibility on upgrades, closing costs, lot premiums, and sometimes base price—especially on standing inventory. I know what to ask for.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">What if I want to see other communities too?</h3>
                      <p className="text-gray-700">
                        I'll show you how this community compares to Skye Canyon, Summerlin, Providence, and other Northwest options so you can make the best decision.
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
              Ready to See Homestead West Las Vegas?
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto text-gray-200">
              Schedule a private tour with Dr. Jan Duffy—your independent advocate in the new construction process.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Your Tour
              </a>
            </div>
            <div className="space-y-2 text-gray-200">
              <p>Or call directly: <a href="tel:7022996607" className="text-yellow-400 hover:text-yellow-300 font-semibold">(702) 299-6607</a></p>
              <p>Email: <a href="mailto:DrJanSells@HomesteadWestLasVegas.com" className="text-yellow-400 hover:text-yellow-300 font-semibold">DrJanSells@HomesteadWestLasVegas.com</a></p>
              <p>Homestead West Location: 5592 N Dapple Gray Rd, Las Vegas, NV 89149</p>
            </div>
          </div>
        </section>

    </div>
    <SearchWidgetScript />
    </>
  );
}
