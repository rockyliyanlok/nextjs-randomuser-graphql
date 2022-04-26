import { Head, Html, Main, NextScript } from 'next/document'

import { generateCsp } from '@/utils'

const Document = () => {
  const [csp, nonce] = generateCsp()

  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A project to wrap randomuser.me RESTful API in GraphQL"
        />
        <meta name="theme-color" content="#333333" />
        <meta name="referrer" content={'strict-origin'} />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>

        <link rel="manifest" href="/site.webmanifest" />

        <meta property='csp-nonce' content={nonce} />
        <meta httpEquiv='Content-Security-Policy' content={csp} />
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  )
}

export default Document
