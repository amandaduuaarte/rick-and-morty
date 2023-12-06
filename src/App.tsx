import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {client} from './service/apolloClient';

import {Routes} from './routes/app.routes';
import {CharacterProvider} from './hooks/useCharacters';
import {ThemeProvider} from './theme/Theme';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <CharacterProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </CharacterProvider>
    </ApolloProvider>
  );
}

export default App;
