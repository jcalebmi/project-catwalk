import React from 'react';
import PropTypes from 'prop-types';
import Redux from 'react-redux';

const Count = ({ count, handleCountInc }) => {
  return (
    <div>
      <button type="submit" onClick={handleCountInc}>1</button>
    </div>
  )

};

export default Count;
