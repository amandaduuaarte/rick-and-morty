import React from 'react';
import {
  Container,
  DescriptionContainer,
  ImageComponent,
  NameCharacter,
  TypeCharacterContainer,
} from './styles';
import {CharacterType} from '../CharacterType';

interface CardProps {
  name: string;
  image: string;
  type: string;
  species: string;
}
export const Card: React.FC<CardProps> = (data: CardProps) => {
  return (
    <>
      <Container>
        <DescriptionContainer>
          <NameCharacter>{data.name}</NameCharacter>

          <TypeCharacterContainer>
            <CharacterType label={data.type} />
            <CharacterType label={data.species} />
          </TypeCharacterContainer>
        </DescriptionContainer>
        <DescriptionContainer>
          <ImageComponent source={{uri: 'https://reactjs.org/logo-og.png'}} />
        </DescriptionContainer>
      </Container>
    </>
  );
};
