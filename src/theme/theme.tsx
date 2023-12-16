import React, {createContext, useState} from 'react';

import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native';
import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';
import {ChildrenDefaultProps} from '../models/children';
import {Storage} from '../service/storage';
import {GetTheme, ThemeType} from '../models/theme';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext({
  theme: Storage.getString('theme'),
  toggleTheme: () => {},
});
export const ThemeProvider: React.FunctionComponent<ChildrenDefaultProps> = ({
  children,
}) => {
  const storageTheme = GetTheme('theme');
  const [theme, setTheme] = useState<ThemeType>(storageTheme);

  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
      Storage.set('theme', ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
      Storage.set('theme', ThemeType.light);
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={themes[theme] || storageTheme}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
