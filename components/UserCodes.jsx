import { useUser } from '@supabase/auth-helpers-react'
import { QRCodeSVG } from 'qrcode.react'
const short = require('short-uuid')
import ReactBarcode from './ReactBarCode'

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
    <div className='mt-8 mx-auto w-full max-w-md'>
      <div className='bg-white py-8 px-10 shadow sm:rounded-lg sm:px-10'>
        <QRCodeSVG value={shortID} className='mx-auto' />
        <ReactBarcode value={shortID} className='w-full' />
        {/* <QRCodeSVG value='vhgiusSGYUDnvsfdjkngcus' className='mx-auto' />
        <ReactBarcode value='vhgiusSGYUDnvsfdjkngcus' className='w-full' /> */}
      </div>
    </div>
  )
}
