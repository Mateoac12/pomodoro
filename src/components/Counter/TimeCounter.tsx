import { toTwoDigits } from 'utils/toTwoDigits'
import CircleTracker from './CircleTracker'

interface Props {
  minutes: number
  seconds: number
  isWorkTime: boolean
  maxTime: number
}

const TimeCounter = ({ minutes, seconds, isWorkTime, maxTime }: Props) => {
  return (
    <div className="relative m-8">
      <div className="relative z-30 shadow-lg bg-slate-50 flex flex-col items-center justify-center p-20 rounded-full w-72 h-72 lg:w-96 lg:h-96">
        <span
          className={`text-right text-8xl lg:text-9xl ${
            isWorkTime ? 'text-orange-400' : 'text-green-500'
          }`}
        >
          {toTwoDigits(minutes)}
        </span>
        <span
          className={`text-right text-8xl lg:text-9xl ${
            isWorkTime ? 'text-orange-500' : 'text-green-600'
          }`}
        >
          {toTwoDigits(seconds)}
        </span>
      </div>
      <CircleTracker
        maxTime={maxTime}
        minutes={minutes}
        seconds={seconds}
        isWorkTime={isWorkTime}
      />
    </div>
  )
}

export default TimeCounter
