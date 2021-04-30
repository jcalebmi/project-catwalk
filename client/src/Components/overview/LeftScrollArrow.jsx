import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LeftScrollArrow = ({
  setPhotoIdx,
  photoIdx,
}) => {
  if (photoIdx !== 0) {
    return <div
      onClick={() => {
        setPhotoIdx(photoIdx - 1);
      }}
      className='arrowbox mainLeft'>
      <i className="arrow left"></i>
    </div>;
  }
  return null;
};

LeftScrollArrow.propTypes = {
  setPhotoIdx: PropTypes.func,
  photoIdx: PropTypes.number,
};

export default LeftScrollArrow;
