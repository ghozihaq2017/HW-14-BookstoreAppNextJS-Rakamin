import { NextResponse } from 'next/server';

export function middleware(request) {
  const loginPath = ['/login', '/api/login'];
  if (loginPath.some((v) => v === request.nextUrl.pathname)) {
    return NextResponse.next();
  } else {
    // get access token
    const accessToken = request.cookies.get('accessToken');

    if (accessToken) {
      // Authenticated
      return NextResponse.next();
    } else {
      // Unauthenticated dan redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: [
    '/login',
    '/api/books/:function*',
    '/',
    '/books',
    '/books/:path*',
    '/addbook',
    '/editbook/:path*',
  ],
};
