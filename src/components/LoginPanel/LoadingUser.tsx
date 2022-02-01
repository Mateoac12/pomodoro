import Placeholder from 'components/Placeholder'

const LoadingUser = () => {
  return (
    <div className="p-8 border-t flex items-center gap-4">
      <Placeholder id="avatar" w={40} h={40} />
      <Placeholder id="text-avatar" w={100} h={20} />
    </div>
  )
}

export default LoadingUser
