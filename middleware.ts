import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"
import type { Database } from "~/app/types/schema"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  let session = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.redirect(`${req.nextUrl.origin}/sign-up/}`)
  }
  return res
}
