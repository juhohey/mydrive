import { NextApiRequest } from 'next'

// TODO: figure out why next headers are inconsistent
export const getUserIdFromRequest = (req: NextApiRequest) =>
  req.headers.get ? req.headers.get('x-user') : req.headers['x-user']

export const isAuthenticated = (req: NextApiRequest) => {
  return Boolean(getUserIdFromRequest(req))
}
