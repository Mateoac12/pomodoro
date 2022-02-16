import { TimerContext } from 'context/TimerContext'
import { useContext } from 'react'

export const useTimerContext = () => {
  const { timer, setTimer } = useContext<any>(TimerContext)

  return { timer, setTimer }
}
