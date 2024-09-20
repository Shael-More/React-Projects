import React, { useEffect, useState } from 'react';

const LoadItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div className='text-center'>Loading Data ! Please wait ...</div>;
  }

  return (
    <div className='flex flex-col '>
      <div className='grid grid-cols-4 gap-4'>
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className='flex flex-col justify-center items-center border m-1 p-2'>
                <img
                  className='w-[200px] h-[200px] '
                  src={item.thumbnail}
                  alt={item.id}
                />
                <p className='text-center'>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className='m-5 p-5 flex flex-col justify-center items-center'>
        <button className='bg-lime-200 hover:bg-slate-400 p-3' disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load more products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadItems;
