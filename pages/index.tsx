import Head from "next/head"
import { Inter } from "next/font/google"
import SignUp from "../components/SignUp"
import { useUser } from "@supabase/auth-helpers-react"
import { UserCodes } from "../components/UserCodes"
import NavBar from "../components/NavBar"
import { useRouter } from "next/router"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const user = "51c720e7-8b8f-4cdd-b6a7-bf58f72d4d7e"
  return (
    <>
      <Head>
        <title>Usuals - Your Favorite Businesses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user && <NavBar />}
      {user ? <UserCodes /> : <SignUp />}
      {/* <NavBar />
      <UserCodes /> */}
    </>
  )
}
