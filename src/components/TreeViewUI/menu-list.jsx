import React from 'react'
import Menu from './data'
import MenuItem from './menu-item'

const MenuList = ({list = []}) => {
  return (
    <ul className='list-none px-6'>
        {
            list && list.length ? 
            list.map(listItem => <MenuItem item={listItem}/>)
            : null
        }
    </ul>
  )
}

export default MenuList