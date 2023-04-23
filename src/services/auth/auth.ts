import { NextApiRequest } from 'next'

// TODO: figure out why next headers are inconsistent
export const getUserIdFromRequest = (req: NextApiRequest) =>
  req.headers.get ? req.headers.get('x-api-token') : req.headers['x-api-token']

export const isAuthenticated = (req: NextApiRequest) => {
  return Boolean(getUserIdFromRequest(req))
}

// "request authorization from an external api" == wait 2.5s
export const getAuthenticationToken = (userId: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(userId)
    }, 2500)
  })
