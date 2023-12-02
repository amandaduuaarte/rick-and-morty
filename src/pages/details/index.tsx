import React from 'react';
import {
  BackContainer,
  BackIcon,
  CharacterInformation,
  Container,
  Content,
  Description,
  Header,
  Image,
  Line,
  Topics,
} from './styles';
import Back from '../../assets/icons/Back.png';
import {useNavigation} from '../../hooks/useNavigation';
import {colors} from '../../utils/colors';
export const Details: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackContainer onPress={() => navigation.goBack()}>
        <BackIcon source={Back} />
      </BackContainer>
      <Header>
        <Image />
        <CharacterInformation>
          <Description size={24} bold color={colors.text.white}>
            Name
          </Description>
          <Description size={16} color={colors.text.white}>
            species - Human
          </Description>
        </CharacterInformation>
      </Header>
      <Content>
        <Description>
          texto de explicacao: Bulbasaur can be seen napping in bright sunlight.
          There is a seed on its back. By soaking up the sun's rays, the seed
          grows progressively larger.
        </Description>

        <Topics>
          <Line>
            <Description bold>Last known location:</Description>
            <Description>location </Description>
          </Line>

          <Line>
            <Description bold>origin:</Description>
            <Description>Earth</Description>
          </Line>

          <Line>
            <Description bold>status:</Description>
            <Description>Alive</Description>
          </Line>

          <Line>
            <Description bold>First seen in:</Description>
            <Description>Alive</Description>
          </Line>
        </Topics>
        <Description>Epsodes:</Description>
      </Content>
    </Container>
  );
};
