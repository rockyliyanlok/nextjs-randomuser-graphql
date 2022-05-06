import {
  DateTimeTypeDefinition,
  EmailAddressTypeDefinition,
  URLTypeDefinition,
  UUIDDefinition,
} from 'graphql-scalars'

import { typeDef as QueryTypeDef } from './query'
import { typeDef as GreetingTypeDef } from './greeting'
import { typeDef as UserTypeDef } from './user'

const ScalarsTypeDefs = [
  DateTimeTypeDefinition,
  EmailAddressTypeDefinition,
  URLTypeDefinition,
  UUIDDefinition,
]

export const typeDefs = [
  ...ScalarsTypeDefs,
  QueryTypeDef,
  GreetingTypeDef,
  UserTypeDef,
]
