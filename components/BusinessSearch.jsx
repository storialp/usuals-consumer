import { Fragment, useState } from 'react'
import { UsersIcon } from '@heroicons/react/24/outline'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { supabase } from '../client'

// const people = [
//   { id: 1, name: 'Leslie Alexander', url: '#' },
//   // More people...
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BusinessSearch() {
  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(true)

  const [businessList, setBusinessList] = useState([])

  const businessListQuery =
    query === ''
      ? []
      : supabase
          .from('businesses')
          .select()
          .textSearch('business_name', { query })
          .then((result) => {
            setBusinessList(result.data)
          })

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'>
              <Combobox onChange={(item) => (window.location = item.logo_url)}>
                <Combobox.Input
                  className='w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 focus:ring-0 sm:text-sm'
                  placeholder='Search...'
                  onChange={(event) => setQuery(event.target.value)}
                />

                {businessList.length > 0 && (
                  <Combobox.Options
                    static
                    className='-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800'
                  >
                    {businessList.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item}
                        className={({ active }) =>
                          classNames(
                            'cursor-default select-none rounded-md px-4 py-2',
                            active && 'bg-indigo-600 text-white'
                          )
                        }
                      >
                        {item.name}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && businessList.length === 0 && (
                  <div className='py-14 px-4 text-center sm:px-14'>
                    <UsersIcon
                      className='mx-auto h-6 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                    <p className='mt-4 text-sm text-gray-900'>
                      No businesses found using that search term.
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
