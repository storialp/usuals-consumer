"use client"
import { Fragment, useState, useEffect } from "react"
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline"
import { Combobox, Dialog, Transition } from "@headlessui/react"
import { useAtom } from "jotai/react"
import { openSearchAtom } from "~/app/businesses/page"
import { useRouter } from "next/navigation"
import type { Business } from "~/app/types/types"
import classNames from "~/utils/classNames"
import { useSupabase } from "~/providers/supabase-provider"

export default function BusinessSearch() {
  const { supabase } = useSupabase()
  const [query, setQuery] = useState("")
  const [openSearch, setOpenSearch] = useAtom(openSearchAtom)
  const [businessList, setBusinessList] = useState<Business[]>([])
  const router = useRouter()
  async function getBusinesses(query: string) {
    const { data, error } = await supabase
      .from("businesses")
      .select()
      .textSearch("business_name", query)
    if (data) {
      setBusinessList(data)
      console.log(data)
      return data
    }
    if (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    query.length < 3 && getBusinesses(query)
  }, [query])

  return (
    <Transition.Root
      show={openSearch}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpenSearch}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox
                onChange={(business: Business) => {
                  console.log(business)
                  router.push(`/businesses/${business.id}`)
                  setOpenSearch(false)
                }}
              >
                <Combobox.Input
                  className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  onChange={(event) => {
                    setQuery(event.target.value)
                    console.log(query)
                  }}
                />

                {businessList.length > 0 && (
                  <Combobox.Options
                    static
                    className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                  >
                    {businessList.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item}
                        className={({ active }) =>
                          classNames(
                            "cursor-default select-none rounded-md px-4 py-2",
                            active && "bg-blue-600 text-white"
                          )
                        }
                      >
                        {item.business_name}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && businessList.length === 0 && (
                  <div className="py-14 px-4 text-center sm:px-14">
                    <BuildingStorefrontIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-900">
                      No businesses found using that search term.
                    </p>
                    <p className="mt-4 text-sm text-gray-900">
                      Try typing the first word.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
