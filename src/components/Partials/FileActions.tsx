import React from 'react'

export default function FileActions({
  onDelete,
  onOpenSharing,
  selectedFileIds,
  files,
  me,
}) {
  const canShareSelected = selectedFileIds.every(
    (selectedFileId) =>
      files.data.find((file) => file.id === selectedFileId)!.owner === me.id
  )

  const canDeleteSelected = selectedFileIds.every((selectedFileId) => {
    const file = files.data.find((file) => file.id === selectedFileId)
    return file!.owner === me.id || file?.userPermission[me.id].delete
  })

  return (
    <div className="file-actions row sticky-after-header">
      <button className="file-actions__action" disabled={true}>
        search
      </button>
      <button className="file-actions__action" disabled={true}>
        view: grid
      </button>
      <button className="file-actions__action" disabled={true}>
        view: table
      </button>
      <button className="file-actions__action" disabled={true}>
        sort
      </button>
      <button className="file-actions__action" disabled={true}>
        filter
      </button>

      {Boolean(selectedFileIds.length) && (
        <div className="file-actions__selected">
          <button
            className="file-actions__action"
            onClick={onDelete}
            disabled={!canDeleteSelected}
          >
            Delete selected
          </button>
          <button
            className="file-actions__action"
            onClick={onOpenSharing}
            disabled={!canShareSelected}
          >
            Share selected
          </button>
        </div>
      )}
    </div>
  )
}
