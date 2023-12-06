import React, {useCallback, useContext, useState} from 'react';
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
import {Card, Loading, TextField, Toggle} from '../../components';
import {useCharacters} from '../../hooks/useCharacters';
import {Characters} from '../../models/characters';
import {ThemeContext, ThemeType} from '../../theme/Theme';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string>('');
  const [page, setPage] = useState(1);
  const {toggleTheme, theme} = useContext(ThemeContext);
  const isDarkTheme = theme === ThemeType.dark;
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
    <Container>
      <SafeAreaView>
        <PaginationContainer>
          <Title>Rick And Morty</Title>
          <Toggle callback={toggleTheme} value={isDarkTheme} />
        </PaginationContainer>
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
    </Container>
  );
};
