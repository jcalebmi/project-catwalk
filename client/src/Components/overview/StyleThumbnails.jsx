import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StyleThumbnails = ({
  setStyleIdx,
  styleIdx,
  styles,
}) => {
  const style = styles[styleIdx];

  return (
    <div className='styleThumbnails'>
      {styles.map((curStyle, idx) => {
        const selected = curStyle.style_id === style.style_id
          ? <i className='material-icons selected' >check</i>
          : null;

        return (<div
          className='styleThumbnail'
          key={curStyle.style_id}>
          <img onClick={(e) => {
            e.stopPropagation();
            setStyleIdx(idx);
          }}
          src={curStyle.photos[0].thumbnail_url}/>
          {selected}
        </div>);
      })}
      </div>
  );
};

StyleThumbnails.propTypes = {
  setStyleIdx: PropTypes.func,
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
};

export default StyleThumbnails;
