import React from 'react';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div>404 Not Found </div>
      <Link to='/'>Home from link</Link>
    </div>
  );
};

export default NotFoundPage;
