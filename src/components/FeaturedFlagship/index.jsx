import React, { useContext } from 'react';
import ThemeToggle from '../ThemeToggle';
import RandomColor from '../RandomColorGenerator';
import Accordion from '../Accordion';
import TreeView from '../TreeViewUI';
import TicTacToe from '../TicTacToe';
import { FeatureFlagsContext } from './context';
import Menus from '../TreeViewUI/data';

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'showDarkAndLightMode',
      component: <ThemeToggle />,
    },
    {
      key: 'showTicTacToe',
      component: <TicTacToe />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor />,
    },
    {
      key: 'showAccordion',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={Menus} />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey];
  };

  if (loading) return <div>Loading Data ! Please Wait</div>;
  return (
    <div>
      <h1>Feature Flags</h1>

      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
