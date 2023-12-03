import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

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
  color: ${colors.text.black};
`;

export const Description = styled.Text<DescriptionProps>`
  font-size: ${({size}) => size || 16}px;
  font-family: 'Roboto-regular';
  color: ${colors.text.grayMedium};
  margin: 12px 0;
`;

export const Content = styled.View`
  margin: 24px 0;
  height: 70%;
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
  background: ${({isActive}) =>
    isActive ? colors.cardBackgrounds.unknown : 'transparent'};
`;

export const Page = styled.Text<DescriptionProps>`
  font-size: ${({size}) => size || 16}px;
  font-family: 'Roboto-regular';
  color: ${({isActive}) =>
    isActive ? colors.text.white : colors.text.grayMedium};
`;
