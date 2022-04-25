import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'

import { typeDefs } from '../../graphql/typeDefs'
import { resolvers } from '../../graphql/resolvers'

const apolloServer = new ApolloServer({ typeDefs, resolvers })

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
