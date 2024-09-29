import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NextURL } from "next/dist/server/web/next-url";

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const {pathname, origin} =  request.nextUrl;
    const userData = request.cookies.get('cookieAuth')?.value ? JSON.parse(request.cookies.get('cookieAuth')?.value) : {
        token: ""
    };
    
    if((pathname.startsWith ("/dashboard") || pathname === "/cart") && !userData.token) {
        const dashboardUrl = new NextURL("/login", origin);
        return NextResponse.redirect(dashboardUrl);
    } else {
        return NextResponse.next();
    }
}
