import React from 'react'
import useWindowResize from '.'

const UseWindowResizeTest = () => {
  const windowSize = useWindowResize()
  const {width, height} = windowSize;
  return (
    <div>
      <h1>Use Window Resize Test</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  )
}

export default UseWindowResizeTest