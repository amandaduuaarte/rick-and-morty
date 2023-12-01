import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  height: 45px;
  width: 100%;
  border-radius: 12px;
  background: ${colors.background.grayExtraLight};
  padding: 6px 12px;
  justify-content: row;
`;

export const Input = styled.TextInput`
  height: 100%;
  width: 90%;
  font-size: 14px;
  font-family: 'Roboto-medium';
  align-self: flex-end;
  color: ${colors.text.grayMedium};
`;

export const Image = styled.Image`
  height: 24px;
  width: 24px;
  background: red;
`;
