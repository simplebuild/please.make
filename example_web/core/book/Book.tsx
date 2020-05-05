import React from 'react';

type BookProps = {
  title: string,
  author: string
};

const Book: React.FC<BookProps> = ({ title, author }) => {
  return (
    <div>
      <h3 data-testid="title">{title}</h3>
      <h6 data-testid="author">{author}</h6>
    </div>
  );
}

export default Book;
