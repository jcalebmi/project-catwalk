import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ZoomImage = ({
  styleIdx,
  styles,
  photoIdx,
  coords,
}) => {
  const style = styles[styleIdx];
  const { photos } = style;
  const { x, y, width} = coords;
  const boxSize = 50; // percent of height
  const boxOffset = boxSize / 2; // percent offset

  const xLow = boxOffset / 1.5;
  const xHi = 100 - xLow;
  let setX = x < xLow ? xLow : x;
  setX = setX > xHi ? xHi : setX;

  const yLow = boxOffset;
  const yHi = 100 - yLow;
  let setY = y < yLow ? yLow : y;
  setY = setY > yHi ? yHi : setY;

  const imgStyle = {
    left: `${(setX + 10) * -3.0}%`,
    top: `${(setY - 24.5) * -2.1}%`,
  };
  const mainImg = <img
    style={imgStyle}
    id='mainImage'
    className='mainImage'
    src={photos[photoIdx].url} />;
  return (
    <div id='zoomImage'>
      {mainImg}
    </div>
  );
};

ZoomImage.propTypes = {
  updateStyles: PropTypes.func,
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
  setExpanded: PropTypes.func,
  isExpanded: PropTypes.bool,
};

export default ZoomImage;
