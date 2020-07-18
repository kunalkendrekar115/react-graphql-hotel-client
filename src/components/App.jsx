import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Routes from "./Routes";
import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";

const cache = new InMemoryCache({
  dataIdFromObject: (object) => object._id || defaultDataIdFromObject(object),
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
