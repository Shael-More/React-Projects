import React, { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      setError(`${error} Some Error Occurred`);
    } finally {
      setPending(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
};

export default useFetch;
