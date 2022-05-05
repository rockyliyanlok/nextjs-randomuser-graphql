import { gql } from 'apollo-server-micro'

export const typeDef = gql`
  type Query {
    greeting: Greeting
    users(
      results: Int
      gender: Gender
      password: String
      seed: String
      nat: String
    ): [User]
  }
`
