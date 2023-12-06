import styled from 'styled-components/native';
import {colors} from '../../utils/colors';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
interface DescriptionProps {
  size?: number;
  isActive?: boolean;
}

interface PaginationContainerProps {
  isActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-bold';
  color: ${({theme}) => theme.colors.black};
`;

export const Description = styled.Text<DescriptionProps>`
  font-size: ${({size}) => size || 16}px;
  font-family: 'Roboto-regular';
  color: ${({theme}) => theme.colors.grayMedium};
  margin: 12px 0;
`;

export const Content = styled.View`
  margin: 24px 0;
  height: ${height > 700 ? 70 : 55}%;
`;

export const PaginationContainer = styled.View`
  width: 100%;
  margin-top: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

export const PageContainer = styled.TouchableOpacity<PaginationContainerProps>`
  height: 32px;
  width: 32px;
  border: 2px solid ${colors.cardBackgrounds.unknown};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${({theme, isActive}) =>
    isActive ? theme.colors.unknown : 'transparent'};
`;

export const Page = styled.Text<DescriptionProps>`
  font-size: ${({size}) => size || 16}px;
  font-family: 'Roboto-regular';
  color: ${({theme, isActive}) =>
    isActive ? theme.colors.clean : theme.colors.grayMedium};
`;
