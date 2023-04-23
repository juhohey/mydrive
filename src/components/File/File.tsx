import React from 'react'
import { TFile } from '../../store/filesStore'

type FileProps = {
  file: TFile
  isSelected: boolean
  onClick: () => void
}

export default function File({ file, isSelected, onClick }: FileProps) {
  return (
    <div
      className={`file ${isSelected ? 'file--selected' : ''}`}
      onClick={onClick}
    >
      <div className="file__container">
        <div className="file_filename">{file.name}</div>
      </div>
    </div>
  )
}
