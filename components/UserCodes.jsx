import { useUser } from '@supabase/auth-helpers-react'
import { QRCodeSVG } from 'qrcode.react'
const short = require('short-uuid')
import ReactBarcode from './ReactBarCode'

const items = [
  { id: 1 },
  // More items...
]

export const UserCodes = () => {
  // const user = useUser().id
  // console.log(user)
  // const translator = short(
  //   '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  // )
  // const shortID = translator.fromUUID(user)
  // console.log(shortID)
  // const longID = translator.toUUID(shortID)
  // console.log(longID)
  return (
    <div className='mt-8 mx-auto w-5/6 sm:w-full max-w-md'>
      <div className='bg-white py-8 px-10 shadow rounded-lg sm:px-10'>
        {/* <QRCodeSVG value={shortID} className='mx-auto' />
          <ReactBarcode value={shortID} className='w-full' /> */}
        <QRCodeSVG value='2UJNaZ0icRgeBVV74zIBos' className='mx-auto' />
        <ReactBarcode value='2UJNaZ0icRgeBVV74zIBos' className='w-full' />
      </div>
    </div>
  )
}
