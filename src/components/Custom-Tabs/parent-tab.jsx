import React from 'react';
import Tabs from './tabs';

const RandomComponent = () => {
    return <div>Some Random Content</div>
}

const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
    
}

const ParentTab = () => {
  const tabs = [
    { label: 'Tab 1', content: <div>This is content of Tab 1</div> },
    { label: 'Tab 2', content: <div>This is content of Tab 2</div> },
    { label: 'Tab 3', content: <div>This is content of Tab 3</div> },
    { label: 'Tab 4', content: <RandomComponent /> },
  ];
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default ParentTab;
