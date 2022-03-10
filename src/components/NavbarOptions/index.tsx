import NavbarItem from 'components/NavbarItem'
import { navbarOptions } from 'config/navbarOptions'

const NavbarOptions = () => {
  return (
    <>
      <div className="mt-2 lg:mt-20 flex-1">
        <ul>
          {navbarOptions.map(({ id, name, url, handlerName }) => (
            <NavbarItem
              key={name}
              id={id}
              name={name}
              url={url}
              handlerName={handlerName}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavbarOptions
