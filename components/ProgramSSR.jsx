import { supabase } from "../client"
import { useRouter } from "next/router"
import { useUser } from "@supabase/auth-helpers-react"
import { useAtom } from "jotai"
import { openSearchAtom, selectedProgramAtom } from "../pages/businesses"
import Image from "next/image"

const ProgramSSR = ({ businessData }) => {
  return (
    businessData && (
      <div className="mt-5">
        <section aria-labelledby="program-heading" className="relative">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16 object-cover">
            <Image
              src={
                businessData.logo_url ||
                "https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/icon+(2).png"
              }
              alt="Business Logo"
              className="object-center mx-auto w-5/6 h-5/6"
              fill
            />
          </div>
          <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
            <div className="lg:col-start-2">
              {/* <h2 id='features-heading' className='font-medium text-gray-500'>
                {business.business_name}
              </h2> */}
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                {businessData.business_name}
              </p>
              <p className="mt-4 text-gray-500">
                {businessData.business_description}
              </p>
              {/* <dl className='mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2'>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className='font-medium text-gray-900'>
                      {feature.name}
                    </dt>
                    <dd className='mt-2 text-gray-500'>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
        </section>
        <div className="relative ml-3 flex justify-center">
          {/* <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-5"
            onClick={() => {
              joinProgram()
              router.push("/my-programs")
            }}
          >
            Join Program
          </button> */}
        </div>
      </div>
    )
  )
  //   )
}

export default ProgramSSR