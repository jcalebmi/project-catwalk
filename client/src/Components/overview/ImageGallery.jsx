import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollArrows from './ScrollArrows.jsx';
import RightScrollArrow from './RightScrollArrow.jsx';
import LeftScrollArrow from './LeftScrollArrow.jsx';
import ImgThumbnails from './ImgThumbnails.jsx';

const ImageGallery = ({
  styleIdx,
  styles,
  setExpanded,
  isExpanded,
  handleMouseMove,
  photoIdx,
  setPhotoIdx,
  hidden,
}) => {
  const style = styles[styleIdx];
  const { photos } = style;
  const hiddenId = hidden ? 'hiddenImg' : '';
  const mainImg = <img
    id='mainImage'
    className='mainImage'
    src={photos[photoIdx].url} />;
  if (isExpanded === false) {
    return (
      <div className='ImageGallery' onClick={(e) => {
        if (e.target.id === 'mainImage') {
          setExpanded(!isExpanded);
        }
      }}>
        {mainImg}
        <div className='thumbnailContainer'>
          < ImgThumbnails
          setPhotoIdx={setPhotoIdx}
          photoIdx={photoIdx}
          photos={photos}/>
        </div>
        <LeftScrollArrow
          setPhotoIdx={setPhotoIdx}
          photoIdx={photoIdx}
          photos={photos}/>
        <RightScrollArrow
          setPhotoIdx={setPhotoIdx}
          photoIdx={photoIdx}
          photos={photos}/>
      </div>
    );
  }
  return (
    <div onMouseMove={handleMouseMove} id={hiddenId} className={`ImageGallery`} onClick={(e) => {
      if (e.target.id === 'mainImage') {
        setExpanded(!isExpanded);
      }
    }}>
      {mainImg}
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
