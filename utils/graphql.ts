import {
  parseResolveInfo,
  ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info'
import { GraphQLResolveInfo } from 'graphql'

export const parseFields = (info: GraphQLResolveInfo) => {
  const parsedInfo = parseResolveInfo(info) as ResolveTree
  const simplifiedInfo = simplifyParsedResolveInfoFragmentWithType(
    parsedInfo,
    info.returnType
  )
  return Object.keys(simplifiedInfo.fields)
}
