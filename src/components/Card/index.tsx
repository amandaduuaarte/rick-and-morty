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

import {Loading} from '../Loading';
import {Character} from '../../models/characters';
import {useTheme} from 'styled-components/native';
import {View} from 'react-native';
import {cardDetailsUseCase} from './useCases/cardDetailsUseCase';

interface CardProps {
  data: Character;
}
export const Card: React.FC<CardProps> = React.memo(({data}) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const {handleCharacterDetails} = cardDetailsUseCase({
    alive: colors.alive,
    dead: colors.dead,
  });
  const {id, gender, image, location, name, status} = data;
  const handleCharacter = useCallback(async () => {
    setLoading(true);

    const character = await handleCharacterDetails(id);
    // const character = await getOneCharacter(id);

    if (character) {
      navigation.navigate('Details', {character});
      setLoading(false);
    }
  }, [handleCharacterDetails, id, navigation]);

  return (
    <View>
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
              <NameCharacter accessibilityLabel="name">{name}</NameCharacter>
              <Description accessibilityLabel="location">
                {location.name}
              </Description>
              <TypeCharacterContainer testID="gender">
                {gender && <CharacterType status={status} label={gender} />}
              </TypeCharacterContainer>
            </DescriptionContainer>
            <DescriptionContainer>
              <ImageComponent
                testID="img"
                source={{uri: image}}
                alt="characther_img"
                accessibilityLabel="characther_image"
              />
            </DescriptionContainer>
          </>
        )}
      </Container>
    </View>
  );
});
