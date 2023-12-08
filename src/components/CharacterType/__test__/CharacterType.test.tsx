import React from 'react';
import {CharacterType} from '..';
import {render} from '../../../utils/test';

describe('CharacterType Component', () => {
  test('should render label with passed text', () => {
    const {debug, getByText} = render(
      <CharacterType label="male" status="Alive" key="01" />,
    );
    debug();
    expect(getByText('male')).toBeTruthy();
  });

  test('should render status with passed text', () => {
    const {debug, getByTestId} = render(
      <CharacterType label="male" status="Alive" key="01" />,
    );
    debug();
    expect(getByTestId('characterStatus').props.status).toBe('Alive');
  });
});
