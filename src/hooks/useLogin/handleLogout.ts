import { useEffect, useState } from 'react'
import { useGoogleLogout } from 'react-google-login'

import type { UserLogout } from './tyles'

export const handleLogout = ({ user = null }: UserLogout) => {
  const [isLogout, setIsLogout] = useState<boolean>(false)

  useEffect(() => {
    if (user === null) return setIsLogout(true)
    setIsLogout(false)
  }, [user])

  const { signOut } = useGoogleLogout({
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
    onLogoutSuccess,
  })

  function onLogoutSuccess() {
    setIsLogout(true)
  }

  return {
    signOut,
    isLogout,
  }
}
