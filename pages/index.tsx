import Head from 'next/head'
import { Inter } from 'next/font/google'
import SignUp from '@component/components/SignUp'
import { useSession, useUser } from '@supabase/auth-helpers-react'
import { UserCodes } from '@component/components/UserCodes'
import NavBar from '@component/components/NavBar'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const user = useUser()
  return (
    <>
      <Head>
        <title>Usuals - Your Favorite Businesses</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {user && <NavBar />}
      {user ? <UserCodes /> : <SignUp />}
      {/* <NavBar />
      <UserCodes /> */}
    </>
  )
}
