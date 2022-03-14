import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLogin } from 'hooks/useLogin/useLogin'
import { getData } from 'api/firebase/getSchedules'
import { getRelativeTime } from 'utils/getRelativeTime'
import { trackerOptions } from 'config/navbarOptions'

export interface ISchedule {
  isWorkTime: boolean
  laps: number
  maxTime: number
  methodId: number
  minutes: number
  seconds: number
  step: number
  time: any
}

const SchedulePanelPage: React.FC = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>([])
  const { user } = useLogin()
  const uniqueId = user?.loginHint

  useEffect(() => {
    getData(uniqueId as string).then(({ schedules }: any) =>
      setSchedules(schedules)
    )
  }, [uniqueId])

  const handleGroupData = (schedules: ISchedule[]) => {
    const normalizedSchedule = {} as any
    schedules.reverse().forEach((schedule) => {
      const { normalizedDate } = getRelativeTime(schedule.time)
      if (!normalizedSchedule[normalizedDate]) {
        normalizedSchedule[normalizedDate] = []
      }
      if (normalizedSchedule[normalizedDate]) {
        normalizedSchedule[normalizedDate].push(schedule)
      }
    })

    const arraySchedule = Object.entries(normalizedSchedule)

    return arraySchedule
      .reverse()
      .map(([timeFormatString, arrayValues]: any) => {
        let maxTime = 0
        return (
          <>
            <h1
              key={timeFormatString}
              className="text-xl mb-2 mt-4 flex items-center"
            >
              {timeFormatString}
              <span className="text-sm bg-gray-100 text-gray-600 mx-2 rounded-md px-2">
                {arrayValues.length} vueltas
              </span>
            </h1>
            {arrayValues.map((schedule: any, index: number) => {
              maxTime += schedule.maxTime

              return (
                <div
                  key={`${timeFormatString}-${index}`}
                  className="flex items-center"
                >
                  <span
                    className={`inline-block rounded-full w-3 h-3 mr-2 shadow ${
                      schedule.isWorkTime
                        ? 'bg-green-400 shadow-green-200'
                        : 'bg-orange-400 shadow-orange-200'
                    }`}
                  ></span>
                  <p className="text-gray-600">
                    {trackerOptions[schedule.methodId].name}
                  </p>
                  <span className="mx-2 bg-gray-100 text-gray-600 rounded-md px-2 text-xs">
                    {schedule.maxTime} min.
                  </span>
                </div>
              )
            })}
            <div className="border-t mt-2 py-2">
              <p className="text-gray-600 text-sm">
                Tiempo total:{' '}
                {maxTime > 60
                  ? (maxTime / 60).toFixed(2) + 'hs.'
                  : maxTime + 'min.'}
              </p>
            </div>
          </>
        )
      })
  }

  return (
    <motion.div className="top-0 right-0 bg-white h-auto lg:h-screen w-80 lg:w-96 shadow-md">
      <h1 className="text-center text-xl border-b py-2 font-semibold text-white bg-gradient-to-r from-rose-400 to-orange-300">
        Panel del Tiempo
      </h1>
      <div className="">
        <p className="mt-4 text-2xl p-2 mb-4">Ve tu progreso</p>
      </div>
      <div className="p-2 -mt-4">
        {schedules.length > 0 ? (
          handleGroupData(schedules)
        ) : (
          <p className="text-gray-600 py-4 border-t">
            Inicia sesión y comianza a ver tu progreso diario 🚀
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default SchedulePanelPage
