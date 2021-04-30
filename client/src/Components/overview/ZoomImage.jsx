import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollArrows from './ScrollArrows.jsx';
import RightScrollArrow from './RightScrollArrow.jsx';
import LeftScrollArrow from './LeftScrollArrow.jsx';
import ImgThumbnails from './ImgThumbnails.jsx';

const ZoomImage = ({
  styleIdx,
  styles,
  photoIdx,
  coords,
}) => {
  const style = styles[styleIdx];
  const { photos } = style;
  const { x, y } = coords;
  let setY = y < 20 ? 20 : y;
  setY = setY > 80 ? 80 : setY;
  let setX = x < 20 ? 20 : x;
  setX = setX > 80 ? 80 : setX;
  const imgStyle = {
    left: `${(setX + 2.5) * -3.4}%`,
    top: `${(setY - 19) * -1.7}%`,
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
