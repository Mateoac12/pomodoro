import { handleLogin } from './handleLogin'
import { handleLogout } from './handleLogout'

export const useLogin = () => {
  const { signIn, user, loaded } = handleLogin()
  const { signOut, isLogout } = handleLogout({ user } as any)

  return {
    loaded,
    signIn,
    user,
    signOut,
    isLogout,
  }
}
