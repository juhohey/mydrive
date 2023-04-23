import type { NextApiRequest, NextApiResponse } from 'next'
import context from '../../../services/context/context'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user } = await context(req)

  switch (req.method) {
    case 'GET':
      return res.status(200).json({ name: user.name })

    default:
      return res.status(405)
  }
}
