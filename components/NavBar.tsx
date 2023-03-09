import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='isolate bg-white'>
      <div className='px-6 pt-6 lg:px-8'>
        <div>
          <nav
            className='flex h-9 items-center justify-between'
            aria-label='Global'
          >
            <div className='flex lg:min-w-0 lg:flex-1' aria-label='Global'>
              <Link href='/#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Usuals</span>
              </Link>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12'>
              <a
                key='Log out'
                href='#'
                className='font-semibold text-gray-900 hover:text-gray-900'
              >
                Log out
              </a>
            </div>
          </nav>
          <Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus='true'
              className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden'
            >
              <div className='flex h-9 items-center justify-between'>
                <div className='flex'>
                  <a href='#' className='-m-1.5 p-1.5'>
                    <span className='sr-only'>Usuals</span>
                  </a>
                </div>
                <div className='flex'>
                  <button
                    type='button'
                    className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    <a
                      key='Log out'
                      href='#'
                      className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
