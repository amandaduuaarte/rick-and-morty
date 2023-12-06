import 'styled-components';
import {ColorsType} from '../theme/colors.type';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
