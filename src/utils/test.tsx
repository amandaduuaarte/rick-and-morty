import {render} from '@testing-library/react-native';
import React, {ReactElement} from 'react';
import {FC} from 'react';
import {ThemeProvider} from '../theme/Theme';
import {ChildrenDefaultProps} from '../models/children';

type Options = Parameters<typeof render>[1];

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

const AllTheProviders: FC<ChildrenDefaultProps> = ({children}) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export * from '@testing-library/react-native';
export {customRender as render};
