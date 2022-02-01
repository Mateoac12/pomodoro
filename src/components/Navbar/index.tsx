import LoginPanel from 'components/LoginPanel'
import Logo from 'components/Logo'
import NavbarOptions from 'components/NavbarOptions'

const Navbar = () => {
  return (
    <aside className="flex flex-col h-screen overflow-hidden w-80 border-r shadow-xl shadow-slate-200 bg-slate-50">
      <Logo />
      <NavbarOptions />
      <LoginPanel />
    </aside>
  )
}

export default Navbar
