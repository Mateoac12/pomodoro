import LogoutIcon from 'components/Icons/LogoutIcon'

interface Props {
  name: string
  imageUrl: string
  signOut: () => void
  otherData?: {
    [key: string]: string
  }
}

const UserData = ({ name, imageUrl, signOut }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full" />
      <p className="text-lg font-semibold">{name}</p>
      <button
        className="p-2 text-slate-600 border rounded-md shadow text-lg ml-auto hover:text-orange-600 hover:bg-orange-100 hover:border-orange-100 hover:shadow-orange-200 hover:shadow-lg transition-shadow"
        onClick={signOut}
      >
        <LogoutIcon />
      </button>
    </div>
  )
}

export default UserData
