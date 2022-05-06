import {
  DateTimeResolver,
  EmailAddressResolver,
  URLResolver,
  UUIDResolver,
} from 'graphql-scalars'
import _merge from 'lodash/merge'

import { resolvers as GreetingResolvers } from './greeting'
import { resolvers as UserResolvers } from './user'

const ScalarsResolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  URL: URLResolver,
  UUID: UUIDResolver,
}

export const resolvers = _merge(
  ScalarsResolvers,
  GreetingResolvers,
  UserResolvers
)
