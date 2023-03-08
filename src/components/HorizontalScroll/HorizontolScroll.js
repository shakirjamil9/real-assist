import React from 'react';
import Card from '../Card';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';

const getItems = () =>
  Array(5)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const HorizontolScroll = () => {
  const [items, setItems] = React.useState(getItems);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => {
        return <Card key={id} />;
      })}
    </ScrollMenu>
  );
};

export default HorizontolScroll;
