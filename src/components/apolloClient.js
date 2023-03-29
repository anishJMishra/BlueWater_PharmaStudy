import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql } from "@apollo/client";

const httpLink = new HttpLink({
  uri: `https://c87kv67orl.execute-api.us-west-2.amazonaws.com/graphql/`, 
  headers: {
    
    "x-api-key": '8C6RbPfpgewwRsW2GNXib7XedCFQr4j2tN4D9iJ8zAfH',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;