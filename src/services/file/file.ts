import { TFile } from '../../store/filesStore'
import { TDatabase } from '../db/db'

const formatSharedFile = (file) => ({
  filepath: file.filepath,
  name: file.name,
  id: file.id,
})

export const saveFiles = (files: TFile[], db: TDatabase) => {
  files.forEach((file) => {
    db.get('files').push(file).write()
  })
}

export const getUserFiles = (userId: string, db: TDatabase) => {
  const ownFiles = db
    .get('files')
    .filter((file) => file.owner === userId)
    .value()

  const sharedFiles = db
    .get('files')
    .filter((file) =>
      file.userPermissions.find(
        (userPermission) => userPermission.userId === userId
      )
    )
    .value()

  return ownFiles.concat(sharedFiles.map(formatSharedFile))
}
