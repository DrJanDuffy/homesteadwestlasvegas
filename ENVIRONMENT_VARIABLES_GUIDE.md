# Environment Variables Configuration Guide

## Required Environment Variables for Homestead West Las Vegas

### Google Analytics & SEO
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=your-google-verification-code-here
```

### Contact Information (for dynamic content)
```bash
NEXT_PUBLIC_CONTACT_PHONE=7022221988
NEXT_PUBLIC_CONTACT_EMAIL=DrJanSells@HomesteadWestLasVegas.com
NEXT_PUBLIC_OFFICE_ADDRESS=5592 N Dapple Gray Rd, Las Vegas, NV 89149
```

### Century Communities Integration (if available)
```bash
CENTURY_COMMUNITIES_API_KEY=your-century-api-key
CENTURY_COMMUNITIES_BASE_URL=your-century-base-url
```

## Already Configured Environment Variables

### Google Maps API
- `VITE_GOOGLE_MAPS_API_KEY` ✅

### Follow Up Boss CRM
- `FOLLOW_UP_BOSS_BASE_URL` ✅
- `FOLLOW_UP_BOSS_API_KEY` ✅
- `FOLLOW_UP_BOSS_AGENT_ID` ✅

### SMS Auto Reply
- `SMS_AUTO_REPLY_ENABLED` ✅
- `SMS_AUTO_REPLY_MESSAGE` ✅
- `SMS_PHONE_NUMBER` ✅

### RealScout Integration
- `NEXT_PUBLIC_REALSCOUT_AGENT_ID` ✅

### AI Integration
- `OPENROUTER_API_KEY` ✅
- `openaikey` ✅

## Setup Instructions

1. **Google Analytics 4**: Create a GA4 property and add the measurement ID
2. **Google Search Console**: Verify your domain and add the verification code
3. **Century Communities**: Contact Century Communities for API access (if available)

## Benefits of These Environment Variables

- **Dynamic Content**: Contact information can be updated without code changes
- **Analytics Tracking**: Monitor website performance and user behavior
- **SEO Optimization**: Google Search Console verification for better rankings
- **API Integration**: Real-time data from Century Communities (if available)
- **Lead Management**: Follow Up Boss integration for CRM functionality
- **Automated Messaging**: SMS auto-reply for immediate lead response
