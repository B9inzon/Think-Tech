import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NextURL } from "next/dist/server/web/next-url";

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const {pathname, origin} =  request.nextUrl;    
    
    if((pathname.startsWith ("/dashboard") || pathname === "/cart") && !request.cookies.get('cookieAuth')?.value) {
        const dashboardUrl = new NextURL("/login", origin);
        return NextResponse.redirect(dashboardUrl);
    } else {
        return NextResponse.next();
    }
}
