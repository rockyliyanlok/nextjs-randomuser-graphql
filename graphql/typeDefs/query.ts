export const typeDef = /* GraphQL */ `
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
