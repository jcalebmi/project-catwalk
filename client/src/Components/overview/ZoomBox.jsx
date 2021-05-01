import React from 'react';

const ZoomBox = ({ coords }) => {
  const { x, y, width, height, imgWidth, imgHeight } = coords;
  // height is always 600px, width is between 1000 px and 600px total with a 60/40 split
  // 360px <= mainImg width <= 600px
  const widthRatio = 60 / 40; // ratio of main to zoom width
  const boxSize = 40; // percent of height
  const boxOffset = boxSize / 2; // percent offset

  const xLow = boxOffset / widthRatio;
  const xHi = 100 - xLow;
  let setX = x < xLow ? xLow : x;
  setX = setX > xHi ? xHi : setX;
  setX = ((setX - xLow) / 100) * width;

  const yLow = boxOffset;
  const yHi = 100 - yLow;
  let setY = y < yLow ? yLow : y;
  setY = setY > yHi ? yHi : setY;
  setY -= boxOffset;

  const borderSize = 3;
  const zoomBoxWidth = (width * (boxSize / 100)) / widthRatio - 2 * borderSize;
  const zoomBoxHeight = (height * (boxSize / 100)) - 2 * borderSize;

  const zoomStyle = {
    width: `${zoomBoxWidth}px`,
    height: `${zoomBoxHeight}px`,
    left: `${setX}px`,
    top: `${setY}%`,
  };

  return (
  <div id='zoomBox' style={zoomStyle}>
    {/* x: {x} y: {y} setX: {setX} width: {width} height: {height} */}
  </div>
  );
};

export default ZoomBox;
