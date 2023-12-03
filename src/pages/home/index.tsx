import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {
  Container,
  Content,
  Description,
  Page,
  PageContainer,
  PaginationContainer,
  Title,
} from './styles';
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
  const [page, setPage] = useState(1);
  // const nextPageIdentifierRef = useRef();
  const {allCharacters, getCharacterByName, handleMoreCharacters} =
    useCharacters();
  const [charactersFilter, setCharactersFilter] = useState<Character | any>();

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

  const handlePagination = async (pageValue: number) => {
    setLoading(true);
    try {
      setPage(pageValue < 1 ? 1 : pageValue);
      await handleMoreCharacters(pageValue);
    } finally {
      setLoading(false);
    }
  };

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
      </SafeAreaView>
      <Content>
        {allCharacters && !loading ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            data={
              charactersFilter
                ? charactersFilter?.characters.results
                : allCharacters
            }
            ListEmptyComponent={
              loading ? (
                <Content>
                  <Loading />
                </Content>
              ) : null
            }
            renderItem={({item}) => <Card key={item.id} data={item} />}
            keyExtractor={item => item.id + Math.random()}
            ListFooterComponent={loading ? <Loading /> : null}
          />
        ) : (
          <Content>
            <Loading />
          </Content>
        )}
      </Content>
      <PaginationContainer>
        <PageContainer onPress={() => handlePagination(page - 1)} />
        <PageContainer onPress={() => handlePagination(1)} isActive>
          <Page size={12} isActive>
            {page <= 1 ? '1' : page}
          </Page>
        </PageContainer>
        <PageContainer onPress={() => handlePagination(page + 1)} />
      </PaginationContainer>
    </Container>
  );
};
