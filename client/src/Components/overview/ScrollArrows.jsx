import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ScrollArrows = ({
  setPhotoIdx,
  photoIdx,
  photos,
}) => {
  let scrollArrows = null;
  let leftArrow = null;
  let rightArrow = null;

  if (photoIdx !== 0) {
    leftArrow = <div
      key='left'
      onClick={(e) => {
        e.stopPropagation();
        setPhotoIdx(photoIdx - 1);
      }}
      className='arrowbox'>
      <i className="arrow left"></i>
    </div>;
  } else {
    leftArrow = <div
      key='left'
      className='arrowbox'
      id='hidden'>
      <i className="arrow left"></i>
    </div>;
  }

  if (photoIdx !== photos.length - 1) {
    rightArrow = <div
      key='right'
      onClick={(e) => {
        e.stopPropagation();
        setPhotoIdx(photoIdx + 1);
      }}
      className='arrowbox'>
      <i className="arrow right"></i>
    </div>;
  } else {
    rightArrow = <div
      key='right'
      className='arrowbox'
      id='hidden'>
      <i className="arrow right"></i>
    </div>;
  }
  scrollArrows = [leftArrow, rightArrow];

  return (
    scrollArrows
  );
};

ScrollArrows.propTypes = {
  setPhotoIdx: PropTypes.func,
  photoIdx: PropTypes.number,
};

export default ScrollArrows;
