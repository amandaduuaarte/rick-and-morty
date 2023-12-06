import React from 'react';
import {Container, Input} from './styles';
import {useTheme} from 'styled-components/native';

interface TextFieldProps {
  placeholder: string;
  value: string;
  callBack: (value: string) => void;
}
export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  callBack,
}) => {
  const {colors} = useTheme();
  return (
    <Container>
      <Input
        placeholder={placeholder}
        onChangeText={callBack}
        value={value}
        placeholderTextColor={colors.clean}
      />
    </Container>
  );
};
