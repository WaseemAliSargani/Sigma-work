///* 1 method of Middleware
import { NextResponse } from 'next/server'
 
//* This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.json({message: "This is json in message"}) 
          //* 1 :  you can serve or give json in request form
     return NextResponse.redirect(new URL('/contact', request.url))
//* 1: if come Request on /about then it "Convert" into "/contact" then come contact page, if refresh page it same 
}
 
//* See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}



////* 2 method of Middlewawre
// import { NextResponse } from 'next/server'
 
// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     //* if come request on /about then server,come /contact page but in searchBar is /about
//     return NextResponse.redirect(new URL('/contact', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     ///* if come request on /dashboard then Don't come /dashboard but come /user but on searchBar it is /dashboard
//     return NextResponse.rewrite(new URL('/', request.url))
//     ///* rewrite : if use "rewrite" and request on /dashboard then  searchBar is localhost:3000/dashboard
// //* redirect : if use "redirect" and request on /dashboard then  searchBar is only localhost:3000 not come /dashboard
//   }
// }