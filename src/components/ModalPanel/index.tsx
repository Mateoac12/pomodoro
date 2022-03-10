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
      className="absolute top-0 right-0 w-full h-screen before:top-0 before:left-0 before:w-full before:h-screen before:bg-slate-800 before:block z-40 before:opacity-40"
    >
      <article className="absolute top-0 right-0 z-50">{children}</article>
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
