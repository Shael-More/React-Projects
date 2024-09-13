import { useEffect, useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000');
  const [type, setType] = useState('hex');

  const randomColorUtility = (range) => {
    return Math.floor(Math.random() * range);
  };

  const handleRGBColorGeneration = () => {
    let r = randomColorUtility(255);
    let g = randomColorUtility(255);
    let b = randomColorUtility(255);

    setColor(`rgb(${r},${g},${b})`);
  };

  const handleHexColorGeneration = () => {
    let hex = '#';
    let hexValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    for (let i = 0; i < 6; i++) {
      hex += hexValues[randomColorUtility(hexValues.length)];
    }
    setColor(hex);
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <div className='text-2xl flex justify-center gap-5 '>
        <button
          onClick={() => setType('hex')}
          className='bg-slate-300 mt-3 p-2 text-black rounded-md hover:bg-slate-400'
        >
          Create Hex Color
        </button>
        <button
          onClick={() => setType('rgb')}
          className='bg-slate-300 mt-3 p-2 text-black rounded-md hover:bg-slate-400'
        >
          Create RGB Color
        </button>
        <button
          onClick={
            type === 'hex'
              ? () => handleHexColorGeneration()
              : () => handleRGBColorGeneration()
          }
          className='bg-blue-300 mt-3 p-2 text-black rounded-md hover:bg-slate-400'
        >
          Generate Random Color
        </button>
      </div>

      <div
        className='flex justify-center items-center flex-col mt-20 text-3xl'>
        <h3 className='text-white mb-4'>
          {type === 'hex' ? 'HEX COLOR' : 'RGB COLOR'}
        </h3>
        <p>{color}</p>
      </div>
    </div>
  );
};

export default RandomColor;
