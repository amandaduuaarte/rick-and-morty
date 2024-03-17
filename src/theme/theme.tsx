import React, {createContext, useState} from 'react';

import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native';
import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';
import {ChildrenDefaultProps} from '../models/children';
import {Storage} from '../service/storage';
import {GetTheme, EThemeType} from '../models/theme';

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
  const [theme, setTheme] = useState<EThemeType>(storageTheme);

  function toggleTheme() {
    if (theme === EThemeType.light) {
      setTheme(EThemeType.dark);
      Storage.set('theme', EThemeType.dark);
    } else {
      setTheme(EThemeType.light);
      Storage.set('theme', EThemeType.light);
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
