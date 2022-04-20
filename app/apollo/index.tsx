import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { parseCookies } from "nookies";

const tokens = parseCookies();
const token = tokens['@AuthRegisterToken']

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  fetch: fetch,
  headers: token ? {
    authorization: `Bearer ${token}`,
  }: {},
});

const client = new ApolloClient({
  link: httpLink,
  ssrMode: !process.browser,
  cache: new InMemoryCache(),
});

export const CustomApolloProvider = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
