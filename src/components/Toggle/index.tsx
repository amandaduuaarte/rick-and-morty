import React from 'react';
import {Switch} from 'react-native';
import {Container} from './styles';
import {useTheme} from 'styled-components';

interface ToggleProps {
  callback: () => void;
  value: boolean;
}
export const Toggle: React.FC<ToggleProps> = ({callback, value}) => {
  const {colors} = useTheme();
  return (
    <Container>
      <Switch
        trackColor={{false: colors.background.blueDark, true: '#81b0ff'}}
        thumbColor={value ? colors.background.blueDark : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={callback}
        value={value}
      />
    </Container>
  );
};
