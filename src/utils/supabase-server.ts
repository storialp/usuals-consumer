import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { cookies, headers } from "next/headers"
import type { Database } from "~/app/types/schema"

const createServerClient = () =>
  createServerComponentSupabaseClient<Database>({
    // @ts-expect-error Weird headers error, conflicts with the docs
    headers,
    cookies,
  })

export default createServerClient
