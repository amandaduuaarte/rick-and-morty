import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

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

export const Description = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-regular';
  color: ${colors.text.grayMedium};
  margin: 12px 0;
`;

export const Content = styled.View`
  margin-top: 24px;
`;
