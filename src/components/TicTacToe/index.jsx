import React, { useEffect, useState } from 'react';
import Square from './square';
import './styles.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  const getWinner = (squares) => {
    const winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      const [x, y, z] = winnerPattern[i];

      if (squares[x] && squares[x] == squares[y] && squares[x] == squares[z]) {
        return squares[x];
      }
    }

    return null;
  };

  const handleClick = (getCurrentSquare) => {
    let cpySquares = [...squares];

    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(''));
    setIsXTurn(true);
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== '')) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className='board-container'>
      <div className='row'>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='row'>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='row'>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <h1 className='status'>{status}</h1>
      <button className='restart-btn' onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Board;
