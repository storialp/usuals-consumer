import YourUsualsBusinesses from "./YourUsualsBusinesses"
import { PlusCircleIcon, GiftIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { Business, Stamps, ProfilesBusinesses } from "~/app/types/types"
import createServerClient from "~/utils/supabase-server"

export const revalidate = 0

type MyPrograms = Business & { profiles_businesses: ProfilesBusinesses[] }
// @ts-expect-error
export const UserPrograms: React.FC<{ user: string }> = async ({ user }) => {
  const supabase = createServerClient()
  const { data: myPrograms } = await supabase
    .from("businesses")
    .select(
      `
      *,
      profiles_businesses!inner(*)
      `
    )
    .eq("profiles_businesses.user_id", user)
    .returns<MyPrograms[]>()
  console.log(myPrograms)
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <YourUsualsBusinesses className="mx-auto h-full w-2/3" />
      </div>
      <div className="mt-8 mx-auto w-5/6 sm:w-full max-w-md">
        <div className="bg-white py-8 px-10 shadow rounded-lg">
          <div className="grid grid-cols-1 gap-4 ">
            {myPrograms &&
              myPrograms.map((item) => (
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
                      <div className="w-full flex flex-row relative items-center">
                        <div className="w-5/6 bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-blue-600 h-3 rounded-full"
                            style={{
                              width: `${Math.min(
                                (item.profiles_businesses[0].stamps /
                                  item.stamps_needed) *
                                  100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                        <GiftIcon className="h-5 w-auto" />
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
