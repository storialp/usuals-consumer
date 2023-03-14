import { supabase } from '../client'

async function signInWIthGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

async function signInWithMicrosoft() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
  })
}

export default function SignUp() {
  return (
    <>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <svg
            viewBox='0 0 300 300'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mx-auto w-auto h-12'
          >
            <path
              d='M182.852 169.179V74.3636H221.418V238H184.024V208.916H182.32C178.627 218.078 172.554 225.571 164.102 231.395C155.722 237.219 145.388 240.131 133.101 240.131C122.377 240.131 112.895 237.751 104.656 232.993C96.4888 228.163 90.0968 221.168 85.4803 212.006C80.8638 202.773 78.5556 191.622 78.5556 178.554V74.3636H117.121V172.588C117.121 182.957 119.962 191.196 125.644 197.304C131.325 203.412 138.783 206.466 148.016 206.466C153.698 206.466 159.202 205.081 164.529 202.311C169.855 199.541 174.223 195.422 177.632 189.953C181.112 184.413 182.852 177.489 182.852 169.179Z'
              fill='black'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M225 285H255C271.569 285 285 271.569 285 255V225H300V255C300 279.853 279.853 300 255 300H225V285ZM225 15H255C271.569 15 285 28.4315 285 45V75H300V45C300 20.1472 279.853 0 255 0H225V15ZM75 0H45C20.1472 0 0 20.1472 0 45V75H15V45C15 28.4315 28.4315 15 45 15H75V0ZM75 285V300H45C20.1472 300 0 279.853 0 255V225H15V255C15 271.569 28.4315 285 45 285H75Z'
              fill='#2563EB'
            />
          </svg>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            <a
              href='#'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Also works for signing up
            </a>
          </p>
        </div>

        <div className='mt-8 mx-auto w-5/6 sm:w-full max-w-md'>
          <div className='bg-white py-8 px-10 shadow rounded-lg'>
            <div className='grid grid-cols-1 gap-4 '>
              <button onClick={() => signInWIthGoogle()}>
                <div className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='h-10 w-10 rounded-full'
                      preserveAspectRatio='none'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 186.69 190.5'
                      aria-hidden='true'
                    >
                      <g transform='translate(1184.583 765.171)'>
                        <path
                          clipPath='none'
                          mask='none'
                          d='M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z'
                          fill='#4285f4'
                        />
                        <path
                          clipPath='none'
                          mask='none'
                          d='M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z'
                          fill='#34a853'
                        />
                        <path
                          clipPath='none'
                          mask='none'
                          d='M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z'
                          fill='#fbbc05'
                        />
                        <path
                          d='M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z'
                          fill='#ea4335'
                          clipPath='none'
                          mask='none'
                        />
                      </g>
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <a className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <h2 className='text-lg font-semibold text-gray-900'>
                        Continue with Google
                      </h2>
                    </a>
                  </div>
                </div>
              </button>
              <button>
                <div className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='h-10 w-10'
                      preserveAspectRatio='none'
                      viewBox='0 0 23 23'
                      aria-hidden='true'
                    >
                      <path fill='#f3f3f3' d='M0 0h23v23H0z' />
                      <path fill='#f35325' d='M1 1h10v10H1z' />
                      <path fill='#81bc06' d='M12 1h10v10H12z' />
                      <path fill='#05a6f0' d='M1 12h10v10H1z' />
                      <path fill='#ffba08' d='M12 12h10v10H12z' />
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <a href='#' className='focus:outline-none'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      <p className='text-lg font-semibold text-gray-900'>
                        Continue with Microsoft
                      </p>
                    </a>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
