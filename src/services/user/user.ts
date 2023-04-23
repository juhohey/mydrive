import { TDatabase } from '../db/db'

export type TUser = {
  name: string
}

type TUsers = {
  [key: string]: TUser
}

const users: TUsers = {
  alice: { name: 'alice' },
  bob: { name: 'bob' },
}

export async function getUsers(db: TDatabase) {
  return []
}

export async function getUserById(id: string, db: TDatabase) {
  return users[id]
}
