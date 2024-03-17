import {Storage} from '../service/storage';

export enum EThemeType {
  light = 'light',
  dark = 'dark',
}

export const GetTheme = (name: string): EThemeType => {
  const theme = Storage.getString(name);

  if (theme === 'dark') {
    return EThemeType.dark;
  } else {
    return EThemeType.light;
  }
};
