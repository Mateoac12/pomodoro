import GoogleIcon from 'components/Icons/GoogleIcon'

interface Props {
  signIn: () => void
}

const LoginButton = ({ signIn }: Props) => {
  const handleClick = () => signIn()

  return (
    <button
      className="px-4 py-2 text-lg text-slate-600 border rounded-sm flex items-center gap-2 hover:shadow-lg hover:shadow-slate-100 transition-shadow"
      onClick={handleClick}
    >
      <GoogleIcon />
      Login con Google
    </button>
  )
}

export default LoginButton
