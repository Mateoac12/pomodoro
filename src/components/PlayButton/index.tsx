import PlayIcon from 'components/Icons/PlayIcon'

interface Props {
  resume: () => void
}

const PlayButton = ({ resume }: Props) => {
  return (
    <button
      onClick={resume}
      className="absolute my-8 px-12 gap-2 py-4 text-lg rounded-full flex items-center justify-center top-full left-1/2 -translate-x-1/2 bg-green-400 shadow-xl shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:bg-green-500 transition-all"
    >
      <PlayIcon />
      <span className="text-2xl text-white">Play</span>
    </button>
  )
}

export default PlayButton
