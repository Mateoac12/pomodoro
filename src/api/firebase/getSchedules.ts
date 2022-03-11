import { trackerOptions } from 'config/navbarOptions'
import { getCounterTime } from 'utils/getCounterTime'
import { db, doc, arrayUnion, setDoc, getDoc } from './config'

const initialCounterTime = getCounterTime(trackerOptions[0].rules[0].time)
const initialWorkTime = trackerOptions[0].rules[0].isWorkTime

const initialState = {
  userId: '',
  time: initialCounterTime,
  isWorkTime: initialWorkTime,
  step: 0,
  laps: 0,
  methodId: 0,
  minutes: trackerOptions[0].rules[0].time,
  seconds: 0,
  maxTime: trackerOptions[0].rules[0].time,
}

export const createData = async (inialData = initialState) => {
  const { userId, uniqueId,  schedules } = inialData

  const schedulesDDBB = doc(db, 'schedules', uniqueId)
  return await setDoc(schedulesDDBB, {
    userId,
    schedules: arrayUnion(schedules[0])
  }, {
    merge: true
  })
}

export const getData = async (uniqueId) => {
  const schedulesDDBB = doc(db, 'schedules', uniqueId)
  return await getDoc(schedulesDDBB)
}