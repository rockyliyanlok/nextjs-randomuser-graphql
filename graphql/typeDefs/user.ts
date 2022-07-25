export const typeDef = /* GraphQL */ `
  scalar DateTime
  scalar EmailAddress
  scalar URL
  scalar UUID

  enum Gender {
    female
    male
  }

  type User {
    gender: Gender
    name: UserName
    location: UserLocation
    email: EmailAddress
    login: UserLogin
    dob: UserDob
    registered: UserRegistered
    phone: String
    cell: String
    id: UserId
    picture: UserPicture
    nat: String
  }

  type UserName {
    title: String
    first: String
    last: String
  }

  type UserLocation {
    street: UserLocationStreet
    city: String
    state: String
    postcode: String
    coordinates: UserLocationCoordinates
    timezone: UserLocationTimezone
  }

type UserLocationStreet {
  number: String
  name: String
}

  type UserLocationCoordinates {
    latitude: Float
    longitude: Float
  }

  type UserLocationTimezone {
    offset: String
    description: String
  }

  type UserLogin {
    uuid: UUID
    username: String
    password: String
    salt: String
    md5: String
    sha1: String
    sha256: String
  }

  type UserDob {
    date: DateTime
    age: Int
  }

  type UserRegistered {
    date: DateTime
    age: Int
  }

  type UserId {
    name: String
    value: String
  }

  type UserPicture {
    large: URL
    medium: URL
    thumbnail: URL
  }
`
