import React from 'react';
import {CharacterType} from '..';
import {render} from '../../../test/test';

describe('CharacterType', () => {
  describe('CharacterType Component Render', () => {
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

  describe('CharacterType Component NOT rendering', () => {
    test('Should not render status if no text is passed', () => {
      const {getByTestId} = render(<CharacterType label="male" />);

      expect(getByTestId('characterStatus').props.status).toEqual(undefined);
    });
  });
});
