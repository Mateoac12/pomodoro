import PauseIcon from 'components/Icons/PauseIcon'
import { memo } from 'react'

interface Props {
  pause: () => void
}

const PauseButton = ({ pause }: Props) => {
  return (
    <button
      onClick={pause}
      className="absolute my-8 px-12 gap-2 py-4 text-lg rounded-full flex items-center justify-center top-full left-1/2 -translate-x-1/2 bg-rose-400 shadow-xl shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:bg-rose-500 transition-all"
    >
      <PauseIcon />
      <span className="text-2xl text-white">Pause</span>
    </button>
  )
}

export default memo(PauseButton)
