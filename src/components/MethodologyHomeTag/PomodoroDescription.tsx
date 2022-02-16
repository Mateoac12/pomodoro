import { memo } from 'react'

const PomodoroDescription = () => {
  return (
    <p>
      Nuestro Pomodoro consiste en una sesión de{' '}
      <span className="font-bold text-orange-600">25</span> minutos de trabajo y{' '}
      <span className="font-bold text-green-600">5</span> minutos de descanso.
      <hr className="my-2" />
      Una vez que se hayan realizado{' '}
      <span className="font-bold text-orange-600">4</span> vueltas de trabajo,
      habrá un descanso de <span className="font-bold text-green-600">15</span>{' '}
      minutos!
    </p>
  )
}

export default memo(PomodoroDescription)
