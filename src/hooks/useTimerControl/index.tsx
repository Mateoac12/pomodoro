import { playSound } from 'utils/playSound'
import { getCounterTime } from 'utils/getCounterTime'

import { trackerOptions } from 'config/navbarOptions'

import audio from 'assets/audio/alert-ding.mp3'
import { useTimerContext } from 'hooks/useTimerContext'
import { useTimer } from 'react-timer-hook'
import { useCallback, useEffect, useMemo, useRef } from 'react'

interface Props {
  playNotification?: (isWorkTime: string) => void
}

export const useTimerControl = ({ playNotification }: Props = {}) => {
  const { timer, setTimer } = useTimerContext()
  const { time, isWorkTime, maxTime, methodId } = timer

  const { pause, minutes, seconds, isRunning, resume, restart, hours } =
    useTimer({
      autoStart: false,
      expiryTimestamp: time,
      onExpire: handleChangeTimer,
    })

  const normalizedMinutes = hours >= 1 ? hours * 60 + minutes : minutes
  const pauseCallback = useCallback(() => pause(), [])
  const isLastSecond = useRef(false)

  useEffect(() => {
    if (!isLastSecond.current) {
      isLastSecond.current = false
      setTimer((prevState: any) => ({
        ...prevState,
        time: getCounterTime(normalizedMinutes, seconds),
        minutes: normalizedMinutes,
        seconds,
      }))
    }
  }, [seconds])

  function handleChangeTimer() {
    let newTimer: any
    isLastSecond.current = true

    setTimer((prevStatus: any) => {
      const rules =
        trackerOptions[prevStatus.methodId].rules[prevStatus.step + 1]

      const isLastStep =
        prevStatus.step + 1 === trackerOptions[prevStatus.methodId].rules.length

      const resetTime = trackerOptions[prevStatus.methodId].rules[0]

      newTimer = {
        ...prevStatus,
        time: getCounterTime(isLastStep ? resetTime.time : rules.time),
        isWorkTime: isLastStep ? resetTime.isWorkTime : rules.isWorkTime,
        step: isLastStep ? 0 : prevStatus.step + 1,
        minutes: isLastStep ? resetTime.time : rules.time,
        seconds: 0,
        maxTime: isLastStep ? resetTime.time : rules.time,
        laps: isLastStep ? prevStatus.laps + 1 : 0,
      }

      return newTimer
    })

    restart(newTimer.time)
    playSound(audio)

    playNotification &&
      playNotification(
        isWorkTime
          ? '¡Tiempo de trabajo finalizado!'
          : '¡Tiempo de descanso finalizado!'
      )
  }

  // for the config manual handler
  const handleSetMehod = (methodId: number) => {
    setTimer((lastState: any) => {
      const rules = trackerOptions[methodId].rules[0]

      const newState = {
        ...lastState,
        methodId,
        time: getCounterTime(rules.time),
        isWorkTime: rules.isWorkTime,
        step: 0,
        minutes: rules.time,
        seconds: 0,
        maxTime: rules.time,
        laps: 0,
      }
      return newState
    })
    window.location.reload()
  }

    useMemo(() => {
    const lastDateRegistered: any = new Date(time)
    const currentDate: any = new Date()

    const isDiferrentDay = currentDate.getDate() !== lastDateRegistered.getDate()
    const isPassFourHours = (currentDate - lastDateRegistered) / (60*60*1000) >= 4

    if (isDiferrentDay && isPassFourHours) handleSetMehod(methodId)
  }, [])

  return {
    maxTime,
    minutes: normalizedMinutes,
    seconds,
    isRunning,
    resume,
    pause: pauseCallback,
    isWorkTime,
    handleSetMehod,
    methodId,
  }
}
