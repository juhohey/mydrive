import React from 'react'
import { TFile } from '../../store/filesStore'
import { TUser } from '../../store/userStore'
import IconUsers from '../Icons/Users'

type FileProps = {
  file: TFile
  me: TUser
  isSelected: boolean
  onClick: () => void
}

export default function File({ file, isSelected, onClick, me }: FileProps) {
  return (
    <div
      className={`file ${isSelected ? 'file--selected' : ''}`}
      onClick={onClick}
    >
      {file.owner !== me.id ? <IconUsers className="file__icon" /> : <span />}
      <div className="file__container">
        <div className="file__filename">{file.name}</div>
      </div>
    </div>
  )
}
