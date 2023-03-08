import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <>
      {!isFirstItemVisible ? (
        <div
          className="triangle-right triangle-left"
          onClick={() => scrollPrev()}
        ></div>
      ) : null}
    </>
  );
}
