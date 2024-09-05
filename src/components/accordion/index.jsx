import { useState } from 'react';
import data from './data';

const Accordion = () => {
  const [singleSelection, setSingleSelection] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);

    setSingleSelection(singleSelection === getCurrentId ? null : getCurrentId);

    // console.log(singleSelection);
  };
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col bg-blue-300'>
      <div className='mb-4 text-2xl '>Accordions</div>
      <div className='w-[500px] flex flex-col justify-center items-center '>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className='flex flex-col w-full p-4 bg-red-400 text-white'
              onClick={() => handleSingleSelection(item.id)}
            >
              <div className='flex justify-between w-full'>
                <h3 className='text-2xl'>{item.question}</h3>
                <span>+</span>
              </div>
              <div className='text-center'>
                {singleSelection === item.id ? (
                  <h2 className='text-2xl p-2'>{item.answer}</h2>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>Data not found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
