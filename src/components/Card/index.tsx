import React, {useCallback, useState} from 'react';
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
import {colors} from '../../utils/colors';
import {useCharacters} from '../../hooks/useCharacters';
import {Loading} from '../Loading';

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
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {getOneCharacter} = useCharacters();

  const handleCharacter = useCallback(async () => {
    setLoading(true);
    const {character} = await getOneCharacter(data.id);

    if (character) {
      const characterDetails = {
        ...character,
        color:
          character.status === 'Alive'
            ? colors.cardBackgrounds.alive
            : colors.cardBackgrounds.dead,
      };

      navigation.navigate('Details', {character: characterDetails});
      setLoading(false);
    }
  }, [data, getOneCharacter, navigation]);

  return (
    <>
      <Container status={data.status} onPress={() => handleCharacter()}>
        {loading ? (
          <Loading
            color={
              data.status === 'Alive'
                ? colors.background.blueDark
                : colors.cardBackgrounds.alive
            }
          />
        ) : (
          <>
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
          </>
        )}
      </Container>
    </>
  );
};
