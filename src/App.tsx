import Counter from 'components/Counter'
import Navbar from 'components/Navbar'
import './App.css'

function App() {
  return (
    <div className="bg-slate-100 flex items-start">
      <Navbar />
      <Counter />
    </div>
  )
}

export default App
