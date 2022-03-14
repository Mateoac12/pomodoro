import { trackerOptions } from 'config/navbarOptions'
import { getCounterTime } from 'utils/getCounterTime'
import { db, doc, arrayUnion, setDoc, getDoc } from './config'

const initialCounterTime = getCounterTime(trackerOptions[0].rules[0].time)
const initialWorkTime = trackerOptions[0].rules[0].isWorkTime

interface IDataStructure {
  userId: string
  uniqueId: string
  time: Date
  isWorkTime: boolean
  step: number
  laps: number
  methodId: number
  minutes: number
  seconds: number
  maxTime: number
  schedules?: any
}

const initialState: IDataStructure = {
  userId: '',
  uniqueId: '',
  time: initialCounterTime,
  isWorkTime: initialWorkTime,
  step: 0,
  laps: 0,
  methodId: 0,
  minutes: trackerOptions[0].rules[0].time,
  seconds: 0,
  maxTime: trackerOptions[0].rules[0].time,
}

export const createData = async (inialData: IDataStructure = initialState) => {
  const { userId, uniqueId, schedules } = inialData

  const schedulesDDBB = doc(db, 'schedules', uniqueId)
  return await setDoc(
    schedulesDDBB,
    {
      userId,
      schedules: arrayUnion(schedules[0]),
    },
    {
      merge: true,
    }
  )
}

export const getData = async (uniqueId: string) => {
  const schedulesDDBB = doc(db, 'schedules', uniqueId)
  const data = await getDoc(schedulesDDBB)

  if (data.exists()) return data.data()
}
