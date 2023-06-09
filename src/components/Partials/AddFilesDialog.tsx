import React, { useState, SyntheticEvent } from 'react'
import Dialog from '../Dialog/Dialog'

type AddFilesDialogProps = {
  isOpen: boolean
  onClose: () => void
  onUpload: (files: File[]) => void
}

export default function AddFilesDialog({
  isOpen,
  onClose,
  onUpload,
}: AddFilesDialogProps) {
  const [files, setFiles] = useState<File[]>([])

  const onSetFiles = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const files = target.files || []
    setFiles([...files])
  }

  const onConfirm = () => {
    setFiles([])
    onUpload(files)
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      confirmLabel={'upload'}
    >
      <div className="m-b-4">
        <h1 className="m-b-1">Add files</h1>
        <input
          type="file"
          multiple={true}
          onChange={onSetFiles}
          accept=".pdf,.jpeg,.jpg,.png,.webp,.gif"
        />
      </div>
      <h2 className="m-b-1">Files</h2>
      <div className="dialog__scroll">
        {files.map((file, i) => {
          return (
            <div key={i + file.name} className="upload-files__file">
              {file.name}
            </div>
          )
        })}
      </div>
    </Dialog>
  )
}
