import React from 'react'

const Square = ({value, onClick}) => {
  return (
    <button onClick={onClick} className='square'>{value}</button>
  )
}

export default Square