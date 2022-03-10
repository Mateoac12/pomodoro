import { useNotifications } from 'hooks/useNotification'

import PauseButton from 'components/PauseButton'
import PlayButton from 'components/PlayButton'
import TimeCounter from './TimeCounter'
import { useTimerControl } from 'hooks/useTimerControl'

const Counter = () => {
  const { askPermission, playNotification } = useNotifications()
  askPermission()

  const { isRunning, maxTime, minutes, pause, resume, seconds, isWorkTime } =
    useTimerControl({ playNotification })

  return (
    <>
      <div className="relative bg-stone-50 border flex flex-col mx-auto my-20 mb-40 lg:mb-auto lg:my-auto rounded-full shadow-md">
        <TimeCounter
          maxTime={maxTime}
          minutes={minutes}
          seconds={seconds}
          isWorkTime={isWorkTime}
        />
        {isRunning ? (
          <PauseButton pause={pause} />
        ) : (
          <PlayButton resume={resume} />
        )}
      </div>
    </>
  )
}

export default Counter
