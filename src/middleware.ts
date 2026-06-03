import { NextResponse, type NextRequest } from 'next/server';

const WWW_HOST = 'www.yueclinic.com';
const APEX_ORIGIN = 'https://yueclinic.com';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();

  if (host !== WWW_HOST) {
    return NextResponse.next();
  }

  const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, APEX_ORIGIN);
  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: '/:path*',
};
