import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"
import type { Database } from "~/app/types/schema"

export const revalidate = 0

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// }

export async function middleware(req: NextRequest) {
  console.log("middleware ran")
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  // TODO: Come back when PKCE support is clarified in the docs and adapt
  // if (!session && req.nextUrl.pathname !== "/sign-up") {
  //   const url = new URL(req.url)
  //   url.pathname = "/sign-up"
  //   return NextResponse.redirect(url)
  // }
  // if (!session) {
  // }
  if (!session) {
    if (
      req.nextUrl.pathname.startsWith("/sign-up") ||
      req.nextUrl.pathname === "/"
    ) {
      return res
    }
  }
  return res
}
