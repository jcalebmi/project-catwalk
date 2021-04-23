import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollArrows from './ScrollArrows.jsx';
import ImgThumbnails from './ImgThumbnails.jsx';

const ImageGallery = ({
  styleIdx,
  styles,
  setExpanded,
  isExpanded,
}) => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const style = styles[styleIdx];
  const { photos } = style;

  const mainImg = <img
    className='mainImage'
    src={photos[photoIdx].url} />;

  return (
    <div className='ImageGallery' onClick={() => { setExpanded(!isExpanded); }}>
      {mainImg}
      <div className='thumbnailContainer'>
        < ImgThumbnails
        setPhotoIdx={setPhotoIdx}
        photoIdx={photoIdx}
        photos={photos}/>
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

ImageGallery.propTypes = {
  updateStyles: PropTypes.func,
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
  setExpanded: PropTypes.func,
  isExpanded: PropTypes.bool,
};

export default ImageGallery;
