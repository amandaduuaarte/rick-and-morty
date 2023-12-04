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
import {Characters} from '../../models/characters';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string>('');
  const [page, setPage] = useState(1);
  // const nextPageIdentifierRef = useRef();
  const {allCharacters, getCharacterByName, handleMoreCharacters} =
    useCharacters();
  const [charactersFilter, setCharactersFilter] = useState<
    Characters | undefined
  >();

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

  const renderFooder = (): JSX.Element => {
    return (
      <PaginationContainer>
        <PageContainer onPress={() => handlePagination(page - 1)} />
        <PageContainer onPress={() => handlePagination(1)} isActive>
          <Page size={12} isActive>
            {page <= 1 ? '1' : page}
          </Page>
        </PageContainer>
        <PageContainer onPress={() => handlePagination(page + 1)} />
      </PaginationContainer>
    );
  };
  return (
    // Transformar o header em um component e depois usar a prop listHeaderComponent na flatlist para exibir esse header
    // Criar theme dark and light https://github.com/LucasGarcez/weather-app/tree/main
    // Criar uma pasta models para colocar as typagens
    // Adicionar alguns testes (hooks, components(2), )
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
            data={charactersFilter ? charactersFilter : allCharacters}
            ListEmptyComponent={
              loading ? (
                <Content>
                  <Loading />
                </Content>
              ) : null
            }
            renderItem={({item}) => <Card key={item.id} data={item} />}
            keyExtractor={item => item.id + Math.random()}
            ListFooterComponent={renderFooder}
          />
        ) : (
          <Content>
            <Loading />
          </Content>
        )}
      </Content>
      {/* <PaginationContainer>
        <PageContainer onPress={() => handlePagination(page - 1)} />
        <PageContainer onPress={() => handlePagination(1)} isActive>
          <Page size={12} isActive>
            {page <= 1 ? '1' : page}
          </Page>
        </PageContainer>
        <PageContainer onPress={() => handlePagination(page + 1)} />
      </PaginationContainer> */}
    </Container>
  );
};
