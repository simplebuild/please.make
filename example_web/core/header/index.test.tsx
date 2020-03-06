import ReactDom from 'react-dom';
import React from 'react';

import Header from './index';

it('should render Header without error', () => {
  const div = document.createElement('div');
  ReactDom.render(<Header/>, div);
  ReactDom.unmountComponentAtNode(div);
});
