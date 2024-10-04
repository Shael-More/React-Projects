import React, { useRef } from 'react';
import useFetch from '../CustomHook';

const ScrollTopToBottom = () => {
  const { data, error, pending } = useFetch(
    'https://dummyjson.com/products?limit=100'
  );

  const bottomRef = useRef(null);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (pending) {
    return <h2>Loading Please Wait</h2>;
  }

  if (error) {
    return <h2>Error Occurred</h2>;
  }
  return (
    <div>
      <h1>Scroll To Top and Bottom Feature</h1>
      <h3>This is the TOP Section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>The is the BOTTOM Section</h3>
    </div>
  );
};

export default ScrollTopToBottom;
