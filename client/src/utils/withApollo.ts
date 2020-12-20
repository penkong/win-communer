import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { PaginatedPosts } from '../generated/graphql'

const createClient = (ctx: any) =>
  new ApolloClient({
    uri: (process.env.PUBLIC_API_URL as string) || 'sth',
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || ''
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              keyArgs: [],
              merge(existing, incoming) {
                return {
                  ...incoming,
                  posts: [...(existing?.posts || []), ...incoming.posts]
                }
              }
            }
          }
        }
      }
    })
  })

export const withApollo = createClient
