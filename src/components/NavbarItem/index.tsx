import { motion } from 'framer-motion'
import { Link } from 'wouter'

import { NavbarOptions } from 'config/navbarOptions'

interface Props extends NavbarOptions {}

const NavbarItem = ({ id, name, url }: Props) => {
  return (
    <motion.li
      transition={{
        delay: (id + 1) * 0.02,
        type: 'spring',
      }}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Link to={url}>
        <a className="block px-8 py-4 box-border text-2xl hover:bg-orange-100 hover:text-orange-600 hover:border-r-4 hover:border-orange-400">
          {name}
        </a>
      </Link>
    </motion.li>
  )
}

export default NavbarItem
