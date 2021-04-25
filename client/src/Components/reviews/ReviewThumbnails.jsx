import React from 'react';

function ReviewThumbnails (props) {
  return (
    <span>
      {props.photos.map((photo, index) => {
        <img key={index} src={photo.url} />;
      })}
    </span>
  );
}

export default ReviewThumbnails;