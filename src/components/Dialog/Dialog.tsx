import React from 'react'

type DialogProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  confirmLabel?: string
}

export default function Dialog({
  children,
  isOpen,
  onClose,
  onConfirm,
  confirmLabel = 'ok',
}: DialogProps) {
  const dialogStateClass = isOpen ? 'dialog--open' : ''
  return (
    <aside className={`dialog ${dialogStateClass}`}>
      <div className="dialog__body">
        {children}
        <div className="dialog__actions">
          <button className="dialog__action" onClick={onClose}>
            cancel
          </button>
          <button className="dialog__action" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
      <div className="dialog__bg" onClick={onClose} />
    </aside>
  )
}
