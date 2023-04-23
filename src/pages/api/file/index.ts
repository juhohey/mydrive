import type { NextApiRequest, NextApiResponse } from 'next'
import context from '../../../services/context/context'
import { deleteFiles, getUserFiles } from '../../../services/file/file'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user, db } = await context(req)

  switch (req.method) {
    case 'GET': {
      const files = await getUserFiles(user.name, db)
      return res.status(200).json(files)
    }

    case 'DELETE': {
      const queryIds = req.query.id
      if (!queryIds) res.status(400).send('')

      const ids = Array.isArray(queryIds) ? queryIds : ([queryIds] as string[]) // no type inference here?

      await deleteFiles(ids, db)
      return res.status(200).json({ body: req.body })
    }

    default:
      return res.status(405).send('')
  }
}
