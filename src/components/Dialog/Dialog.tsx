import React from 'react'

type DialogProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
  confirmLabel?: string
  hasActions?: boolean
}

export default function Dialog({
  children,
  isOpen,
  onClose,
  onConfirm,
  confirmLabel = 'ok',
  hasActions = true,
}: DialogProps) {
  const dialogStateClass = isOpen ? 'dialog--open' : ''
  return (
    <aside className={`dialog ${dialogStateClass}`}>
      <div className="dialog__body">
        {children}
        {hasActions && (
          <div className="dialog__actions">
            <button className="dialog__action" onClick={onClose}>
              cancel
            </button>
            {onConfirm && (
              <button className="dialog__action" onClick={onConfirm}>
                {confirmLabel}
              </button>
            )}
          </div>
        )}
      </div>
      <div className="dialog__bg" onClick={onClose} />
    </aside>
  )
}
