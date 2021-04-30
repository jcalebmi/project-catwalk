import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const RightScrollArrow = ({
  setPhotoIdx,
  photoIdx,
  photos,
}) => {
  if (photoIdx !== photos.length - 1) {
    return <div
      key='right'
      onClick={(e) => {
        e.stopPropagation();
        setPhotoIdx(photoIdx + 1);
      }}
      className='arrowbox mainRight'>
      <i className="arrow right"></i>
    </div>;
  }
  return null;
};

RightScrollArrow.propTypes = {
  setPhotoIdx: PropTypes.func,
  photoIdx: PropTypes.number,
  photos: PropTypes.array,
};

export default RightScrollArrow;
