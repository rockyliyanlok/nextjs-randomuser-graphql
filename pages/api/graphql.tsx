import { createServer } from '@graphql-yoga/node'

import { resolvers } from '@/graphql/resolvers'
import { typeDefs } from '@/graphql/typeDefs'

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
})

export default server
