import { useState } from 'react'
import LoginPanel from 'components/LoginPanel'
import Logo from 'components/Logo'
import NavbarOptions from 'components/NavbarOptions'

import menuIcon from '../../assets/icons/menu.svg'

const Navbar = () => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <aside className="flex flex-col h-auto relative lg:h-screen lg:overflow-hidden w-full lg:w-80 border-r shadow-xl shadow-slate-200 bg-slate-50">
      <div className="flex items-center bg-gradient-to-r from-rose-400 to-orange-300">
        <Logo />
        <button
          className="incline-block m-2 p-2 lg:hidden"
          onClick={() => setShow((lastValue) => !lastValue)}
        >
          <img src={menuIcon} />
        </button>
      </div>
      <div
        className={`h-auto lg:h-full flex flex-col absolute lg:relative top-full lg:top-0 left-0 bg-white w-full z-50   ${
          show ? 'block' : 'hidden'
        }`}
      >
        <NavbarOptions />
        <LoginPanel />
      </div>
    </aside>
  )
}

export default Navbar
