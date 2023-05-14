import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { openSearchAtom } from "~/app/businesses/page"
import { useAtom } from "jotai/react"

export default function FakeSearchBar() {
  const [, setOpenSearch] = useAtom(openSearchAtom)
  return (
    <div className="flex justify-center items-center mt-5">
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-md bg-gray-200 w-3/4 h-12 text-base font-semibold text-gray-700 shadow-sm px-5"
        onClick={() => setOpenSearch(true)}
      >
        <MagnifyingGlassIcon className="-ml-0.5 h-6 w-6" aria-hidden="true" />
        Search...
      </button>
    </div>
  )
}
