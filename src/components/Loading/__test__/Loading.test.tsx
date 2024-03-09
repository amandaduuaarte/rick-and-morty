import React from 'react';
import {render} from '../../../test/test';
import {Loading} from '../index';

describe('Loading Component', () => {
  it('should render the loading', () => {
    const {debug} = render(<Loading color="blue" />);
    debug();
  });
});
