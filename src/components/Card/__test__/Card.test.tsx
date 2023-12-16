import React from 'react';
import {render} from '../../../utils/test';
import {Card} from '..';
import {act} from 'react-test-renderer';

describe('Card', () => {
  const mock = {
    gender: 'Male',
    id: '20',
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    location: {name: 'Interdimensional Cable'},
    name: 'Ants in my Eyes Johnson',
    species: 'Human',
    status: 'unknown',
  };

  describe('Card Component Render', () => {
    test('should rendered', () => {
      const {debug} = render(<Card data={mock} />);
      debug();
    });
    // ADD REACT MMKV para salvar o valor do tema e entender mais sobre a lib

    test('should render characterType component', () => {
      const {getByText} = render(<Card data={mock} />);
      expect(getByText('Male')).toBeTruthy();
    });

    test('should open character details with right data was pressed', () => {
      const {debug} = render(<Card data={mock} />);

      debug();
      act(() => {});
    });
  });
});
