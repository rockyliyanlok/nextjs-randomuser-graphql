export enum Gender {
  female,
  male,
}

export type UsersArgs = {
  results: number,
  gender: Gender,
  password: string,
  seed: string,
  nat: string,
}
