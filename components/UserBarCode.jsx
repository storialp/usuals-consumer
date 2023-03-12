import Barcode from 'react-barcode'
import { useUser } from '@supabase/auth-helpers-react'

export const UserBarCode = () => {
  const user = useUser()
  console.log(user)
  return <Barcode value={user.id} />
}
