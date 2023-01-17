import React from 'react';
import { ApolloProvider, gql, useQuery } from '@apollo/client';
// applo client
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graphql-api-example.vercel.app/api/graphql',
  }),
});

const FRUIT_QUERY = gql`
  query {
    fruits {
      id
      name
      price
    }
  }
`

interface Fruit {
  id: number;
  name: string;
  price: number;
}

const Fruits = () => {
  const { loading, error, data } = useQuery(FRUIT_QUERY);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>TodoList</h2>
      {data.fruits.map((fruit: Fruit) => (
        <p key={fruit.id}>{fruit.name}: {fruit.price}円</p>
      ))}
    </div>
  );
}

function GraphqlFruit() {
  return (
    <ApolloProvider client={client}>
      <Fruits />
    </ApolloProvider>
  );
}

export default GraphqlFruit;