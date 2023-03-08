import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <>
      {!isLastItemVisible ? (
        <div className="triangle-right" onClick={() => scrollNext()}></div>
      ) : null}
    </>
  );
}
