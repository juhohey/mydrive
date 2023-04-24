import { TFile } from '../../store/filesStore'
import { TFilePermission } from '../../store/userStore'
import { TDatabase } from '../db/db'

const formatSharedFile = (file) => ({
  filepath: file.filepath,
  name: file.name,
  id: file.id,
  userPermission: file.userPermission,
})

export const saveFiles = async (files: TFile[], db: TDatabase) => {
  // TODO: lowdb batch update API seems to be missing
  files.forEach((file) => {
    db.get('files').push(file).write()
  })
}

export const updateFilePermissions = async (
  fileIds: TFile['id'][],
  permission: TFilePermission,
  db: TDatabase
) => {
  // TODO: lowdb batch update API seems to be missing
  fileIds.forEach((fileId) => {
    db.get('files')
      .find((file) => file.id === fileId)
      .assign({ userPermission: permission })
      .write()
  })
}

export const deleteFiles = async (fileIds: TFile['id'][], db: TDatabase) => {
  db.get('files')
    .remove((file) => fileIds.includes(file.id))
    .write()
}

export const getUserFiles = async (userId: string, db: TDatabase) => {
  const ownFiles = db
    .get('files')
    .filter((file) => file.owner === userId)
    .value()

  const sharedFiles = db
    .get('files')
    .filter((file) => file.userPermission[userId]?.read)
    .value()

  return ownFiles.concat(sharedFiles.map(formatSharedFile))
}
