import Head from "next/head"
import { Inter } from "next/font/google"
import NavBar from "~/components/NavBar"
import Program from "~/components/Program"
import createServerClient from "~/utils/supabase-server"

const inter = Inter({ subsets: ["latin"] })
export default async function Home({
  params,
}: {
  params: { businessUUID: string }
}) {
  const supabase = createServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const { data: businessData } = await supabase
    .from("businesses")
    .select("*")
    .eq("id", params.businessUUID)
    .single()
  const { data: stamps, error } = await supabase
    .from("profiles_businesses")
    .select("stamps")
    .eq("business_id", params.businessUUID)
    .eq("user_id", session?.user.id)
    .single()
  return (
    <>
      <Head>
        <title>Usuals - Your Favorite Businesses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {session ? <NavBar /> : <SignUp />} */}
      <NavBar />
      {session?.user.id && businessData?.id && (
        // @ts-expect-error Async Server Component
        <Program
          businessData={businessData}
          user={session.user.id}
          stamps={stamps?.stamps || null}
        />
      )}
    </>
  )
}
