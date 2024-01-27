'use client'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'
import { PropsWithChildren } from 'react'

const BASE_HTTP_URL = 'http://localhost:3001' //process.env.NEXT_PUBLIC_HTTP_GRAPHQL_ENDPOINT

const httpLink = new HttpLink({
  uri: BASE_HTTP_URL,
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const GraphqlProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphqlProvider
