import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const Index: NextPage = () => {

  useEffect(() => {
    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query ($results: Int) {
            users (results: $results) {
              name {
                title
                first
                last
              }
            }
          }
        `,
        variables: {
          results: 5,
        },
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log({ result }))
  }, [])
  
  return (
    <div>
      <Head>
        <title>RandomUser GraphQL</title>
      </Head>

      <main>
        <h1>RandomUser GraphQL</h1>
      </main>
    </div>
  )
}

export default Index
