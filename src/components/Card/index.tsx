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
import {Character} from '../../models/characters';

interface CardProps {
  data: Character;
}
export const Card: React.FC<CardProps> = React.memo(({data}) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {getOneCharacter} = useCharacters();
  const {id, gender, image, location, name, status} = data;
  const handleCharacter = useCallback(async () => {
    setLoading(true);
    const character = await getOneCharacter(id);

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
  }, [getOneCharacter, id, navigation]);

  return (
    <>
      <Container status={status} onPress={() => handleCharacter()}>
        {loading ? (
          <Loading
            color={
              status === 'Alive'
                ? colors.background.blueDark
                : colors.cardBackgrounds.alive
            }
          />
        ) : (
          <>
            <DescriptionContainer>
              <NameCharacter>{name}</NameCharacter>
              <Description>{location.name}</Description>
              <TypeCharacterContainer>
                {gender && <CharacterType status={status} label={gender} />}
              </TypeCharacterContainer>
            </DescriptionContainer>
            <DescriptionContainer>
              <ImageComponent source={{uri: image}} />
            </DescriptionContainer>
          </>
        )}
      </Container>
    </>
  );
});
