import React, {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {ThemeProvider} from '../theme/Theme';
import {ChildrenDefaultProps} from '../models/children';
import {CharacterProvider} from '../context/charactersContext';
import {MockedProvider} from '@apollo/client/testing';
import {ALL_CHARACTERS} from '../queries';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeConsumer} from 'styled-components';

type Options = RenderOptions;

const mocks: any = [
  {
    request: {
      query: ALL_CHARACTERS,
      variables: {
        page: 1,
      },
    },
    characters: {
      info: {
        count: 1,
      },
      results: [
        {
          id: '1',
          name: 'Ants in my Eyes Johnson',
          image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
          status: 'Alive',
          gender: 'Male',
          species: 'Human',
          location: {
            name: 'Interdimensional Cable',
          },
        },
      ],
    },
  },
];

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

const AllTheProviders: React.FC<ChildrenDefaultProps> = ({children}) => (
  <NavigationContainer>
    <MockedProvider mocks={mocks} addTypename={false}>
      <CharacterProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CharacterProvider>
    </MockedProvider>
  </NavigationContainer>
);

export * from '@testing-library/react-native';
export {customRender as render};
