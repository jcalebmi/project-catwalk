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
  const handleClick = (e) => {
    e.stopPropagation();
    setPhotoIdx(photoIdx + 1);
  };

  if (photoIdx !== 0) {
    leftArrow = <div
      key='left'
      onClick={handleClick}
      className='arrow left'> <span className='text'>&lt;</span>
    </div>;
  } else {
    leftArrow = <div
      key='left'
      className='arrow left'
      id='hidden'> <span className='text'>&lt;</span>
    </div>;
  }

  if (photoIdx !== photos.length - 1) {
    rightArrow = <div
      key='right'
      onClick={handleClick}
      className='arrow right'> <span className='text'>&gt;</span>
    </div>;
  } else {
    rightArrow = <div
      key='right'
      className='arrow right'
      id='hidden'> <span className='text'>&gt;</span>
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
