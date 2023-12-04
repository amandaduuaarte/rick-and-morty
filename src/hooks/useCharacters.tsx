import {useApolloClient, useQuery} from '@apollo/client';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ALL_CHARACTERS, ONE_CHARACTER, ONE_CHARACTER_BY_NAME} from '../queries';
import {CharacterDetails, Characters} from '../models/characters';

interface CharacterContextData {
  allCharacters: Characters | undefined;
  getOneCharacter(id: string): Promise<CharacterDetails>;
  getCharacterByName(name: string): Promise<Characters | undefined>;
  handleMoreCharacters(pageNumber: number): void;
}

export interface ChildrenDefaultProps {
  children?: ReactNode;
}

const CharacterContext = createContext<CharacterContextData>(
  {} as CharacterContextData,
);

const CharacterProvider: React.FC<ChildrenDefaultProps> = ({children}) => {
  const [allCharacters, setAllCharacters] = useState<Characters>();

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

      return data.characters.results;
    },
    [client],
  );

  const handleMoreCharacters = useCallback(
    async (pageNumber: number) => {
      const {data} = await client.query({
        query: ALL_CHARACTERS,
        variables: {page: pageNumber},
      });
      setAllCharacters(data.characters.results);
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
        allCharacters,
        getOneCharacter,
        getCharacterByName,
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

export {CharacterProvider, useCharacters};
