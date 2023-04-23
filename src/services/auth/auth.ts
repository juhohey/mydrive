import { NextApiRequest } from 'next'

export const getUserIdFromRequest = (req: NextApiRequest) =>
  req.headers['x-user']

export const isAuthenticated = (req: NextApiRequest) => {
  return Boolean(getUserIdFromRequest(req))
}
