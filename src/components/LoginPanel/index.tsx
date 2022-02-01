import { useLogin } from 'hooks/useLogin/useLogin'
import LoadingUser from './LoadingUser'
import LoginButton from './LoginButton'
import UserData from './UserData'

const LoginPanel = () => {
  const { user, signIn, loaded, signOut, isLogout } = useLogin()

  if (!loaded) return <LoadingUser />

  return (
    <div className="p-8 border-t">
      {user && !isLogout ? (
        <UserData name={user.name} imageUrl={user.imageUrl} signOut={signOut} />
      ) : (
        <LoginButton signIn={signIn} />
      )}
    </div>
  )
}

export default LoginPanel
