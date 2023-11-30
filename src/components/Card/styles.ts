import styled from 'styled-components/native';
import {colors} from '../../utils/colors';
interface ContainerProps {
  status: string;
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 132px;
  width: auto;
  background: ${({status}) =>
    status === 'Alive'
      ? colors.cardBackgrounds.alive
      : colors.cardBackgrounds.dead};
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
  gap: 12px;
`;

export const TypeCharacterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 12px;
`;

export const NameCharacter = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-bold';
  color: ${colors.background.white};
`;

export const ImageComponent = styled.Image`
  height: 80px;
  width: 80px;
`;
