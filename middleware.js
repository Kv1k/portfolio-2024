import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Vérifier si la route correspond à /experience/[job]
  const experienceRoute = /^\/experience\/(\d+)$/;
  const match = pathname.match(experienceRoute);

  if (!match) {
    return NextResponse.next();
  }

  const job = match[1];

  // Si le job n'est pas un entier, rediriger vers la page 404
  if (isNaN(job)) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/experience/:path*'],
};
