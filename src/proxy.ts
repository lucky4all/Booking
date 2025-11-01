import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function proxy(request: NextRequest) {
    let cookie = request.cookies.get("token")
    if (cookie) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL("/dashboard/login", request.url))
    }
}

export const config = {
    matcher: "/dashboard"
}