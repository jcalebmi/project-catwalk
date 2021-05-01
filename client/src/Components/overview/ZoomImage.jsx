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
  setX = (setX - xLow) / 100;

  const yLow = boxOffset;
  const yHi = 100 - yLow;
  let setY = y < yLow ? yLow : y;
  setY = setY > yHi ? yHi : setY;
  setY -= boxOffset;
  setY /= 100;

  let zoomImgWidth;
  let zoomImgHeight;
  let truncationOffset;
  const zoomStatic = 250;
  let zoomPercent;

  if (imgWidth / width > imgHeight / height) {
    zoomPercent = zoomStatic;
    zoomImgHeight = `${zoomPercent}%`; // base zoom off of height
    zoomImgWidth = 'auto';
    truncationOffset = (imgWidth - (width * (imgHeight / height))) / (2 * imgWidth);
    setX = (setX * ((width * (imgHeight / height)) / imgWidth) + truncationOffset)
      * (imgWidth / imgHeight) * (widthRatio) * -zoomPercent;
    setY *= -(zoomPercent);
  } else {
    zoomPercent = zoomStatic;
    zoomImgHeight = 'auto';
    zoomImgWidth = `${zoomPercent * widthRatio}%`; // base zoom off of width
    truncationOffset = (imgHeight - (height * (imgWidth / width))) / (2 * imgHeight);
    setY = (setY * ((height * (imgWidth / width)) / imgHeight) + truncationOffset)
      * (imgHeight / imgWidth) * -zoomPercent;
    setX *= (-zoomPercent * widthRatio);
  }
  // console.log('truncationOffset: ', truncationOffset, 'setX: ', setX, 'setY: ', setY);

  const imgStyle = {
    width: zoomImgWidth,
    height: zoomImgHeight,
    position: 'absolute',
    left: `${(setX)}%`,
    top: `${(setY)}%`,
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
