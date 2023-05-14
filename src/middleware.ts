import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"
import type { Database } from "~/app/types/schema"

export const revalidate = 0

export async function middleware(req: NextRequest) {
  console.log("middleware ran")
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  // if (!session && !req.nextUrl.pathname.startsWith("/sign-up")) {
  //   return NextResponse.redirect(`${req.nextUrl.origin}/sign-up`)
  // }
  if (session?.user.id || req.nextUrl.pathname.startsWith("/sign-up")) {
    return res
  }
  if (!session?.user.id) {
    return NextResponse.redirect(`${req.nextUrl.origin}/sign-up`)
  }
  if (req.nextUrl.pathname.startsWith("/_next/")) {
    return res
  }

  // return NextResponse.redirect(`${req.nextUrl.origin}/sign-up`)
}
