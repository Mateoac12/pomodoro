import { useTimer } from 'hooks/useTimer/useTimer'
import TimeCounter from './TimeCounter'

const Counter = () => {
  const { counter, handleChangeTime, handlePause, handlePlay } = useTimer()

  return (
    <div className=" m-8 p-8 shadow rounded-md flex flex-col mx-auto my-auto">
      <label>Contador de minutos</label>
      <input
        type="number"
        min={0}
        value={counter.minutes}
        onChange={handleChangeTime}
      />
      <hr className="my-4" />
      <TimeCounter minutes={counter.minutes} seconds={counter.seconds} />
      <button onClick={handlePlay} className="my-4 border px-4 py-2 text-lg">
        Iniciar
      </button>
      <button onClick={handlePause} className="my-4 border px-4 py-2 text-lg">
        Pausar
      </button>
    </div>
  )
}

export default Counter
