import React, { Dispatch, SetStateAction, useRef } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  handleShow: Dispatch<SetStateAction<boolean>>
}

const ModalPanelContent: React.FC<Props> = ({ children, handleShow }) => {
  const contentTagRef = useRef(null)

  const handleHideModal = (e: any) => {
    const clickedTag = e.target

    if (clickedTag === contentTagRef.current) {
      e.stopPropagation()
      handleShow((lastValue) => !lastValue)
    }
  }

  return (
    <section
      ref={contentTagRef}
      onClick={handleHideModal}
      className="fixed top-0 right-0 w-full h-auto lg:h-screen before:top-0 before:left-0 before:w-full before:h-screen before:bg-slate-800 before:block z-50 before:opacity-40"
    >
      <article className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-0 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 z-50 px-2 lg:px-0">
        {children}
      </article>
    </section>
  )
}

const ModalPanel: React.FC<Props> = ({ children, handleShow }) => {
  return createPortal(
    <ModalPanelContent handleShow={handleShow}>{children}</ModalPanelContent>,
    document.getElementById('modal-root') as Element
  )
}

export default ModalPanel
