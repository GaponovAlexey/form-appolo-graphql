import { HomePage } from './components/HomePage'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: `http://localhost:3001/graphql`,
  cache: new InMemoryCache(),
})

const moviesQuery = gql`
  query moviesquery {
    movies {
      id
      name
      genre
    }
  }
`

function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  )
}

export default App
