import type { NextApiRequest, NextApiResponse } from 'next'
import context from '../../../services/context/context'
import { updateFilePermissions } from '../../../services/file/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await context(req)

  switch (req.method) {
    case 'PUT': {
      const body = JSON.parse(req.body)
      await updateFilePermissions(body.fileIds, body.permission, db)

      return res.status(200).json({})
    }

    default:
      return res.status(405).send('')
  }
}
