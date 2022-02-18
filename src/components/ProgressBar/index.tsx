import { useTimerContext } from 'hooks/useTimerContext'
import { trackerOptions } from 'config/navbarOptions'
import ProgressPoints from './ProgressPoints'

const ProgressBar = () => {
  const { timer } = useTimerContext()
  const { rules }: any = trackerOptions.find(({ id }) => timer.methodId === id)

  return (
    <div className="relative">
      <h1 className="w-min z-10 px-4 py-1 rounded-md text-xs relative left-2 top-2 text-orange-600 bg-orange-200">
        Progreso
      </h1>
      <div className="flex relative z-0 items-center gap-4 bg-white px-10 py-2 rounded-md shadow-sm h-12 w-full">
        <div className="flex gap-4 relative">
          <ProgressPoints rules={rules} step={timer.step} />
          <div className="w-full h-1 bg-slate-300 absolute -z-10 rounded-full top-1/2 -translate-y-1/2"></div>
        </div>
        <h2 className="text-2xl text-slate-600 ml-4">
          {timer.step}/{rules.length}
        </h2>
        <div className="absolute -right-12 h-16 top-1/2 -translate-y-1/2 w-16 border bg-white shadow-lg shadow-slate-200 rounded-full flex flex-col justify-center items-center">
          <h2 className="text-4xl text-slate-600">{timer.laps}</h2>
          <span className="absolute -bottom-4 px-2 py-1 text-xs text-slate-600 rounded-full bg-slate-100 shadow-lg shadow-slate-200">
            Vueltas
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
