import { useEffect, useState } from 'react';

// functional component
const FirstHook = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // The Code that we want to run
    console.log("The count is :", value)

    // optional return function (cleanup function)

    return () => {console.log('I am being cleaned up!')}
  }, []) // The dependency array - what it should listen to run the effect again

  const handleInc = () => {
    if (value <= 9) setValue((prev) => prev + 1);
  };
  const handleDec = () => {
    if (value >= 1) setValue((prev) => prev - 1);
  };
  return (
    <div>
      <h1>useState Hook</h1>
      <h3>value: {value}</h3>
      <button className='bg-slate-400 p-2 rounded-full' onClick={handleInc}>
        Increment
      </button>
      <button className='bg-slate-400 p-2 rounded-full' onClick={handleDec}>
        Decrement
      </button>
    </div>
  );
};

export default FirstHook;
