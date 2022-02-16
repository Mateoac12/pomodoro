import { trackerOptions } from 'config/navbarOptions'
import { AnimatePresence } from 'framer-motion'
import { useTimerContext } from 'hooks/useTimerContext'
import { useMemo, useState } from 'react'
import PomodoroHelp from './PomodoroHelp'

const MethodologyHomeTag = () => {
  const [help, setHelp] = useState<boolean>(false)
  const { timer } = useTimerContext()

  const { methodId: method } = timer
  const methodId = useMemo(() => method, [method])

  const showHelp = () => setHelp(true)
  const hideHelp = () => setHelp(false)

  return (
    <div
      className="relative group cursor-help"
      onMouseEnter={showHelp}
      onMouseLeave={hideHelp}
    >
      <h1 className="w-min px-4 py-1 rounded-md text-xs relative left-2 top-2 text-orange-600 bg-orange-200">
        Metodología
      </h1>
      <div className="flex items-center justify-center gap-4 bg-white px-10 py-2 rounded-md shadow-sm">
        <span className="text-2xl text-slate-60">
          {trackerOptions[methodId].name}
        </span>
      </div>
      <AnimatePresence>
        {help && <PomodoroHelp methodId={methodId} />}
      </AnimatePresence>
    </div>
  )
}

export default MethodologyHomeTag
