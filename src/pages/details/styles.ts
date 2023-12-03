import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

interface ContainerProp {
  backgroundColor?: string;
}
interface DescriptionProps {
  color?: string;
  size?: number;
  bold?: boolean;
}

export const Container = styled.View<ContainerProp>`
  flex: 1;
  background: ${({backgroundColor}) => backgroundColor || 'red'};
`;

export const BackContainer = styled.Pressable``;

export const BackIcon = styled.Image`
  height: 24px;
  width: 24px;
  align-self: flex-start;
  margin-top: 14%;
  margin-left: 24px;
`;

export const Header = styled.View`
  width: 100%;
  height: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;

export const Image = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 12px;
`;

export const CharacterInformation = styled.View`
  height: 85px;
  width: 60%;
  justify-content: center;
`;

export const ItensContainer = styled.View`
  height: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 24px;
`;

export const Item = styled.TouchableOpacity``;

export const Content = styled.ScrollView`
  width: 100%;
  height: 80%;
  padding: 24px;
  background: ${colors.background.white};
  align-self: flex-end;
  border-radius: 32px;
`;

export const Description = styled.Text<DescriptionProps>`
  font-size: ${({size}) => size || 16}px;
  font-family: ${({bold}) => (bold ? 'Roboto-bold' : 'Roboto-regular')};
  color: ${({color}) => color || colors.text.grayMedium};
`;

export const Topics = styled.View`
  margin: 10% 0;
  gap: 32px;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EpListContainer = styled.View`
  justify-content: space-between;
  height: 100%;
  gap: 12px;
`;

export const List = styled.View`
  height: 100%;
  margin-bottom: 24%;
`;
