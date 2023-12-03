import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {Container, Content, Description, Title} from './styles';
import {Card, Loading, TextField} from '../../components';
import {useCharacters} from '../../hooks/useCharacters';

interface Character {
  characters: {
    results: {
      id: string;
      name: string;
      image: string;
      status: string;
      gender: string;
      species: string;
      location: {
        name: string;
      };
    }[];
  };
}
export const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string>('');
  const {allCharacters, getCharacterByName} = useCharacters();
  const [charactersFilter, setCharactersFilter] = useState<Character>();

  const handleSearch = useCallback(
    async (e: string) => {
      setValue(e);
      setLoading(true);

      const data = await getCharacterByName(e);
      if (data) {
        setLoading(false);
        setCharactersFilter(data);
      }
    },
    [getCharacterByName],
  );

  return (
    <Container>
      <SafeAreaView>
        <Title>Rick And Morty</Title>
        <Description>
          App for see more about Rick and Morty characthers
        </Description>
        <TextField
          placeholder="What character you loking for?"
          callBack={e => handleSearch(e)}
          value={value}
        />

        {loading && (
          <Content>
            <Loading />
          </Content>
        )}
        <Content>
          {allCharacters ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={
                charactersFilter
                  ? charactersFilter?.characters.results
                  : allCharacters?.characters.results
              }
              renderItem={({item}) => <Card key={item.id} data={item} />}
              keyExtractor={item => item.id}
            />
          ) : (
            <Content>
              <Loading />
            </Content>
          )}
        </Content>
      </SafeAreaView>
    </Container>
  );
};
