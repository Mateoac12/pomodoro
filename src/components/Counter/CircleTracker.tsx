import { useEffect, useMemo, useState } from 'react'
import { calculateCicrleDash } from 'utils/calculateCircleDash'

interface Props {
  minutes: number
  seconds: number
  isWorkTime: boolean
}

const CircleTracker = ({ minutes, seconds, isWorkTime }: Props) => {
  const [circleDash, setCircleDash] = useState<string>('283')
  const totalSeconds = useMemo(() => minutes * 60 || 60, [isWorkTime])

  useEffect(() => {
    const { circleTime } = calculateCicrleDash({
      minutes,
      seconds,
      totalSeconds,
    })

    setCircleDash(`${(circleTime * 283).toFixed(0)} 283`)
  }, [seconds, minutes])

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute top-0 left-0 w-96 h-96"
      style={{
        transform: 'scale(1.15)',
      }}
    >
      <g
        fill="none"
        stroke="none"
        className={isWorkTime ? 'text-orange-200' : 'text-green-300'}
      >
        <circle
          strokeWidth={4}
          stroke="#E5E7EB"
          cx="50"
          cy="50"
          r="45"
        ></circle>
        <path
          id="base-timer-path-remaining"
          strokeDasharray={circleDash}
          strokeWidth={4}
          strokeLinecap="round"
          transform="rotate(90)"
          className="origin-center"
          style={{
            transition: '1s linear all',
          }}
          fillRule="nonzero"
          stroke="currentColor"
          d="
    M 50, 50
    m -45, 0
    a 45,45 0 1,0 90,0
    a 45,45 0 1,0 -90,0
  "
        ></path>
      </g>
    </svg>
  )
}

export default CircleTracker
