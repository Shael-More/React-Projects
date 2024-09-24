import React, { useEffect, useState } from 'react';
import './scroll.css'

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async (getUrl) => {
      try {
        setIsLoading(true);

        const response = await fetch(getUrl);
        const data = await response.json();

        if (data) {
          setData(data.products);
          // console.log(data.products);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (isLoading) {
    return <div>Loading Data ! Please Wait...</div>;
  }

  if (error) {
    return <div>Error Occurred! Please Refresh the Page</div>;
  }

  // console.log(scrollPercentage);
  return (
    <div className='text-center'>
      <div className='top-container'>
        <h1 className='text-2xl mb-3'>Custom Scroll Indicator</h1>
        <div className='scroll-track-container'>
          <div
            className='scroll-progress-bar'
            style={{
              width: `${scrollPercentage}%`,
            }}
          ></div>
        </div>
      </div>
      <div className='mt-8'>
        {data && data.length > 0
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
