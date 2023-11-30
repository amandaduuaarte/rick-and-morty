import React from 'react';
import {Text} from 'react-native';
import {allcharacters} from '../../queries';
import {useQuery} from '@apollo/client';

import {Container} from './styles';
import {Card} from '../../components/Card';

export const Home: React.FC = () => {
  const {data} = useQuery(allcharacters);

  console.log('aqiiiiiii', data);

  return (
    <Container>
      <Text>Hello world</Text>
      {/* <Card /> */}
      {/* {data && (
        <FlatList
          data={data.characters.results}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      )} */}
    </Container>
  );
};
