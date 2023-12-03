import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {Container, Content, Description, Title} from './styles';
import {Card, Loading, TextField} from '../../components';
import {useCharacters} from '../../hooks/useCharacters';

export const Home: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const {allCharacters} = useCharacters();

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
          {allCharacters ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={allCharacters.characters.results}
              renderItem={({item}) => <Card key={item.id} data={item} />}
              keyExtractor={item => item.id}
            />
          ) : (
            <Loading />
          )}
        </Content>
      </SafeAreaView>
    </Container>
  );
};
