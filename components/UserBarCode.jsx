import Barcode from 'react-barcode'
import { useUser } from '@supabase/auth-helpers-react'
const short = require('short-uuid')

export const UserBarCode = (props) => {
  const user = useUser().id
  console.log(user)
  const translator = short(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  )
  const shortID = translator.fromUUID(user)
  const longID = translator.toUUID(shortID)
  console.log(longID)
  return (
    <div className='mt-8 mx-auto w-full max-w-md'>
      <div className='bg-white py-8 px-10 shadow sm:rounded-lg sm:px-10'>
        <Barcode value={shortID} renderer='img' width={2} height={150} />
      </div>
    </div>
  )
}
