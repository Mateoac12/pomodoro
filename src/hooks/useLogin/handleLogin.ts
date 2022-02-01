import { useState } from 'react'
import {
  GoogleLoginProps,
  GoogleLoginResponse,
  useGoogleLogin,
} from 'react-google-login'

import type { UserData } from './tyles'

export const handleLogin = () => {
  const [user, setUser] = useState<null | UserData>(null)
  const { loaded, signIn } = useGoogleLogin({
    onSuccess,
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
    isSignedIn: true,
  } as GoogleLoginProps)

  console.log('handlelogin => ejecutado')
  function onSuccess(res: GoogleLoginResponse) {
    const { profileObj, tokenId } = res
    const { name, imageUrl, email } = profileObj

    const userData = {
      name,
      imageUrl,
      email,
      tokenId,
    }

    setUser(userData)
  }

  return {
    signIn,
    loaded,
    user,
  }
}
