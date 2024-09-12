import { useState } from 'react';
import data from './data';

const Accordion = () => {
  const [singleSelection, setSingleSelection] = useState(null);
  const [enableMultiSel, setEnableMultiSel] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSingleSelection(currentId === singleSelection ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
    let cpyMultiple = [...multiSelected];

    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiSelected(cpyMultiple);
  };

  return (
    <div className='flex justify-center items-center flex-col gap-5 h-screen w-screen'>
      <h1>Multi Selection</h1>
      <button
        onClick={() => setEnableMultiSel(!enableMultiSel)}
        className='bg-blue-300 p-2 rounded-sm hover:bg-blue-500'
      >
        {!enableMultiSel ? "Enable" : "Disable" }
      </button>
      <div className='w-[500px]'>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className='bg-slate-300 mb-2 p-2'>
              <div
                className='flex justify-between font-bold cursor-pointer'
                onClick={
                  enableMultiSel
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSel
                ? multiSelected.indexOf(item.id) !== -1 && (
                    <div className='p-2 h-auto'>{item.answer}</div>
                  )
                : singleSelection === item.id && (
                    <div className='p-2 h-auto'>{item.answer}</div>
                  )}

              {/* {singleSelection === item.id || multiSelected.indexOf(item.id) !== -1 ? (
                <p className='p-2 h-auto'>{item.answer}</p>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
