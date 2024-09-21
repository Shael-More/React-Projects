import React from 'react'
import useResponsiveJSX from './useResponsiveJSX'

const Responsive = () => {
    const breakpoint = useResponsiveJSX([600, 900, 1200])
  return (
    <>
    {breakpoint === 0 && <div>Mobile</div>}
    {breakpoint === 1 && <div>Tablet</div>}
    {breakpoint === 2 && <div>Desktop</div>}
    {breakpoint === 3 && <div>Large Desktop</div>}
    </>
  )
}

export default Responsive