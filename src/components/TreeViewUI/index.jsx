import React from 'react';
import MenuList from './menu-list';

const TreeView = ({ menus = [] }) => {
  return (
    <div className='min-h-screen w-[350px] bg-blue-900 p-5'>
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
