import React, { useState } from 'react'
import { useAppSelector } from '../../store/store'
import { TFilePermission } from '../../store/userStore'
import Dialog from '../Dialog/Dialog'

type ShareFilesDialogProps = {
  isOpen: boolean
  onClose: () => void
  onShare: (ShareFilesDialogState) => void
  fileNames: string[]
}

export default function ShareFilesDialog({
  isOpen,
  onClose,
  onShare,
  fileNames,
}: ShareFilesDialogProps) {
  const [state, setState] = useState<TFilePermission>({})
  const { users, me } = useAppSelector((state) => ({
    me: state.me,
    users: state.users,
  }))

  const onShareCurried = (userId, permission) => () => {
    const userPermissions = state[userId] || {}
    const existingPermission = userPermissions[permission]

    if (existingPermission) {
      const nextPermission = { ...userPermissions, [permission]: false }
      return setState({ ...state, [userId]: nextPermission })
    }

    setState({ ...state, [userId]: { ...userPermissions, [permission]: true } })
  }

  const onConfirm = () => {
    onShare(state)
    setState({})
  }

  const usersCanSharewith = users.data.filter((user) => user.name !== me.name)

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      confirmLabel={'share'}
    >
      <div className="m-b-4">
        <h1 className="m-b-1">Share files</h1>
        <h3>{fileNames.length} files</h3>
      </div>
      <h2 className="m-b-1">Users</h2>
      <div className="share">
        <div className="share__row share__row-header">
          <div className="share__name">
            <h4>Name</h4>
          </div>
          <div className="share__permissions">
            <h4>Permissions</h4>
          </div>
        </div>
        <div className="dialog__scroll">
          {usersCanSharewith.map((user) => {
            return (
              <div key={user.id} className="share__row">
                <div className="share__name">{user.name}</div>

                <div className="share__permissions">
                  <p
                    className={`share__permission ${
                      state[user.id]?.read ? 'share__permission--selected' : ''
                    }`}
                    onClick={onShareCurried(user.id, 'read')}
                  >
                    Read
                  </p>
                  <p
                    className={`share__permission ${
                      state[user.id]?.write ? 'share__permission--selected' : ''
                    }`}
                    onClick={onShareCurried(user.id, 'write')}
                  >
                    Write
                  </p>
                  <p
                    className={`share__permission ${
                      state[user.id]?.delete
                        ? 'share__permission--selected'
                        : ''
                    }`}
                    onClick={onShareCurried(user.id, 'delete')}
                  >
                    Delete
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Dialog>
  )
}
