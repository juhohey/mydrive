import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { isAuthenticated } from './src/services/auth/auth'

export const config = {
  matcher: '/(?!api)/login',
}

export function middleware(req: NextApiRequest) {
  if (!isAuthenticated(req)) {
    return new NextResponse('authentication failed', {
      status: 401,
      headers: { 'content-type': 'application/json' },
    })
  }
}
