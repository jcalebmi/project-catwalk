import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImgThumbnails = ({
  setPhotoIdx,
  photoIdx,
  photos,
}) => {
  const [start, setStart] = useState(0);
  // let topArrow = null;
  // let bottomArrow = null;
  let upArrow = null;
  let downArrow = null;

  const thumbnails = photos.slice(start, start + 7).map((photo, idx) => (
    <img className='thumbnail'
    key={idx}
    onClick={(e) => {
      e.stopPropagation();
      setPhotoIdx(start + idx);
    }}
    src={photo.thumbnail_url}/>));

  if (start !== 0) {
    upArrow = <div
      key='up'
      onClick={(e) => {
        e.stopPropagation();
        setStart(start - 1);
      }}
      className='arrowbox'>
      <i className="arrow up"></i>
    </div>;
  } else {
    upArrow = <div
    key='up'
    className='arrowbox'
    id='hidden'>
      <i className="arrow up"></i>
    </div>;
  }

  if (start + 7 < photos.length) {
    downArrow = <div
    key='down'
    onClick={(e) => {
      e.stopPropagation();
      setStart(start + 1);
    }}
    className='arrowbox'>
      <i className="arrow down"></i>
    </div>;
  } else {
    downArrow = <div
      key='down'
      className='arrowbox'
      id='hidden'>
      <i className="arrow down"></i>
    </div>;
  }

  return (
    [
      upArrow,
      thumbnails,
      downArrow,
    ]
  );
};

ImgThumbnails.propTypes = {
  setPhotoIdx: PropTypes.func,
  photoIdx: PropTypes.number,
};

export default ImgThumbnails;
