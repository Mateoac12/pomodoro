import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

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

  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    const { minutes, seconds } = counter

    const endSecond = seconds === 0
    const endMinute = minutes === 0

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
