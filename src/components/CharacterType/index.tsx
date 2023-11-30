import React from 'react';
import {Container, Text} from './styles';

interface CharacterTypeProps {
  label: string;
}
export const CharacterType: React.FC<CharacterTypeProps> = ({label}) => {
  return (
    <>
      <Container>
        <Text>{label}</Text>
      </Container>
    </>
  );
};
