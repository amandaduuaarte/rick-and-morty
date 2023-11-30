import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {allcharacters} from '../../queries';
import {useQuery} from '@apollo/client';

export const Home: React.FC = () => {
  const {data} = useQuery(allcharacters);

  console.log('aqiiiiiii', data);

  return (
    <View>
      <Text>Hello world</Text>
      {data && (
        <FlatList
          data={data.characters.results}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
