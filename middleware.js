import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(request) {
    const token = await getToken({ req: request, secret: process.env.JWT_SECRET });
    console.log(request.url)
    if (!token) {
        console.log(token);
        return NextResponse.redirect(new URL(`/login?callbackUrl=${request.nextUrl.pathname}`, request.url))
    }
    // else {
    //     console.log(token)
    //     if(token.role=='admin' && request.nextUrl.pathname=='/getallusers') {
    //         return NextResponse.next();
    //     }
    // }
    return NextResponse.next();
}

export const config = {
    matcher: ['/getallassets', '/getallemps', '/getallusers', '/getallissues']
}