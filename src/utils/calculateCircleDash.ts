interface TimeProps {
  minutes: number
  seconds: number
  totalSeconds: number
}

export const calculateCicrleDash = ({
  minutes,
  seconds,
  totalSeconds,
}: TimeProps) => {
  const normalizeMinutes = minutes * 60
  const totalSecondsLeft = normalizeMinutes + seconds
  const totalSecondsTracked = totalSeconds

  const timeDiferenceFraction = totalSecondsLeft / totalSecondsTracked
  const circleTime =
    timeDiferenceFraction -
    (1 / totalSecondsTracked) * (1 - timeDiferenceFraction)

  return {
    circleTime,
  }
}
