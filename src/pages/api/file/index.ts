import type { NextApiRequest, NextApiResponse } from 'next'
import context from '../../../services/context/context'
import { getUserFiles } from '../../../services/file/file'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user, db } = await context(req)

  switch (req.method) {
    case 'GET':
      const files = getUserFiles(user.name, db)
      return res.status(200).json(files)

    default:
      return res.status(405)
  }
}
