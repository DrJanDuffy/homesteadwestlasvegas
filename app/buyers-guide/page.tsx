import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Buyer's Guide | New Construction Process | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description: "Complete buyer's guide to new construction homes in Las Vegas. Step-by-step process with Dr. Jan Duffy's VIP Century Communities partnership. Expert guidance for first-time buyers.",
  keywords: [
    'new construction buyer guide',
    'Las Vegas new home process',
    'Century Communities buyer guide',
    'first time home buyer Las Vegas',
    'new construction process',
    'Dr. Jan Duffy buyer guide',
    'Homestead West buyer guide'
  ],
  openGraph: {
    title: "Buyer's Guide | New Construction Process | Dr. Jan Duffy",
    description: "Complete buyer's guide to new construction homes in Las Vegas with VIP Century Communities partnership.",
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/buyers-guide',
  },
};

export default function BuyersGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'New Construction Home Buyer Guide',
    description: 'Complete step-by-step guide to buying new construction homes in Las Vegas',
    totalTime: 'P90D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '910990'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Pre-approval Letter'
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
        name: 'Get Pre-approved',
        text: 'Obtain mortgage pre-approval to understand your budget and strengthen your offer.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#preapproval'
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Your Community',
        text: 'Select the perfect Century Communities development for your lifestyle and needs.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#community'
      },
      {
        '@type': 'HowToStep',
        name: 'Select Floor Plan',
        text: 'Choose from available floor plans and customize with structural and design options.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#floorplan'
      },
      {
        '@type': 'HowToStep',
        name: 'Pick Your Lot',
        text: 'Select your homesite and any lot premiums or upgrades.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#lot'
      },
      {
        '@type': 'HowToStep',
        name: 'Sign Purchase Agreement',
        text: 'Execute the purchase agreement and provide earnest money deposit.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#contract'
      },
      {
        '@type': 'HowToStep',
        name: 'Design Center Selection',
        text: 'Choose finishes, colors, and upgrades at the Century Communities Design Center.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#design'
      },
      {
        '@type': 'HowToStep',
        name: 'Construction Monitoring',
        text: 'Monitor construction progress with regular updates and walk-throughs.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#construction'
      },
      {
        '@type': 'HowToStep',
        name: 'Final Walkthrough',
        text: 'Complete final walkthrough and address any punch list items.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#walkthrough'
      },
      {
        '@type': 'HowToStep',
        name: 'Closing',
        text: 'Sign final documents and receive keys to your new Century Communities home.',
        url: 'https://homesteadwestlasvegas.com/buyers-guide#closing'
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
        <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                ⭐ VIP CENTURY COMMUNITIES BUYER'S GUIDE ⭐
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Complete Buyer's Guide</h1>
              <p className="text-2xl md:text-3xl mb-4 text-blue-100">New Construction Process</p>
              <p className="text-xl text-blue-200">Expert Guidance with VIP Century Communities Partnership</p>
            </div>
          </div>
        </header>

        {/* VIP Partnership Introduction */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">VIP Buyer Advantages</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Dr. Jan Duffy's VIP Century Communities partnership delivers exclusive advantages 
                  throughout your entire new construction home buying journey.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Early Access</h3>
                  <p className="text-gray-700">First access to new phases and premium lots</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Better Pricing</h3>
                  <p className="text-gray-700">VIP incentives and negotiation advantages</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Priority Service</h3>
                  <p className="text-gray-700">Faster responses and priority treatment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">9-Step New Construction Process</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div id="preapproval" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">1</div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Pre-approved</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Before you start shopping, get pre-approved for a mortgage. This shows Century Communities 
                      you're a serious buyer and helps you understand your budget. Dr. Jan Duffy can connect you 
                      with trusted lenders who understand new construction financing.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Access to Century Communities preferred lenders with special rates and programs.</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div id="community" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">2</div>
                    <h3 className="text-2xl font-bold text-gray-900">Choose Your Community</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Select from Century Communities' premier developments. Dr. Jan Duffy's VIP access includes 
                      Homestead West (luxury ranch homes), Cadence Henderson (master-planned community), 
                      and North Las Vegas developments.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Insider knowledge of upcoming phases and community amenities before public release.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div id="floorplan" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">3</div>
                    <h3 className="text-2xl font-bold text-gray-900">Select Floor Plan</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Choose from Century Communities' floor plans. At Homestead West, select between 
                      Plan 3336 (3,336 sq ft) or Plan 3704 (3,704 sq ft). Consider your family's needs, 
                      lifestyle, and future plans.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Access to floor plan modifications and custom options not available to general public.</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div id="lot" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">4</div>
                    <h3 className="text-2xl font-bold text-gray-900">Pick Your Lot</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Select your homesite from available lots. Consider lot size, orientation, views, 
                      and proximity to amenities. Century Communities offers pool-sized lots perfect for 
                      outdoor living and detached casitas.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority lot selection and holds before public release, plus insider pricing information.</p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div id="contract" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">5</div>
                    <h3 className="text-2xl font-bold text-gray-900">Sign Purchase Agreement</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Execute the purchase agreement and provide earnest money deposit (typically 5-10% of home price). 
                      Dr. Jan Duffy will review all terms and negotiate on your behalf to ensure your interests are protected.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Expert contract review and negotiation backed by premier Century Communities relationships.</p>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div id="design" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">6</div>
                    <h3 className="text-2xl font-bold text-gray-900">Design Center Selection</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Visit the Century Communities Design Center to select finishes, colors, and upgrades. 
                      Choose flooring, countertops, cabinets, lighting, and other design elements to personalize your home.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority Design Center appointments and access to exclusive upgrade packages.</p>
                    </div>
                  </div>
                </div>

                {/* Step 7 */}
                <div id="construction" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">7</div>
                    <h3 className="text-2xl font-bold text-gray-900">Construction Monitoring</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Monitor construction progress with regular updates from Century Communities. 
                      Dr. Jan Duffy will coordinate walk-throughs at key construction milestones 
                      to ensure everything meets your expectations.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Direct communication with construction managers and priority scheduling for walk-throughs.</p>
                    </div>
                  </div>
                </div>

                {/* Step 8 */}
                <div id="walkthrough" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">8</div>
                    <h3 className="text-2xl font-bold text-gray-900">Final Walkthrough</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Complete final walkthrough to inspect your new home and create a punch list of any items 
                      that need attention. Century Communities will address these items before closing.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority scheduling for final walkthrough and expedited punch list completion.</p>
                    </div>
                  </div>
                </div>

                {/* Step 9 */}
                <div id="closing" className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">9</div>
                    <h3 className="text-2xl font-bold text-gray-900">Closing</h3>
                  </div>
                  <div className="ml-18">
                    <p className="text-lg text-gray-700 mb-4">
                      Sign final documents and receive keys to your new Century Communities home! 
                      Dr. Jan Duffy will be there to ensure a smooth closing process and celebrate 
                      your new home purchase.
                    </p>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">VIP Advantage:</h4>
                      <p className="text-gray-700">Priority closing scheduling and VIP treatment throughout the final process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Typical Timeline</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📅</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Pre-Construction</h3>
                  <p className="text-gray-700 mb-2">Steps 1-6</p>
                  <p className="text-sm text-gray-600">2-4 weeks</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Construction</h3>
                  <p className="text-gray-700 mb-2">Steps 7-8</p>
                  <p className="text-sm text-gray-600">4-6 months</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Closing</h3>
                  <p className="text-gray-700 mb-2">Step 9</p>
                  <p className="text-sm text-gray-600">1-2 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your New Construction Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let Dr. Jan Duffy's VIP Century Communities partnership guide you through every step
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022221988"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
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
                <p className="text-lg font-semibold">Dr. Jan Duffy - VIP Century Communities Specialist</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
