import React, {useCallback} from 'react';
import {
  Container,
  Description,
  DescriptionContainer,
  ImageComponent,
  NameCharacter,
  TypeCharacterContainer,
} from './styles';
import {CharacterType} from '../CharacterType';
import {useNavigation} from '../../hooks/useNavigation';
import {useQuery} from '@apollo/client';
import {ONE_CHARACTER} from '../../queries';
import {colors} from '../../utils/colors';

interface CardProps {
  data: {
    id: string;
    name: string;
    image: string;
    status: string;
    gender: string;
    location: {
      name: string;
    };
  };
}
export const Card: React.FC<CardProps> = ({data}: CardProps) => {
  const navigation = useNavigation();
  const {data: character} = useQuery(ONE_CHARACTER, {
    variables: {id: data.id},
  });

  const handleCharacter = useCallback(() => {
    if (character) {
      const characterData = character.character;
      console.log(characterData.episode[0]);
      const characterDetails = {
        ...characterData,
        color:
          characterData.status === 'Alive'
            ? colors.cardBackgrounds.alive
            : colors.cardBackgrounds.dead,
      };

      navigation.navigate('Details', {character: characterDetails});
    }
    console.log(character.character.image);
  }, [character, navigation]);

  return (
    <>
      <Container status={data.status} onPress={() => handleCharacter()}>
        <DescriptionContainer>
          <NameCharacter>{data.name}</NameCharacter>
          <Description>{data.location.name}</Description>
          <TypeCharacterContainer>
            {data.gender && (
              <CharacterType status={data.status} label={data.gender} />
            )}
          </TypeCharacterContainer>
        </DescriptionContainer>
        <DescriptionContainer>
          <ImageComponent source={{uri: data.image}} />
        </DescriptionContainer>
      </Container>
    </>
  );
};
