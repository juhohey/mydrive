import type { NextApiRequest, NextApiResponse } from 'next'
import context from '../../../services/context/context'
import { getUsers } from '../../../services/user/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await context(req)
  switch (req.method) {
    case 'GET': {
      const users = await getUsers(db)
      return res.status(200).json(users)
    }

    default:
      return res.status(405)
  }
}
