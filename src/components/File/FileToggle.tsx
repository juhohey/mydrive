import React from 'react'

export default function FileToggle({ text, isSelected, onClick, id }) {
  const selectedClassName = isSelected ? 'file-toggle--selected' : ''
  return (
    <h3
      className={`file-toggle ${selectedClassName}`}
      onClick={() => {
        onClick(id)
      }}
    >
      {text}
    </h3>
  )
}
