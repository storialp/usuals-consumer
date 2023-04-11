import { supabase } from "../client"
import YourUsualsBusinesses from "./YourUsualsBusinesses"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { useState, useEffect } from "react"
import { useUser } from "@supabase/auth-helpers-react"
import Image from "next/image"
import Link from "next/link"

export const MyBusinesses = () => {
  const user = "51c720e7-8b8f-4cdd-b6a7-bf58f72d4d7e"
  const [myPrograms, setMyPrograms] = useState([])
  useEffect(() => {
    if (!user) {
      return
    }
    supabase
      .from("businesses")
      .select(
        `
      *,
      profiles_businesses!inner(stamps)
      `
      )
      .eq("profiles_businesses.user_id", user)
      // .eq("profiles_businesses.user_id", user)
      .then((result) => {
        setMyPrograms(result.data)
        console.log(result.data)
      })
    console.log(myPrograms)
  }, [user])
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <YourUsualsBusinesses className="mx-auto h-full w-2/3" />
      </div>
      <div className="mt-8 mx-auto w-5/6 sm:w-full max-w-md">
        <div className="bg-white py-8 px-10 shadow rounded-lg">
          <div className="grid grid-cols-1 gap-4 ">
            {myPrograms.map((item) => (
              <Link href={`/businesses/${item.id}`} key={item.id}>
                <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full object-cover"
                      src={
                        item.logo_url ||
                        "https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/icon+(2).png"
                      }
                      alt={item.business_name}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {item.business_name}
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      Your stamps: {item.profiles_businesses[0].stamps}/
                      {item.stamps_needed}
                    </p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        class="bg-blue-600 h-2.5 rounded-full"
                        style={`width: ${
                          (item.profiles_businesses[0].stamps /
                            item.stamps_needed) *
                          100
                        }%"`}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <a href=" /businesses">
            <PlusCircleIcon className="h-8 w-8 mt-8 mx-auto text-gray-500 hover:text-gray-600" />
          </a>
        </div>
      </div>
    </div>
  )
}
