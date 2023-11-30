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
  data: {
    name: string;
    image: string;
    status: string;
    gender: string;
  };
}
export const Card: React.FC<CardProps> = ({data}: CardProps) => {
  return (
    <>
      <Container status={data.status}>
        <DescriptionContainer>
          <NameCharacter>{data.name}</NameCharacter>

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
