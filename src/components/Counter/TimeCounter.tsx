import { toTwoDigits } from 'utils/toTwoDigits'
import CircleTracker from './CircleTracker'

interface Props {
  minutes: number
  seconds: number
}

const TimeCounter = ({ minutes, seconds }: Props) => {
  return (
    <div className="relative m-8">
      <div className="relative z-40 shadow-lg bg-slate-50 flex flex-col items-center justify-center p-20 rounded-full w-96 h-96">
        <span className="text-right text-9xl text-orange-400">
          {toTwoDigits(minutes)}
        </span>
        <span className="text-right text-9xl text-orange-500">
          {toTwoDigits(seconds)}
        </span>
      </div>
      <CircleTracker minutes={minutes} seconds={seconds} />
    </div>
  )
}

export default TimeCounter
