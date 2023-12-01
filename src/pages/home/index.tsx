import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ALL_CHARACTERS} from '../../queries';
import {useQuery} from '@apollo/client';

import {Container, Content, Description, Title} from './styles';
import {Card, TextField} from '../../components';

export const Home: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const {data} = useQuery(ALL_CHARACTERS);

  console.log(data);
  return (
    <Container>
      <SafeAreaView>
        <Title>Rick And Morty</Title>
        <Description>
          App for see more about Rick and Morty characthers
        </Description>
        <TextField
          placeholder="What character you loking for?"
          callBack={e => setValue(e)}
          value={value}
        />
        <Content>
          {data && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data.characters.results}
              renderItem={({item}) => <Card key={item.id} data={item} />}
              keyExtractor={item => item.id}
            />
          )}
        </Content>
      </SafeAreaView>
    </Container>
  );
};
