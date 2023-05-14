import { Inter } from "next/font/google"
import "./globals.css"
import SupabaseProvider from "../providers/supabase-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Usuals Consumer App",
  description: "One place for all your loyalty programs",
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  )
}
