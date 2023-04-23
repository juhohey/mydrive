import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthenticationToken } from '../../../services/auth/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      const userId = req.body.userId
      if (!userId) return res.status(400).send('')

      const token = await getAuthenticationToken(userId)
      return res.status(200).json({ token })

    default:
      return res.status(405).send('')
  }
}
