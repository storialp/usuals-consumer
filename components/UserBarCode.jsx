import Barcode from 'react-barcode'
import { useUser } from '@supabase/auth-helpers-react'
const short = require('short-uuid')

export const UserBarCode = () => {
  const user = useUser().id
  console.log(user)
  const translator = short()
  const shortID = translator.fromUUID(user)
  const longID = translator.toUUID(shortID)
  console.log(longID)
  return (
    <div className='flex items-center justify-center'>
      <Barcode value={shortID} width='1' />
    </div>
  )
}
