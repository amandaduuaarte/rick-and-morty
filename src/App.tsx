import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {Text, View} from 'react-native';
import {client} from './service/apolloClient';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>Hello world</Text>
      </View>
    </ApolloProvider>
  );
}

export default App;
