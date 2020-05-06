import React from 'react';
import {Book} from '~core/book';

const books = [
  {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
  {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
  {id: 3, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling'}
];

const App: React.FC = () => {
  return (
    <>
      {books.map(book => <Book key={book.id} title={book.title} author={book.author}/>)}
    </>
  );
}

export default App;
