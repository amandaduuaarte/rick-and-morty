import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {BASE_URL} from './contants';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
