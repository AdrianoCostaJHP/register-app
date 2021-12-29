import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  fetch: fetch,
})


const client = new ApolloClient({
  link: httpLink,
  ssrMode: !process.browser,
  cache: new InMemoryCache()
});

export const CustomApolloProvider = ({ children }: any) => {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}
