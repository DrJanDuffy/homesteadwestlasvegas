/**
 * Single source of truth for NAP, license, brokerage, and site URL (GBP / JSON-LD alignment).
 * Import from here instead of duplicating strings across pages and schema.
 */
export const SITE_URL = 'https://www.homesteadwestlasvegas.com' as const

export const BUSINESS_NAME = 'Homestead West | Homes by Dr Jan Duffy' as const
export const BUSINESS_NAME_SHORT = 'Homestead West Las Vegas' as const

export const BROKERAGE_NAME = 'Berkshire Hathaway HomeServices Nevada Properties' as const
export const AGENT_NAME = 'Dr. Jan Duffy' as const
/** Nevada license as shown on GBP / footer (includes LLC entity suffix). */
export const LICENSE_ID = 'S.0197614.LLC' as const
export const LICENSE_DISPLAY = `Nevada Real Estate License ${LICENSE_ID}` as const

export const PHONE_E164 = '+17022996607' as const
export const PHONE_DISPLAY = '(702) 299-6607' as const
export const PHONE_TEL_HREF = 'tel:7022996607' as const

export const EMAIL = 'DrJanSells@HomesteadWestLasVegas.com' as const

export const ADDRESS = {
  streetAddress: '5592 Dapple Gray Rd',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89149',
  addressCountry: 'US',
} as const

/** Stable @id for RealEstateAgent in JSON-LD (GEO entity consistency). */
export const AGENT_SCHEMA_ID = `${SITE_URL}/#agent` as const
/** Stable @id for LocalBusiness in JSON-LD. */
export const BUSINESS_SCHEMA_ID = `${SITE_URL}/#business` as const

/**
 * First-party, citable RealEstateAgent description for JSON-LD (no sales volume or review counts).
 */
export const AGENT_JSONLD_DESCRIPTION =
  'Las Vegas real estate agent and VIP New Construction Homes Specialist. Ph.D. in Market Research & Consumer Behavior. Nevada real estate license S.0197614.LLC. Berkshire Hathaway HomeServices Nevada Properties. Represents home buyers in new construction including Homestead West.'
