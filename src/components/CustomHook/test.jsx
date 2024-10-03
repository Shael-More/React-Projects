import React from 'react';
import useFetch from '.';

const UseFetchHookTest = () => {
  const { data, error, pending } = useFetch(
    `https://dummyjson.com/products`,
    {}
  );

  console.log(data, error, pending);
  return (
    <div className='text-center'>
      <h1>UseFetchHookTest</h1>
      {pending ? <h1>Loading Data ! Please Wait</h1> : null}
      {error ? <h1>Error Occurred</h1> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default UseFetchHookTest;
