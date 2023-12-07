import React from 'react';
import {Container} from './styles';
import {ActivityIndicator} from 'react-native';

import {useTheme} from 'styled-components/native';

interface LoadingProps {
  color?: string;
}
export const Loading: React.FC<LoadingProps> = ({color}) => {
  const {colors} = useTheme();
  return (
    <Container>
      <ActivityIndicator size="large" color={color ? color : colors.blueDark} />
    </Container>
  );
};
