import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

interface CounterValues {
  minutes: number
  seconds: number
}

let interval: ReturnType<typeof setTimeout>

export const useTimer = () => {
  const [counter, setCounter] = useState<CounterValues>({
    minutes: 25,
    seconds: 0,
  })

  const handleChangeTime = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCounter({
      minutes: Number(value),
      seconds: 0,
    })
  }, [])

  // if the first component render, I won't start the tracker, only when the user click on the button
  const isInitialRender = useRef(true)

  // variables to control the timer when the browser is minimized
  const timeInPause = useRef(0)
  const currentTime = useRef(0)

  const newTimeToUse = useRef(counter as CounterValues)

  const isBrowserHidden = useMemo(() => document.hidden, [document.hidden])

  useEffect(() => {
    if (isInitialRender.current) return

    if (isBrowserHidden) {
      timeInPause.current = new Date().getTime()
      clearInterval(interval)

      newTimeToUse.current = { ...counter }
    } else {
      currentTime.current = new Date().getTime()
      let timeLapse = Math.ceil(
        (currentTime.current - timeInPause.current) / 1000
      )

      while (timeLapse > 0) {
        if (timeLapse >= 60) {
          newTimeToUse.current.minutes -= 1
          timeLapse -= 60
        } else {
          if (newTimeToUse.current.seconds - timeLapse <= 0) {
            newTimeToUse.current.minutes -= 1
            newTimeToUse.current.seconds =
              60 - (timeLapse - newTimeToUse.current.seconds)
          } else {
            newTimeToUse.current.seconds -= timeLapse
          }
          timeLapse = 0
        }
      }

      setCounter(newTimeToUse.current)
    }
  }, [isBrowserHidden])

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    const { minutes, seconds } = counter

    const endSecond = seconds <= 0
    const endMinute = minutes <= 0

    interval = setTimeout(() => {
      setCounter((prev) => ({
        minutes: endSecond ? prev.minutes - 1 : prev.minutes,
        seconds: endSecond ? 59 : prev.seconds - 1,
      }))
    }, 1000)

    if (endMinute && endSecond) return clearInterval(interval)

    return () => clearTimeout(interval)
  }, [counter])

  const handlePause = () => clearTimeout(interval)
  const handlePlay = () => setCounter((prev) => ({ ...prev }))

  return {
    handleChangeTime,
    handlePlay,
    handlePause,
    counter,
  }
}
