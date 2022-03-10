import { motion } from 'framer-motion'
import { Link } from 'wouter'

import { NavbarOptions } from 'config/navbarOptions'
import { useCallback, useRef, useState } from 'react'
import ModalPanel from 'components/ModalPanel'
import ConfigPanelPage from 'components/ConfigPanelPage'

interface Props extends NavbarOptions {}

const NavbarItem = ({ id, name, url, handlerName }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const classNames = useRef(
    'w-full block px-8 py-4 box-border text-2xl hover:bg-orange-100 hover:text-orange-600 hover:border-r-4 hover:border-orange-400 text-left'
  )

  const handleControlAction = useCallback(
    (handlerName: NavbarOptions['handlerName']) => {
      if (handlerName === 'config') {
        return setShow((lastValue) => !lastValue)
      }

      return null
    },
    []
  )

  return (
    <>
      <motion.li
        transition={{
          delay: (id + 1) * 0.02,
          type: 'spring',
        }}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        {url && (
          <Link to={url}>
            <a className={classNames.current}>{name}</a>
          </Link>
        )}
        {handlerName && (
          <button
            className={classNames.current}
            onClick={() => handleControlAction(handlerName)}
          >
            {name}
          </button>
        )}
      </motion.li>
      {show && (
        <ModalPanel handleShow={setShow}>
          <ConfigPanelPage />
        </ModalPanel>
      )}
    </>
  )
}

export default NavbarItem
