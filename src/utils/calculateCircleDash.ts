interface TimeProps {
  minutes: number
  seconds: number
}

export const calculateCicrleDash = ({ minutes, seconds }: TimeProps) => {
  const normalizeMinutes = minutes * 60

  const totalSecondsLeft = normalizeMinutes + seconds
  const totalSecondsTracked = 1500 // TODO: son 25 minutos, luego debo hacerlo dinamico

  const timeDiferenceFraction = totalSecondsLeft / totalSecondsTracked
  const circleTime =
    timeDiferenceFraction -
    (1 / totalSecondsTracked) * (1 - timeDiferenceFraction)

  return {
    circleTime,
  }
}
