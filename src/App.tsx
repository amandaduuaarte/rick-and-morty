import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {client} from './service/apolloClient';

import {Routes} from './routes/app.routes';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
