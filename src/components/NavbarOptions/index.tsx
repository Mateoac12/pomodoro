import NavbarItem from 'components/NavbarItem'
import { navbarOptions } from 'config/navbarOptions'

const NavbarOptions = () => {
  return (
    <>
      <div className="mt-20 flex-1">
        <ul>
          {navbarOptions.map(({ id, name, url }) => (
            <NavbarItem key={name} id={id} name={name} url={url} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavbarOptions
