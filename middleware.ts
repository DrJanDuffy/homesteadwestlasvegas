import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const needsRedirect = 
    hostname === 'homesteadwestlasvegas.com' || // non-www
    url.protocol === 'http:'; // HTTP

  // If redirect needed, combine both redirects into one
  if (needsRedirect) {
    // Always redirect to canonical: https://www.homesteadwestlasvegas.com
    url.hostname = 'www.homesteadwestlasvegas.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};


