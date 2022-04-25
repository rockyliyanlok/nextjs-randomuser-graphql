import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    greeting: Greeting
  }
  type Greeting {
    message: String
  }
`
