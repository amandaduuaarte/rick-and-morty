import {useCallback} from 'react';
import {useCharacters} from '../../../context/charactersContext';

interface IcardDetailsUseCase {
  handleCharacterDetails: (id: string) => Promise<{}>;
}

export const cardDetailsUseCase = ({
  alive,
  dead,
}: {
  alive: string;
  dead: string;
}): IcardDetailsUseCase => {
  const {getOneCharacter} = useCharacters();

  const handleCharacterDetails = useCallback(
    async (id: string) => {
      const character = await getOneCharacter(id);

      if (character) {
        const characterDetails = {
          ...character,
          color: character.status === 'Alive' ? alive : dead,
        };
        return characterDetails;
      }
      return {};
    },
    [alive, dead, getOneCharacter],
  );

  return {
    handleCharacterDetails,
  };
};
