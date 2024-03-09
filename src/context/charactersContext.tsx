import {useApolloClient, useQuery} from '@apollo/client';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ALL_CHARACTERS, ONE_CHARACTER, ONE_CHARACTER_BY_NAME} from '../queries';
import {CharacterDetails, Characters} from '../models/characters';
import {ChildrenDefaultProps} from '../models/children';

export interface CharacterContextData {
  allCharacters: Characters | undefined;
  filterCharacters: Characters | undefined;
  getOneCharacter(id: string): Promise<CharacterDetails>;
  getCharacterByName(name: string): Promise<void>;
  handleMoreCharacters(pageNumber: number): void;
  hasListFinish: boolean;
}

export const CharacterContext = createContext<CharacterContextData>(
  {} as CharacterContextData,
);

export const CharacterProvider: React.FC<ChildrenDefaultProps> = ({
  children,
}) => {
  const [allCharacters, setAllCharacters] = useState<Characters>([]);
  const [hasListFinish, setHasListFinish] = useState(false);
  const [filterCharacters, setFilterCharacters] = useState();

  const {data: queryCharacters} = useQuery(ALL_CHARACTERS, {
    variables: {page: 1},
  });
  const client = useApolloClient();

  const getOneCharacter = useCallback(
    async (id: string) => {
      const {data} = await client.query({
        query: ONE_CHARACTER,
        variables: {id: id},
      });
      return data.character;
    },
    [client],
  );

  const getCharacterByName = useCallback(
    async (name: string) => {
      const {data} = await client.query({
        query: ONE_CHARACTER_BY_NAME,
        variables: {name: name},
      });
      setHasListFinish(true);

      setFilterCharacters(data?.characters?.results);
    },
    [client],
  );

  const handleMoreCharacters = useCallback(
    async (pageNumber: number) => {
      const {data} = await client.query({
        query: ALL_CHARACTERS,
        variables: {page: pageNumber},
      });
      setAllCharacters(prev => [...prev, ...data.characters.results]);

      console.log('handleMoreCharacters', data?.info?.next);

      if (data?.info?.next) {
        setHasListFinish(false);
      }
    },
    [client],
  );

  useEffect(() => {
    if (queryCharacters) {
      setAllCharacters(queryCharacters.characters.results);
    }
  }, [queryCharacters]);

  return (
    <CharacterContext.Provider
      value={{
        hasListFinish,
        allCharacters,
        getOneCharacter,
        getCharacterByName,
        filterCharacters,
        handleMoreCharacters,
      }}>
      {children}
    </CharacterContext.Provider>
  );
};

function useCharacters(): CharacterContextData {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error('useCharacter must be used within an CharacterProvider');
  }
  return context;
}

export {useCharacters};
