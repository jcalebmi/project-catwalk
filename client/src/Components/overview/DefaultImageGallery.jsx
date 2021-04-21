import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const selectProductById = (state) => state.product;
const selectAllProducts = (state) => state.products;

const DefaultImageGallery = ({ setExpanded }) => {
  const photos = [
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80'
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1500699889581-a7f97ec155d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80'
    },
  ];
  // onClick={() => { setExpanded(true); }}
  return (
    <div className='defaultImageGallery' >
      <img className='mainImage' src={photos[0].url} />
      <div className='thumbnailContainer'>
        {photos.map((photo, idx) => (
          <img className='thumbnail' key={idx} src={photo.thumbnail_url} />
        ))}
      </div>

      {/* <Thumbnails />
      <ScrollArrows /> */}
    </div>
  );
};

DefaultImageGallery.propTypes = {
  setExpanded: PropTypes.func,
};

export default DefaultImageGallery;
