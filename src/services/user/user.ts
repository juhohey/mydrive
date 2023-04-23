import { TDatabase } from '../db/db'

export async function getUsers(db: TDatabase) {
  return db.get('users').value()
}

export async function getUserById(userId: string, db: TDatabase) {
  return db
    .get('users')
    .find((user) => user.id === userId)
    .value()
}
