import Head from 'next/head'
import { Inter } from 'next/font/google'
import SignUp from '@component/components/SignUp'
import NavBar from '@component/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Usuals - Your Favorite Businesses</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <NavBar /> */}
      <SignUp />
    </>
  )
}
