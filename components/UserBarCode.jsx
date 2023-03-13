import Barcode from 'react-barcode'
import { useUser } from '@supabase/auth-helpers-react'

export const UserBarCode = () => {
  const user = useUser()
  console.log(user)
  return (
    <div className='flex items-center justify-center h-1/2'>
      <Barcode value={user.id} />
    </div>
  )
}
