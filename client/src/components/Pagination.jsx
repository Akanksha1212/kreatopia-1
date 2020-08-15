import React from 'react';
import { List } from '@material-ui/core';

export default ({ totalPost, postsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <List className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} style={{ textDecoration: 'none' }}>
            <div onClick={() => paginate(number)} className='page-link'>
              {number}
            </div>
          </li>
        ))}
      </List>
    </nav>
  );
};
