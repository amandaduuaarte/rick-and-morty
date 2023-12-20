import React from 'react';
import {render} from '../../../utils/test';
import {TextField} from '..';

describe('TextField', () => {
  describe('Should render', () => {
    render(
      <TextField placeholder="Teste" value="" callBack={e => console.log(e)} />,
    );
  });
});
