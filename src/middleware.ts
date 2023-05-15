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

  await supabase.auth.getSession()
  console.log(session)

  if (!session && req.nextUrl.pathname !== "/sign-up") {
    const url = new URL(req.url)
    url.pathname = "/sign-up"
    return NextResponse.redirect(url)
  }
  return res
}
