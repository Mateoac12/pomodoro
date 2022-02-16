import { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'wouter'

import PomodoroListOptions from './PomodoroListOptions'

interface Props {
  methodId: number
}

const PomodoroHelp = ({ methodId }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute top-full my-1 pb-0 w-80 bg-white rounded-md shadow-xl overflow-hidden"
    >
      <div className="p-2">
        <PomodoroListOptions methodId={methodId} />
      </div>
      <Link href="/config">
        <a className="block w-full py-1 text-center bg-slate-50 text-slate-600 text-sm border-t mt-2 hover:underline">
          Cambiar Metodología
        </a>
      </Link>
    </motion.div>
  )
}

export default memo(PomodoroHelp)
