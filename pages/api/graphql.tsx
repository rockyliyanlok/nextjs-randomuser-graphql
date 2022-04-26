import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'

import { resolvers } from '@/graphql/resolvers'
import { typeDefs } from '@/graphql/typeDefs'

const apolloServer = new ApolloServer({ typeDefs, resolvers, introspection: true })

const startServer = apolloServer.start()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
