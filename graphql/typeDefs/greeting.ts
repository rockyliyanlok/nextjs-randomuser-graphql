import { gql } from 'apollo-server-micro'

export const typeDef = gql`
  type Greeting {
    message: String
  }
`
