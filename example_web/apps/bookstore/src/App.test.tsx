import ReactDom from 'react-dom';
import React from 'react';

import App from './App';

it('should render App without error', () => {
  const div = document.createElement('div');
  ReactDom.render(<App/>, div);
  ReactDom.unmountComponentAtNode(div);
});
