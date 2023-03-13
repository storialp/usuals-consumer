import Barcode from 'react-barcode'
import { useUser } from '@supabase/auth-helpers-react'
import { Translator } from 'short-uuid'

export const UserBarCode = () => {
  const user = useUser().id
  const shortID = translator.fromUUID(user)
  return (
    <div className='flex items-center justify-center'>
      <Barcode value={shortID} width='1' />
    </div>
  )
}
