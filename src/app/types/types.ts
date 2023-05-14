import { Database } from "./schema"

export type Business = Database["public"]["Tables"]["businesses"]["Row"]
export type Stamps =
  Database["public"]["Tables"]["profiles_businesses"]["Row"]["stamps"]
export type ProfilesBusinesses =
  Database["public"]["Tables"]["profiles_businesses"]["Row"]
