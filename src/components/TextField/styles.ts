import styled from 'styled-components/native';

export const Container = styled.View`
  height: 45px;
  width: 100%;
  border-radius: 12px;
  background: white;
  padding: 6px 12px;
  justify-content: row;
`;

export const Input = styled.TextInput`
  height: 100%;
  width: 90%;
  font-size: 12px;
  font-family: 'Roboto-medium';
  align-self: flex-end;
  color: ${({theme}) => theme.colors.grayMedium};
`;

export const Image = styled.Image`
  height: 24px;
  width: 24px;
  background: red;
`;
