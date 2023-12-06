import React, {useState} from 'react';
import {
  BackContainer,
  BackIcon,
  CharacterInformation,
  Container,
  Content,
  Description,
  EpListContainer,
  Header,
  Image,
  Item,
  ItensContainer,
  Line,
  List,
  Topics,
} from './styles';
import Back from '../../assets/icons/Back.png';
import {useNavigation} from '../../hooks/useNavigation';

import {useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
interface CharacterProps {
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
}

export const Details: React.FC = () => {
  const [tab, setTap] = useState<'about' | 'episodes'>('about');
  const navigation = useNavigation();
  const route = useRoute<any>();
  const {colors} = useTheme();
  const {character}: {character: CharacterProps} = route.params;

  return (
    <Container backgroundColor={character.color}>
      <BackContainer onPress={() => navigation.goBack()}>
        <BackIcon source={Back} />
      </BackContainer>
      <Header>
        <Image source={{uri: character?.image}} />
        <CharacterInformation>
          <Description size={24} bold color={colors.clean}>
            {character?.name}
          </Description>
          <Description size={18} color={colors.clean}>
            species - {character?.species}
          </Description>
        </CharacterInformation>
      </Header>

      <ItensContainer>
        <Item onPress={() => setTap('about')}>
          <Description
            bold
            size={16}
            color={tab === 'about' ? colors.clean : colors.unknown}>
            About
          </Description>
        </Item>

        <Item onPress={() => setTap('episodes')}>
          <Description
            bold
            size={16}
            color={tab === 'episodes' ? colors.clean : colors.unknown}>
            Episodes
          </Description>
        </Item>
      </ItensContainer>

      {tab === 'about' ? (
        <Content showsVerticalScrollIndicator={false}>
          <Description size={18}>
            Here are the details of the character {character?.name}. This is a{' '}
            {character?.species}{' '}
            {character?.type ? `of type ${character?.type}` : ''} who is
            currently {character?.status}.
          </Description>

          <Topics>
            <Line>
              <Description bold color={character?.color}>
                origin:
              </Description>
              <Description>{character?.origin.name}</Description>
            </Line>

            <Line>
              <Description bold color={character?.color}>
                status:
              </Description>
              <Description>{character?.status}</Description>
            </Line>

            <Line>
              <Description bold color={character?.color}>
                First seen in:
              </Description>
              <Description>{character?.episode[0].name}</Description>
            </Line>
          </Topics>
        </Content>
      ) : (
        <Content showsVerticalScrollIndicator={false}>
          <Description size={18}>
            Here are the details of the episodes in which the character appears.
          </Description>

          <EpListContainer>
            <Description bold size={22}>
              Episodes:
            </Description>
            <List>
              {character?.episode.map((episode, index) => {
                return (
                  <Line key={index}>
                    <Description size={14}>{episode.name}</Description>
                    <Description size={12}>{episode.air_date}</Description>
                  </Line>
                );
              })}
            </List>
          </EpListContainer>
        </Content>
      )}
    </Container>
  );
};
