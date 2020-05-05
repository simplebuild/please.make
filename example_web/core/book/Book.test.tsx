import React from 'react';
import {render} from '@testing-library/react';
import Book from './Book';

test('renders title and author', () => {
  const title = 'Fake Title';
  const author = 'Fake Author';

  const { getByTestId } = render(<Book title={title} author={author}/>);
  expect(getByTestId('title').textContent).toBe(title);
  expect(getByTestId('author').textContent).toBe(author);
});
