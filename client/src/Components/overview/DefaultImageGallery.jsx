import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollArrows from './ScrollArrows.jsx';

const DefaultImageGallery = ({
  styleIdx,
  styles,
  setExpanded,
}) => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const style = styles[styleIdx];
  const { photos } = style;
  const thumbnails = photos.map((photo, idx) => (
    <img className='thumbnail'
    key={idx}
    onClick={(e) => {
      e.stopPropagation();
      setPhotoIdx(idx);
    }}
    src={photo.thumbnail_url}/>));

  const mainImg = <img
    className='mainImage'
    src={photos[photoIdx].url} />;

  return (
    <div className='defaultImageGallery' onClick={() => { setExpanded(true); }}>
      {mainImg}
      <div className='thumbnailContainer'>
        { thumbnails }
      </div>
      <div className='scrollArrows'>
        <ScrollArrows
          setPhotoIdx={setPhotoIdx}
          photoIdx={photoIdx}
          photos={photos}/>
      </div>
    </div>
  );
};

DefaultImageGallery.propTypes = {
  updateStyles: PropTypes.func,
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
  setExpanded: PropTypes.func,
};

export default DefaultImageGallery;
