/// aqui vou ter as functions ou os datas
import {useQuery} from '@apollo/client';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ALL_CHARACTERS} from '../queries';

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
interface CharacterContextData {
  allCharacters: Character | undefined;
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

  useEffect(() => {
    if (queryCharacters) {
      setAllCharacters(queryCharacters.data);
    }
  }, [queryCharacters]);

  return (
    <CharacterContext.Provider value={{allCharacters}}>
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
