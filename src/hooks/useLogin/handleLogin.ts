import { useState } from 'react'
import {
  GoogleLoginProps,
  GoogleLoginResponse,
  useGoogleLogin,
} from 'react-google-login'

import type { UserData } from './tyles'

export const handleLogin = () => {
  const [user, setUser] = useState<Partial<UserData>>({})
  const { loaded, signIn } = useGoogleLogin({
    onSuccess,
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
    isSignedIn: true,
  } as GoogleLoginProps)

  function onSuccess(res: GoogleLoginResponse) {
    const { profileObj, tokenId, tokenObj } = res
    const loginHint = tokenObj.login_hint

    const { name, imageUrl, email } = profileObj

    const userData = {
      name,
      imageUrl,
      email,
      tokenId,
      loginHint
    }

    setUser(userData)
  }

  return {
    signIn,
    loaded,
    user,
  }
}
