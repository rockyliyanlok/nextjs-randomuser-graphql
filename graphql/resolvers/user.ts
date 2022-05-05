import getConfig from 'next/config'
import { GraphQLResolveInfo } from 'graphql'

import { UsersArgs } from '@/types'
import { parseFields } from '@/utils'

const {
  publicRuntimeConfig: { randomuserBaseUrl },
} = getConfig()

export const resolvers = {
  Query: {
    users: async (
      _parent: never,
      args: UsersArgs,
      _context: never,
      info: GraphQLResolveInfo
    ) => {
      try {
        const response = await fetch(
          `${randomuserBaseUrl}?${new URLSearchParams({
            inc: parseFields(info).join(','),
            ...JSON.parse(JSON.stringify(args)),
          })}`
        )
        const json = await response.json()

        return json?.results
      } catch (error) {
        throw error
      }
    },
  },
}
