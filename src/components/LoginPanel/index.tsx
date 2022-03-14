import { useLogin } from 'hooks/useLogin/useLogin'
import LoadingUser from './LoadingUser'
import LoginButton from './LoginButton'
import UserData from './UserData'

const LoginPanel = () => {
  const { user, signIn, loaded, signOut, isLogout } = useLogin()

  if (!loaded) return <LoadingUser />

  return (
    <div className="px-2 py-4 lg:px-8 lg:py-8 border-t">
      {user && !isLogout ? (
        <UserData
          name={user.name as string}
          imageUrl={user.imageUrl as string}
          signOut={signOut}
        />
      ) : (
        <LoginButton signIn={signIn} />
      )}
    </div>
  )
}

export default LoginPanel
