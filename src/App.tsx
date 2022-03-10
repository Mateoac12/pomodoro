import Counter from 'components/Counter'
import MethodologyHomeTag from 'components/MethodologyHomeTag'
import Navbar from 'components/Navbar'
import ProgressBar from 'components/ProgressBar'
import TimerProvider from 'context/TimerContext'
import './App.css'

function App() {
  return (
    <TimerProvider>
      <div className="bg-slate-100 flex flex-col min-h-screen lg:h-screen lg:flex-row items-start lg:overflow-hidden">
        <Navbar />
        <div className="flex flex-col flex-1 relative items-start justify-start w-full lg:h-screen">
          <div className="relative lg:absolute flex flex-col lg:flex-row gap-4 items-start lg:items-center w-full p-2 lg:p-8">
            <MethodologyHomeTag />
            <ProgressBar />
          </div>
          <Counter />
        </div>
      </div>
    </TimerProvider>
  )
}

export default App
