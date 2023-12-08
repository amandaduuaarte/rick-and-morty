import React from 'react';
import {Container, Text} from './styles';

interface CharacterTypeProps {
  label: string;
  status: string;
}
export const CharacterType: React.FC<CharacterTypeProps> = ({
  label,
  status,
}) => {
  return (
    <>
      <Container status={status} testID="characterStatus">
        <Text>{label}</Text>
      </Container>
    </>
  );
};
