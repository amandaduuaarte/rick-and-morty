import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.grayMedium};
`;
