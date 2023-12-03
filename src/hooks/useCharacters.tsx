import {useApolloClient, useQuery} from '@apollo/client';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ALL_CHARACTERS, ONE_CHARACTER, ONE_CHARACTER_BY_NAME} from '../queries';

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

interface oneCharacter {
  character: {
    name: string;
    image: string;
    type: string;
    status: string;
    species: string;
    color: string;
    episode: {
      id: string;
      name: string;
      air_date: string;
    }[];
    origin: {
      name: string;
    };
  };
}

interface CharacterContextData {
  allCharacters: Character | undefined;
  getOneCharacter(id: string): Promise<oneCharacter>;
  getCharacterByName(name: string): Promise<Character>;
}

export interface ChildrenDefaultProps {
  children?: ReactNode;
}

const CharacterContext = createContext<CharacterContextData>(
  {} as CharacterContextData,
);

const CharacterProvider: React.FC<ChildrenDefaultProps> = ({children}) => {
  const [allCharacters, setAllCharacters] = useState<Character | undefined>();
  const queryCharacters = useQuery(ALL_CHARACTERS);
  const client = useApolloClient();

  const getOneCharacter = async (id: string) => {
    const {data} = await client.query({
      query: ONE_CHARACTER,
      variables: {id: id},
    });
    return data;
  };

  const getCharacterByName = async (name: string) => {
    console.log('name', name);

    const {data} = await client.query({
      query: ONE_CHARACTER_BY_NAME,
      variables: {name: name},
    });

    return data;
  };

  useEffect(() => {
    if (queryCharacters) {
      setAllCharacters(queryCharacters.data);
    }
  }, [queryCharacters]);

  return (
    <CharacterContext.Provider
      value={{allCharacters, getOneCharacter, getCharacterByName}}>
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
