import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLogin } from 'hooks/useLogin/useLogin'
import { getData } from 'api/firebase/getSchedules'

const SchedulePanelPage: React.FC = () => {
  const [data, setData] = useState([])
  const { user } = useLogin()
  const uniqueId = user?.loginHint

  useEffect(() => {
    getData(uniqueId).then((res) => console.log({ res }))
  }, [])

  return (
    <motion.div className="top-0 right-0 bg-white h-auto lg:h-screen w-80 lg:w-96 shadow-md">
      <h1 className="text-center text-xl border-b py-2 font-semibold text-white bg-gradient-to-r from-rose-400 to-orange-300">
        Panel del Tiempo
      </h1>
      <div className="">
        <p className="mt-4 text-xl p-2 mb-4">Ve tu progreso</p>
      
      </div>
    </motion.div>
  )
}

export default SchedulePanelPage