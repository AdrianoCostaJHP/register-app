import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { parseCookies } from "nookies";
import { setContext } from '@apollo/client/link/context'

const setAuthorizationLink = setContext(() => {
  const tokens = parseCookies();
  const token = tokens['@AuthRegisterToken']
  if (token) {
    return {
      headers: {
        authorization: 'Bearer ' + token,
      },
    }
  }
  return {}
})



const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  fetch: fetch,
});

const client = new ApolloClient({
  link: setAuthorizationLink.concat(httpLink),
  ssrMode: !process.browser,
  cache: new InMemoryCache(),
});

export const CustomApolloProvider = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
