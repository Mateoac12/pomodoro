import { motion } from 'framer-motion'
import { trackerOptions } from 'config/navbarOptions'
import PomodoroListOptions from 'components/MethodologyHomeTag/PomodoroListOptions'
import { useTimerControl } from 'hooks/useTimerControl'

const ConfigPanelPage = () => {
  const { handleSetMehod, methodId } = useTimerControl()

  return (
    <motion.div className="top-0 right-0 bg-white h-auto lg:h-screen w-80 lg:w-96 shadow-md">
      <h1 className="text-center text-xl border-b py-2 font-semibold text-white bg-gradient-to-r from-rose-400 to-orange-300">
        Configuración
      </h1>
      <div className="">
        <p className="mt-4 text-xl p-2 mb-4">Elige tu Metodología</p>
        <form>
          {trackerOptions.map(({ id, name }) => (
            <div key={`methodology-${id}-card`}>
              <input
                type="radio"
                name="methodology"
                value={id}
                id={`methodology-${id}`}
                className={`hidden peer`}
                onClick={() => handleSetMehod(id)}
              />
              <label
                htmlFor={`methodology-${id}`}
                className={`p-2 block border-b cursor-pointer hover:bg-slate-50 pb-4 ${
                  methodId === id &&
                  'bg-slate-100 text-slate-800 border-l-4 border-l-slate-400'
                }`}
              >
                <h1 className="text-2xl pb-2 mb-2">{name}</h1>
                <PomodoroListOptions methodId={id} />
              </label>
            </div>
          ))}
        </form>
      </div>
    </motion.div>
  )
}

export default ConfigPanelPage
