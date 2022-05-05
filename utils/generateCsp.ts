import crypto from 'crypto'
import { v4 } from 'uuid'

import { isProd } from '@/utils'

const generateNonce = (): string => {
  const hash = crypto.createHash('sha256')
  hash.update(v4())
  return hash.digest('base64')
}

export const generateCsp = (): [csp: string, nonce: string] => {
  const nonce = generateNonce()
  const csp = []

  csp.push(`default-src 'self';`)
  csp.push(`img-src 'self' apollo-server-landing-page.cdn.apollographql.com;`)
  csp.push(
    `script-src 'self' ${!isProd() ? `'unsafe-eval'` : `nonce-${nonce}`};`
  )
  csp.push(
    `style-src 'self' ${!isProd() ? `'unsafe-inline'` : `nonce-${nonce}`};`
  )
  if (isProd()) {
    csp.push(`connect-src 'self' vitals.vercel-insights.com;`)
  }

  return [csp.join(''), nonce]
}
