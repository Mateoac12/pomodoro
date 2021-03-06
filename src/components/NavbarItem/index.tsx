import { motion } from 'framer-motion'
import { Link } from 'wouter'

import { NavbarOptions } from 'config/navbarOptions'
import { useCallback, useRef, useState } from 'react'
import ModalPanel from 'components/ModalPanel'
import ConfigPanelPage from 'components/ConfigPanelPage'
import SchedulePanelPage from 'components/SchedulePanelPage'

interface Props extends NavbarOptions {}

const NavbarItem = ({ id, name, url, handlerName }: Props) => {
  const [showType, setShowType] = useState<'config' | 'panel' | ''>('')
  const classNames = useRef(
    'w-full block px-2 py-2 lg:px-8 lg:py-4 box-border text-xl lg:text-2xl hover:bg-orange-100 hover:text-orange-600 hover:border-r-4 hover:border-orange-400 text-left'
  )

  const handleControlAction = useCallback(
    (handlerName: NavbarOptions['handlerName']) => {
      if (handlerName === 'config') setShowType('config')
      if (handlerName === 'panel') setShowType('panel')

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
      {showType !== '' && (
        <ModalPanel handleShow={setShowType}>
          {
            showType === 'config' && <ConfigPanelPage />
          }
          {
            showType === 'panel' && <SchedulePanelPage />
          }
        </ModalPanel>
      )}
    </>
  )
}

export default NavbarItem
