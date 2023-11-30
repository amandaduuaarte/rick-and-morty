import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {client} from './service/apolloClient';
import {Home} from './pages/home';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
