import { trackerOptions } from 'config/navbarOptions'
import React, { createContext, useEffect, useState } from 'react'
import { getCounterTime } from 'utils/getCounterTime'

interface TimerState {
  time: Date
  isWorkTime: boolean
  step: number
  laps: number
  methodId: number
  minutes: number
  seconds: number
  maxTime: number
}

export const TimerContext = createContext({})

const initialCounterTime = getCounterTime(trackerOptions[0].rules[0].time)
const initialWorkTime = trackerOptions[0].rules[0].isWorkTime

const TimerProvider: React.FC = ({ children }) => {
  const initialState = {
    time: initialCounterTime,
    isWorkTime: initialWorkTime,
    step: 0,
    laps: 0,
    methodId: 0,
    minutes: trackerOptions[0].rules[0].time,
    seconds: 0,
    maxTime: trackerOptions[0].rules[0].time,
  }

  const localInfo = JSON.parse(localStorage.getItem('timer') as string)
    ? {
        ...JSON.parse(localStorage.getItem('timer') as string),
        time: getCounterTime(
          JSON.parse(localStorage.getItem('timer') as string).minutes,
          JSON.parse(localStorage.getItem('timer') as string).seconds
        ),
      }
    : null

  const [timer, setTimer] = useState<TimerState>(
    () => localInfo || initialState
  )

  useEffect(() => {
    localStorage.setItem('timer', JSON.stringify(timer))
  }, [timer])

  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider
