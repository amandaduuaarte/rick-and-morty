import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
interface DescriptionProps {
  size?: number;
  isActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-bold';
  color: ${({theme}) => theme.colors.unknown};
`;

export const Description = styled.Text<DescriptionProps>`
  font-size: ${({size}) => size || 16}px;
  font-family: 'Roboto-regular';
  color: ${({theme}) => theme.colors.grayMedium};
  margin: 12px 0;
`;

export const Content = styled.View`
  margin: 24px 0;
  height: ${height > 700 ? 70 : 70}%;
`;

export const PaginationContainer = styled.View`
  width: 100%;
  margin-top: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;
