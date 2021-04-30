import React from 'react';

const ZoomBox = ({ coords }) => {
  const { x, y, width, height } = coords;
  const boxSize = 50; // percent of height
  const boxOffset = boxSize / 2; // percent offset

  const xLow = boxOffset / 1.5;
  const xHi = 100 - xLow;
  let setX = x < xLow ? xLow : x;
  setX = setX > xHi ? xHi : setX;
  setX = ((setX - xLow) / 100) * width;

  const yLow = boxOffset;
  const yHi = 100 - yLow;
  let setY = y < yLow ? yLow : y;
  setY = setY > yHi ? yHi : setY;

  const zoomStyle = {
    width: `${(width * (boxSize / 100)) / 1.5 - 6}px`,
    height: `${height * (boxSize / 100) - 6}px`,
    left: `${setX}px`,
    top: `${setY - boxOffset}%`,
  };

  return (
  <div id='zoomBox' style={zoomStyle}>
    {/* x: {x} y: {y} setX: {setX} */}
  </div>
  );
};

export default ZoomBox;
