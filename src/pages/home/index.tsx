import React from 'react';
import {Text} from 'react-native';
import {allcharacters} from '../../queries';
import {useQuery} from '@apollo/client';
import {CharacterType} from '../../components/CharacterType';
import {Container} from './styles';

export const Home: React.FC = () => {
  const {data} = useQuery(allcharacters);

  console.log('aqiiiiiii', data);

  return (
    <Container>
      <Text>Hello world</Text>
      <CharacterType label="dead" />
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
