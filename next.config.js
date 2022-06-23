/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const isProd = () => process.env.NODE_ENV === 'production'

const ContentSecurityPolicy = `
  default-src 'self' apollo-server-landing-page.cdn.apollographql.com;
  script-src 'self' 'unsafe-inline'${!isProd() ? ' \'unsafe-eval\'' : ''} apollo-server-landing-page.cdn.apollographql.com cdn.jsdelivr.net;
  connect-src 'self' vitals.vercel-insights.com fonts.googleapis.com cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com cdn.jsdelivr.net;
  font-src 'self' fonts.gstatic.com;
  img-src 'self' apollo-server-landing-page.cdn.apollographql.com cdn.jsdelivr.net;
`

const securityHeaders = () => [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
]

const publicRuntimeConfig = {
  randomuserBaseUrl: 'https://randomuser.me/api/',
}

const nextConfig = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  pwa: {
    disable: !isProd(),
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders(),
      },
    ]
  },
  publicRuntimeConfig,
})

module.exports = nextConfig
