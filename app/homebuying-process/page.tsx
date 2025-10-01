import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homebuying Process | Homestead West Las Vegas | Expert Guidance by Dr. Jan Duffy',
  description: 'Complete guide to buying a new home at Homestead West Las Vegas. Expert guidance from Dr. Jan Duffy through prequalification, house hunting, contracting, and closing. Nevada License S.0197614.',
  keywords: [
    'homebuying process Las Vegas',
    'new home buying guide',
    'Century Communities homebuying',
    'Homestead West homebuying',
    'Dr. Jan Duffy homebuying guide',
    'Las Vegas new home process',
    'first time home buyer Las Vegas'
  ],
  openGraph: {
    title: 'Homebuying Process | Homestead West Las Vegas',
    description: 'Complete guide to buying a new home at Homestead West Las Vegas with expert guidance from Dr. Jan Duffy.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/homebuying-process',
  },
};

export default function HomebuyingProcessPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Homebuying Process at Homestead West Las Vegas',
    description: 'Complete guide to buying a new home at Homestead West with expert guidance from Dr. Jan Duffy',
    totalTime: 'P60D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '910990'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Prequalification'
      },
      {
        '@type': 'HowToSupply',
        name: 'Earnest Money Deposit'
      },
      {
        '@type': 'HowToSupply',
        name: 'Down Payment'
      }
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Real Estate Agent'
      },
      {
        '@type': 'HowToTool',
        name: 'Lender'
      },
      {
        '@type': 'HowToTool',
        name: 'Home Inspector'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Prequalify',
        text: 'Get a no-strings-attached financial assessment to understand your budget and loan options.',
        url: 'https://homesteadwestlasvegas.com/homebuying-process#prequalify'
      },
      {
        '@type': 'HowToStep',
        name: 'House Hunt',
        text: 'Search for your perfect home at Homestead West with expert guidance from Dr. Jan Duffy.',
        url: 'https://homesteadwestlasvegas.com/homebuying-process#house-hunt'
      },
      {
        '@type': 'HowToStep',
        name: 'Contract',
        text: 'Make a preliminary commitment to buy your chosen home and lot.',
        url: 'https://homesteadwestlasvegas.com/homebuying-process#contract'
      },
      {
        '@type': 'HowToStep',
        name: 'Close',
        text: 'Complete final paperwork and become a new homeowner at Homestead West.',
        url: 'https://homesteadwestlasvegas.com/homebuying-process#close'
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
        <header className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Homebuying Process</h1>
              <p className="text-xl text-blue-100">Expert Guidance Through Every Step</p>
              <p className="text-lg text-blue-200 mt-2">Homestead West Las Vegas | Dr. Jan Duffy</p>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Journey to Homeownership</h2>
              <p className="text-xl text-gray-700 mb-8">
                Whether it's your first time buying a new home or you're looking for your next dream home, 
                Dr. Jan Duffy is here to walk you through every step of the process—ensuring you're prepared 
                and informed throughout your Homestead West home purchase.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Why Work With Dr. Jan Duffy?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Independent agent representing YOUR interests</li>
                      <li>• Office at Century Communities sales office</li>
                      <li>• Nevada License S.0197614</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Direct access to builder information</li>
                      <li>• Market expertise and negotiation power</li>
                      <li>• Las Vegas real estate specialist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Prequalify */}
        <section id="prequalify" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
                    <h2 className="text-3xl font-bold text-gray-900">Prequalify</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get a No-Strings-Attached Financial Assessment</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    This no-commitment, knowledge-building exercise gives you insight into how much home you could probably afford, 
                    as well as which home loan type might be your best fit. All it requires is for a lender to take a snapshot 
                    of your finances and run a credit check.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Prequalification is a powerful tool that will let you know exactly what steps you'll need to take before 
                    you're ready to purchase a home—if you're not there already! It also establishes a relationship with a 
                    lender, which will come in handy later on when you need preapproval to purchase a particular home.
                  </p>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Common Homebuying Myths Debunked:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>You need a 20% down payment.</strong> Actually, most buyers don't. Some even qualify for zero-down loans.</li>
                      <li>• <strong>You have to pay for everything.</strong> Maybe not. Several home loan types allow you to use a financial gift from family or friends.</li>
                      <li>• <strong>You need perfect credit.</strong> There wouldn't be many homebuyers if this were the case. While exceptional credit is ideal, many buyers have no trouble qualifying with good credit.</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Dr. Jan Duffy Can Help You:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Connect with trusted lenders in Las Vegas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Understand your financing options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Navigate the prequalification process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Prepare for preapproval when ready</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="tel:7022221988"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      📞 Call Dr. Jan: (702) 222-1988
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: House Hunt */}
        <section id="house-hunt" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Your Homestead West Wish List:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🏡</span>
                      <span>Plan 3336 (3,336 sq ft) or Plan 3704 (3,704 sq ft)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🏊</span>
                      <span>Pool-sized lot for outdoor living</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🏠</span>
                      <span>Optional detached casita or pool house</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">🚗</span>
                      <span>3-5 car garage options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">📍</span>
                      <span>Northwest Las Vegas location</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
                    <h2 className="text-3xl font-bold text-gray-900">House Hunt</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Search On-Site or Online</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Once you've prequalified and know your price range, you're ready to go shopping. Depending on what's most 
                    convenient for you, you could browse online, tour communities in person, or a combination of both! This is 
                    the time to put together your wish list of everything you'd want in your dream home.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    At Homestead West, you'll find luxury ranch homes on pool-sized lots, with optional detached casitas and 
                    multi-generational layouts. Dr. Jan Duffy can help you explore both Plan 3336 and Plan 3704 to find 
                    the perfect fit for your family.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      href="/floor-plans"
                      className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Floor Plans
                    </a>
                    <a
                      href="/virtual-tour"
                      className="bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Take Virtual Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Contract */}
        <section id="contract" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
                    <h2 className="text-3xl font-bold text-gray-900">Contract</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Make a Preliminary Commitment to Buy</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    One of the great advantages of new home construction is that it's first-come, first-served. As long as 
                    you're a qualified buyer, the house is yours if you're the one who got there first. When you've found a 
                    home that checks the right boxes, you'll want to act fast to get it under contract—ensuring that no other 
                    buyer can swoop in and buy it out from under you.
                  </p>
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Contracting Considerations:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Home loan preapproval</li>
                      <li>• Earnest money deposit</li>
                      <li>• Building timeline</li>
                      <li>• Avoiding major transactions before closing, like purchasing a car or large furniture</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Dr. Jan Duffy's Contract Expertise:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Review all contract terms and conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Negotiate on your behalf</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Ensure your interests are protected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Coordinate with Century Communities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Guide you through the entire process</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      📧 Email Dr. Jan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Close */}
        <section id="close" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Closing Considerations:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Down Payment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Closing costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Homeowners insurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Moving arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <span>Change of address</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">4</div>
                    <h2 className="text-3xl font-bold text-gray-900">Close</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Put a Bow on It and Grab the Keys</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    This is your big day to sign final paperwork and breathe a sigh of satisfaction, because you've officially 
                    bought a home. And whether it's your first house, or one of several, the feeling never gets old. You'll also 
                    love the peace of mind that comes with a new home warranty, providing coverage on major items and repairs.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    At Homestead West, you'll be closing on a luxury ranch home built by Century Communities, one of America's 
                    top 10 homebuilders. Dr. Jan Duffy will be there every step of the way to ensure a smooth closing process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Homebuying Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy for expert guidance through every step of your Homestead West home purchase
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 222-1988
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
              
              <div className="mt-8 text-blue-200">
                <p className="text-lg font-semibold">Dr. Jan Duffy</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
                <p className="mt-4 text-sm">
                  Independent real estate agent providing expert guidance to home buyers. 
                  Not affiliated with or endorsed by Century Communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
