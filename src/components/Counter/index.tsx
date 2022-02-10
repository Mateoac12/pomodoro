import { useCallback, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { getCounterTime } from 'utils/getCounterTime'
import TimeCounter from './TimeCounter'
import audio from 'assets/audio/alert-ding.mp3'
import { playSound } from 'utils/playSound'
import PlayButton from 'components/PlayButton'
import PauseButton from 'components/PauseButton'

interface TimerState {
  initialTime: Date
  isWorkTime: boolean
}

const initialTime = getCounterTime(1)

const initialState = {
  initialTime,
  isWorkTime: true,
}

export const useNotifications = () => {
  const askPermission = useCallback(() => Notification.requestPermission(), [])

  const playNotification = useCallback(
    (message: string) =>
      askPermission().then(() => {
        if (Notification.permission !== 'denied') {
          return new Notification('Tomatito', {
            lang: 'es-ES',
            body: message,
          })
        }
      }),
    []
  )

  return {
    askPermission,
    playNotification,
  }
}

const Counter = () => {
  const { askPermission, playNotification } = useNotifications()
  const [counterTime, setCounterTime] = useState<TimerState>(initialState)
  const { initialTime, isWorkTime } = counterTime

  askPermission()

  const { pause, minutes, seconds, isRunning, resume, restart } = useTimer({
    autoStart: false,
    expiryTimestamp: initialTime,
    onExpire: handleChangeTimer,
  })

  const pauseCallback = useCallback(() => pause(), [])

  function handleChangeTimer() {
    const timeOfCounter = getCounterTime(1)
    setCounterTime((prevState) => ({
      ...prevState,
      isWorkTime: !prevState.isWorkTime,
      initialTime: timeOfCounter,
    }))

    restart(timeOfCounter)
    playSound(audio)

    playNotification(
      isWorkTime
        ? '¡Tiempo de trabajo finalizado!'
        : '¡Tiempo de descanso finalizado!'
    )
  }

  return (
    <div className="relative bg-stone-50 border flex flex-col mx-auto my-auto rounded-full shadow-md">
      <TimeCounter
        minutes={minutes}
        seconds={seconds}
        isWorkTime={isWorkTime}
      />
      {isRunning ? (
        <PauseButton pause={pauseCallback} />
      ) : (
        <PlayButton resume={resume} />
      )}
    </div>
  )
}

export default Counter
