import React from 'react';
import {Container} from './styles';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../utils/colors';

interface LoadingProps {
  color?: string;
}
export const Loading: React.FC<LoadingProps> = ({color}) => {
  return (
    <Container>
      <ActivityIndicator
        size="large"
        color={color ? color : colors.background.blueDark}
      />
    </Container>
  );
};
