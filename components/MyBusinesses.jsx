import { supabase } from '@component/client'
import YourUsualsBusinesses from './YourUsualsBusinesses'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { useUser } from '@supabase/auth-helpers-react'

export const MyBusinesses = () => {
  const user = useUser()?.id
  const [myPrograms, setMyPrograms] = useState([])
  useEffect(() => {
    if (!user) {
      return
    }
    supabase
      .from('member_programs')
      .select('business_id')
      .eq('user_id', user)
      .then((result) => {
        console.log(result)
        const businessesIds = result.data.map((item) => item.business_id)
        console.log(businessesIds)
        supabase
          .from('businesses')
          .select()
          .in('id', businessesIds)
          .then((result) => {
            console.log(result)
            setMyPrograms(result.data)
          })
      })
    console.log(myPrograms)
  }, [user, myPrograms])
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <YourUsualsBusinesses className='mx-auto h-full w-2/3' />
      </div>
      <div className='mt-8 mx-auto w-5/6 sm:w-full max-w-md'>
        <div className='bg-white py-8 px-10 shadow rounded-lg'>
          <div className='grid grid-cols-1 gap-4 '>
            {myPrograms.map((item) => (
              <div
                className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400'
                key={item.id}
              >
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={item.logo_url}
                    alt={item.business_name}
                  />
                </div>
                <div className='min-w-0 flex-1'>
                  <a href='#' className='focus:outline-none'>
                    <span className='absolute inset-0' aria-hidden='true' />
                    <p className='text-sm font-medium text-gray-900'>
                      {item.business_name}
                    </p>
                    <p className='truncate text-sm text-gray-500'>
                      Your Points
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <a href=' /businesses'>
            <PlusCircleIcon className='h-8 w-8 mt-8 mx-auto text-gray-500 hover:text-gray-600' />
          </a>
        </div>
      </div>
    </div>
  )
}
