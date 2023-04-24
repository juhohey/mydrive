import { NextApiRequest } from 'next'
import { TUser } from '../../store/userStore'
import { getUserIdFromRequest } from '../auth/auth'
import db from '../db/db'
import { getUserById } from '../user/db'

export type TContext = {
  user: TUser
  db: typeof db
}

export default async (req: NextApiRequest) => {
  const userId = getUserIdFromRequest(req)

  if (!userId || Array.isArray(userId)) {
    throw new Error(
      'User id missing from request or malformed in route + ' + req.url
    )
  }

  const user = await getUserById(userId, db)
  return { user, db }
}
