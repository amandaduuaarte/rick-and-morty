import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {client} from './service/apolloClient';

import {Routes} from './routes/app.routes';
import {CharacterProvider} from './hooks/useCharacters';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <CharacterProvider>
        <Routes />
      </CharacterProvider>
    </ApolloProvider>
  );
}

export default App;
