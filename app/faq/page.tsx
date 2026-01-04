import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Dr. Jan Duffy | VIP New Construction Specialist',
  description: 'Get answers to common questions about buying new construction homes in Las Vegas. FAQ about new construction, Homestead West, and working with VIP New Construction Homes Specialist Dr. Jan Duffy.',
  keywords: [
    'new construction FAQ',
    'new construction questions',
    'Homestead West FAQ',
    'Las Vegas home buying questions',
    'Dr. Jan Duffy FAQ',
    'VIP New Construction Homes Specialist questions',
    'new construction process FAQ'
  ],
  openGraph: {
    title: 'FAQ | Frequently Asked Questions | Dr. Jan Duffy',
    description: 'Get answers to common questions about buying new construction homes in Las Vegas.',
    type: 'website',
    url: 'https://homesteadwestlasvegas.com/faq',
  },
};

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a VIP New Construction Homes Specialist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Jan Duffy is a VIP New Construction Homes Specialist who represents home buyers exclusively. As an independent real estate agent, she works for YOU, not the builder. Her expertise and builder relationships provide her clients with early access to new phases, priority lot selection, direct builder communication, and exclusive incentives not available to general buyers—all while advocating for your interests.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does the new construction process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The typical new construction timeline is 4-6 months from contract signing to closing. Pre-construction activities (pre-approval, floor plan selection, lot selection, contract signing, design center) take 2-4 weeks. Construction itself takes 4-6 months, followed by 1-2 weeks for final walkthrough and closing.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the advantages of buying new construction vs. resale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'New construction offers modern floor plans, energy-efficient features, warranty coverage, customization options, and the latest building materials. You can choose your lot, floor plan, and finishes. New homes typically require less immediate maintenance and come with builder warranties.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a real estate agent for new construction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! While builders have sales representatives, they represent the builder\'s interests. A buyer\'s agent like Dr. Jan Duffy represents YOUR interests exclusively. As a VIP New Construction Homes Specialist, she provides additional advantages including early access, priority treatment, and expert negotiation—all while working exclusively for home buyers, not the builder.'
        }
      },
      {
        '@type': 'Question',
        name: 'What financing options are available for new construction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The builder offers various financing options including conventional loans, FHA, VA, and USDA loans. Dr. Jan Duffy can connect you with the builder\'s preferred lenders who offer special rates and programs. Pre-approval is recommended before starting your home search.'
        }
      }
    ]
  };

  const faqs = [
    {
      category: 'VIP New Construction Homes Specialist',
      questions: [
        {
          question: 'What is a VIP New Construction Homes Specialist?',
          answer: 'Dr. Jan Duffy is a VIP New Construction Homes Specialist who represents home buyers exclusively. As an independent real estate agent, she works for YOU, not the builder. Her expertise and builder relationships provide her clients with early access to new phases, priority lot selection, direct builder communication, and exclusive incentives not available to general buyers—all while advocating for your interests.'
        },
        {
          question: 'How does working with a VIP New Construction Homes Specialist benefit me as a buyer?',
          answer: 'Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, delivers early access to new phases before public release, priority lot selection and holds, direct communication with builder management, expert negotiation, and exclusive incentives and upgrade packages. Most importantly, she works for YOU, not the builder.'
        },
        {
          question: 'Is Dr. Jan Duffy affiliated with the builder?',
          answer: 'Dr. Jan Duffy is an independent real estate agent who represents YOUR interests exclusively, not the builder\'s. As a VIP New Construction Homes Specialist, she provides insider access while maintaining complete client advocacy. She\'s not employed by the builder but uses her expertise and relationships to benefit home buyers.'
        }
      ]
    },
    {
      category: 'New Construction Process',
      questions: [
        {
          question: 'How long does the new construction process take?',
          answer: 'The typical new construction timeline is 4-6 months from contract signing to closing. Pre-construction activities (pre-approval, floor plan selection, lot selection, contract signing, design center) take 2-4 weeks. Construction itself takes 4-6 months, followed by 1-2 weeks for final walkthrough and closing.'
        },
        {
          question: 'What are the steps in the new construction process?',
          answer: '1) Get pre-approved, 2) Choose your community, 3) Select floor plan, 4) Pick your lot, 5) Sign purchase agreement, 6) Design center selection, 7) Construction monitoring, 8) Final walkthrough, 9) Closing. Dr. Jan Duffy guides you through each step with VIP advantages.'
        },
        {
          question: 'Can I customize my new construction home?',
          answer: 'Yes! The builder offers extensive customization options through their Design Center. You can choose finishes, colors, flooring, countertops, cabinets, lighting, and structural options. As a VIP New Construction Homes Specialist, Dr. Jan Duffy provides access to exclusive upgrade packages and priority Design Center appointments—all while representing your interests.'
        }
      ]
    },
    {
      category: 'Financing & Costs',
      questions: [
        {
          question: 'What financing options are available for new construction?',
          answer: 'The builder offers various financing options including conventional loans, FHA, VA, and USDA loans. Dr. Jan Duffy can connect you with the builder\'s preferred lenders who offer special rates and programs. Pre-approval is recommended before starting your home search.'
        },
        {
          question: 'How much earnest money is required?',
          answer: 'Earnest money deposits for new construction typically range from 5-10% of the home price. This amount varies by builder and community. As a VIP New Construction Homes Specialist, Dr. Jan Duffy can help negotiate favorable earnest money terms and timing while representing your interests.'
        },
        {
          question: 'What incentives are available for buyers?',
          answer: 'The builder offers various incentives including closing cost assistance, rate buydowns, design center credits, and upgrade packages. As a VIP New Construction Homes Specialist, Dr. Jan Duffy provides access to exclusive incentives not available to general buyers, often totaling $15,000+ in savings—all while working exclusively for home buyers.'
        }
      ]
    },
    {
      category: 'Homestead West Community',
      questions: [
        {
          question: 'What floor plans are available at Homestead West?',
          answer: 'Homestead West offers two luxury ranch home floor plans: Plan 3336 (3,336 sq ft) and Plan 3704 (3,704 sq ft). Both feature single-story living, pool-sized lots, optional detached casitas, and multi-generational layouts. As a VIP New Construction Homes Specialist, Dr. Jan Duffy provides early access to floor plan modifications while representing your interests.'
        },
        {
          question: 'What amenities are available in the Homestead West community?',
          answer: 'Homestead West features pool-sized lots perfect for outdoor living, optional detached casitas for multi-generational living, single-story ranch homes for easy living, and proximity to Northwest Las Vegas amenities including schools, shopping, healthcare, and recreation.'
        },
        {
          question: 'What schools serve the Homestead West community?',
          answer: 'Homestead West is served by excellent schools including Dean Lamar Allen Elementary (2.1 miles, 8/10 rating), Justice Myron E. Leavitt Middle School (3.2 miles, 7/10 rating), and Centennial High School (4.1 miles, 8/10 rating).'
        }
      ]
    },
    {
      category: 'Working with Dr. Jan Duffy',
      questions: [
        {
          question: 'Do I need a real estate agent for new construction?',
          answer: 'Yes! While builders have sales representatives, they represent the builder\'s interests. A buyer\'s agent like Dr. Jan Duffy represents YOUR interests exclusively. As a VIP New Construction Homes Specialist, she provides additional advantages including early access, priority treatment, and expert negotiation—all while working exclusively for home buyers, not the builder.'
        },
        {
          question: 'What makes Dr. Jan Duffy different from other agents?',
          answer: 'Dr. Jan Duffy is a VIP New Construction Homes Specialist who combines independent client advocacy with deep new construction expertise. She represents home buyers exclusively, has an office at the builder sales office, direct builder relationships, 500+ families helped, and Nevada License S.0197614. Her expertise spans multiple new construction developments, all while working for YOU, not the builder.'
        },
        {
          question: 'How do I get started with Dr. Jan Duffy?',
          answer: 'Contact Dr. Jan Duffy at (702) 299-6607 or DrJanSells@HomesteadWestLasVegas.com. She\'ll provide a free consultation, connect you with preferred lenders for pre-approval, and guide you through the VIP new construction home buying process with exclusive advantages.'
        }
      ]
    }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'FAQ', url: 'https://www.homesteadwestlasvegas.com/faq' }
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
        <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                ⭐ VIP NEW CONSTRUCTION FAQ ⭐
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Homestead West Frequently Asked Questions</h1>
              <p className="text-2xl md:text-3xl mb-4 text-blue-100">New Construction Home Buying</p>
              <p className="text-xl text-blue-200">Expert Answers from VIP New Construction Specialist</p>
            </div>
          </div>
        </header>

        {/* VIP New Construction Homes Specialist Highlight */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">VIP New Construction Homes Specialist Advantages</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively, provides exclusive advantages 
                  throughout your new construction home buying journey—all while having an advocate who works for YOU, not the builder.
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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Exclusive Incentives</h3>
                  <p className="text-gray-700">VIP-only incentives and upgrade packages</p>
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

        {/* FAQ Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Common Homestead West Questions</h2>
              
              <div className="space-y-12">
                {faqs.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h3>
                    <div className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-white rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h4>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Still Have Questions About Homestead West?</h2>
                <p className="text-xl text-center text-gray-700 mb-8">
                  Dr. Jan Duffy is here to answer all your Homestead West new construction questions with VIP expertise
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📞</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Call Dr. Jan About Homestead West</h3>
                    <a href="tel:7022996607" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
                      (702) 299-6607
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📧</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Email Dr. Jan About Homestead West</h3>
                    <a href="mailto:DrJanSells@HomesteadWestLasVegas.com" className="text-blue-600 font-semibold text-lg hover:text-blue-800 break-all">
                      DrJanSells@HomesteadWestLasVegas.com
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📍</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Homestead West Office</h3>
                    <p className="text-gray-700">Homestead West Builder Sales Office</p>
                    <p className="text-gray-700">See footer for address</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Homestead West VIP Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, guide you to your dream home
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022996607"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 299-6607
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
              
              <div className="mt-8 text-blue-200">
                <p className="text-lg font-semibold">Dr. Jan Duffy - VIP New Construction Specialist</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
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
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
            </p>
            
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/homebuying-process" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction home buying</p>
                </a>
                <a href="/buyers-guide" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buyer's Guide</h3>
                  <p className="text-gray-700">Complete guide for new construction buyers</p>
                </a>
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/floor-plans" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Floor Plans</h3>
                  <p className="text-gray-700">Explore available Homestead West home designs</p>
                </a>
                <a href="/about" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Learn about Dr. Jan Duffy's expertise</p>
                </a>
                <a href="/contact" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get answers to your questions</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
