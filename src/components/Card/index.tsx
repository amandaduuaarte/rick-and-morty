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

import {useCharacters} from '../../hooks/useCharacters';
import {Loading} from '../Loading';
import {Character} from '../../models/characters';
import {useTheme} from 'styled-components/native';

interface CardProps {
  data: Character;
}
export const Card: React.FC<CardProps> = React.memo(({data}) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {getOneCharacter} = useCharacters();
  const {colors} = useTheme();
  const {id, gender, image, location, name, status} = data;
  const handleCharacter = useCallback(async () => {
    setLoading(true);
    const character = await getOneCharacter(id);

    if (character) {
      const characterDetails = {
        ...character,
        color: character.status === 'Alive' ? colors.alive : colors.dead,
      };

      navigation.navigate('Details', {character: characterDetails});
      setLoading(false);
    }
  }, [colors, getOneCharacter, id, navigation]);

  return (
    <>
      <Container
        status={status}
        onPress={() => handleCharacter()}
        testID="CardContainer">
        {loading ? (
          <Loading
            color={status === 'Alive' ? colors.blueDark : colors.alive}
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
              <ImageComponent
                source={{uri: image}}
                alt="characther_img"
                accessibilityLabel="characther_image"
              />
            </DescriptionContainer>
          </>
        )}
      </Container>
    </>
  );
});
