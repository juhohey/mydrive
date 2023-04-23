import { TFile } from '../../store/filesStore'
import { TDatabase } from '../db/db'

export const saveFiles = (files: TFile[], db: TDatabase) => {
  db.get('files').push(files).write()
}
