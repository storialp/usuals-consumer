import { useUser } from '@supabase/auth-helpers-react'
import { QRCodeSVG } from 'qrcode.react'
const short = require('short-uuid')
import ReactBarcode from './ReactBarCode'
import YourUsualsCard from './YourUsualsCard'

export const UserCodes = () => {
  const user = useUser().id
  console.log(user)
  const translator = short(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  )
  const shortID = translator.fromUUID(user)
  console.log(shortID)
  const longID = translator.toUUID(shortID)
  console.log(longID)
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        {/* <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
          Your Card
        </h2> */}
        <YourUsualsCard className='mx-auto w-2/5 h-auto' />
      </div>
      <div className='mt-8 mx-auto w-5/6 sm:w-full max-w-md'>
        <div className='bg-white py-8 px-10 shadow rounded-lg sm:px-10'>
          <QRCodeSVG value={shortID} className='mx-auto' />
          <ReactBarcode value={shortID} className='w-full' />
          {/* <QRCodeSVG value='2UJNaZ0icRgeBVV74zIBos' className='mx-auto' />
          <ReactBarcode value='2UJNaZ0icRgeBVV74zIBos' className='w-full' /> */}
        </div>
      </div>
    </div>
  )
}
