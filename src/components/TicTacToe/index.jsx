import React from 'react';
import './styles.css';
import Square from './square';


const TicTacToe = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>


      <div>Result</div>
      <button>Restart</button>

    </div>
  );
};

export default TicTacToe;
