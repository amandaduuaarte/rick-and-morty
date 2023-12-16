import {Storage} from '../service/storage';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export const GetTheme = (name: string): ThemeType => {
  const theme = Storage.getString(name);

  if (theme === 'dark') {
    return ThemeType.dark;
  } else {
    return ThemeType.light;
  }
};
