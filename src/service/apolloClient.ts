import {ApolloClient, InMemoryCache} from '@apollo/client';
import {BASE_URL} from './constants';
import {Apollo} from '../models/apollo';

export const client: Apollo = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
