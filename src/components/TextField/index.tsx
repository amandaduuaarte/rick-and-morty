import React from 'react';
import {Container, Input} from './styles';

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
  return (
    <Container>
      <Input placeholder={placeholder} onChangeText={callBack} value={value} />
    </Container>
  );
};
