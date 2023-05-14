import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"
import type { Database } from "~/app/types/schema"

export async function middleware(req: NextRequest) {
  console.log("middleware ran")
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  let {
    data: { session },
  } = await supabase.auth.getSession()
  if (req.nextUrl.pathname.startsWith("/_next/")) {
    return true
  }
  if (!session?.user.id && req.nextUrl.pathname !== "/sign-up") {
    return NextResponse.redirect(`${req.nextUrl.origin}/sign-up`)
  }
  return res
}
