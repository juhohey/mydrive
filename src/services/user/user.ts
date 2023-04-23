import { TDatabase } from '../db/db'

export const getUsers = async (db: TDatabase) => {
  return db.get('users').value()
}

export const getUserById = async (userId: string, db: TDatabase) => {
  return db
    .get('users')
    .find((user) => user.id === userId)
    .value()
}
