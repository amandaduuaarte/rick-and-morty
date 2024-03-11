import React, {useCallback, useContext, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {
  Container,
  Content,
  Description,
  PaginationContainer,
  Title,
} from './styles';
import {Card, Loading, NotFound, TextField, Toggle} from '../../components';

import {ThemeContext} from '../../theme/Theme';
import {ThemeType} from '../../models/theme';
import {useCharacters} from '../../context/charactersContext';

export const Home: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [page, setPage] = useState(1);

  const {toggleTheme, theme} = useContext(ThemeContext);
  const isDarkTheme = theme === ThemeType.dark;

  const {
    allCharacters,
    getCharacterByName,
    handleMoreCharacters,
    hasListFinish,
    filterCharacters,
  } = useCharacters();

  const handleSearch = useCallback(
    async (e: string) => {
      setValue(e);

      await getCharacterByName(e);
    },
    [getCharacterByName],
  );

  const handlePagination = async (pageValue: number) => {
    if (!hasListFinish) {
      handleMoreCharacters(pageValue);
      setPage(pageValue + 1);
    }
  };

  const renderLoadingComponent = (isLoading: boolean) => {
    if (isLoading) {
      return (
        <Content>
          <Loading />
        </Content>
      );
    }
    return null;
  };

  return (
    <Container>
      <SafeAreaView>
        <PaginationContainer>
          <Title>Rick And Morty</Title>
          <Toggle callback={toggleTheme} value={isDarkTheme} />
        </PaginationContainer>

        <Description>
          App for see more about Rick and Morty characters
        </Description>
        <TextField
          placeholder="What character you looking for?"
          callBack={e => handleSearch(e)}
          value={value}
        />
      </SafeAreaView>

      <Content>
        {allCharacters ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            data={filterCharacters ? filterCharacters : allCharacters}
            ListEmptyComponent={hasListFinish ? <NotFound /> : <Loading />}
            renderItem={({item}) => <Card key={item.id} data={item} />}
            keyExtractor={item => item.id + Math.random()}
            ListFooterComponent={hasListFinish ? null : <Loading />}
            onEndReached={() => handlePagination(page)}
          />
        ) : (
          renderLoadingComponent(true)
        )}
      </Content>
    </Container>
  );
};
