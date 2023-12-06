import styled from 'styled-components/native';
interface ContainerProps {
  status: string;
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 132px;
  width: auto;
  background: ${({theme, status}) =>
    status === 'Alive' ? theme.colors.alive : theme.colors.dead};
  border-radius: 12px;
  flex-direction: row;
  padding: 12px 16px;
  gap: 12px;
  margin-bottom: 24px;
`;

export const DescriptionContainer = styled.View`
  height: 100%;
  width: 70%;
  justify-content: center;
  gap: 4px;
`;

export const TypeCharacterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export const NameCharacter = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-bold';
  color: ${({theme}) => theme.colors.clean};
`;

export const Description = styled(NameCharacter)`
  font-size: 16px;
`;

export const ImageComponent = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 12px;
`;
