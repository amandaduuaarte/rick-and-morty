import React from 'react';
import {render} from '../../../test/test';
import {TextField} from '..';

describe('TextField ', () => {
  it('Should render', () => {
    const {debug} = render(
      <TextField placeholder="Teste" value="" callBack={e => console.log(e)} />,
    );
    debug();
  });

  // it('Should render with right value', () => {
  //   const {getByPlaceholderText} = render(
  //     <TextField placeholder="Teste" value="" callBack={e => console.log(e)} />,
  //   );
  //   getByPlaceholderText('Teste');
  //   expect(inputElement.props.placeholder).tobe('Teste');
  // });
});
