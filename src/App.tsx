import Counter from 'components/Counter'
import MethodologyHomeTag from 'components/MethodologyHomeTag'
import Navbar from 'components/Navbar'
import ProgressBar from 'components/ProgressBar'
import TimerProvider from 'context/TimerContext'
import { AnimatePresence } from 'framer-motion'
import ConfigPanelPage from 'pages/ConfigPanelPage'
import { Route } from 'wouter'
import './App.css'

function App() {
  return (
    <TimerProvider>
      <div className="bg-slate-100 flex items-start overflow-hidden">
        <Navbar />
        <div className="flex flex-col flex-1 relative items-start justify-start w-full h-screen">
          <div className="absolute flex gap-4 items-center w-full p-8">
            <MethodologyHomeTag />
            <ProgressBar />
          </div>
          <Counter />
        </div>
        <div>
          <AnimatePresence>
            <Route path="/config" component={ConfigPanelPage} />
          </AnimatePresence>
        </div>
      </div>
    </TimerProvider>
  )
}

export default App
