import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "~/app/types/schema"

const createBrowserClient = () => {
  createBrowserSupabaseClient<Database>()
}

export default createBrowserClient
