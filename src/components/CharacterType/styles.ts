import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  height: 40px;
  width: 100px;
  background: ${colors.cardBackgrounds.dead};
  border-radius: 8px;
  padding: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${colors.background.white};
  font-size: 16px;
  font-family: 'Roboto-bold';
`;

export const Icon = styled.View`
  height: 24px;
  width: 24px;
  background: red;
  margin-right: 6px;
`;
