import React from 'react'

export default function Header({ children }) {
  return (
    <header className="header">
      <div className="header__container">{children}</div>
    </header>
  )
}
