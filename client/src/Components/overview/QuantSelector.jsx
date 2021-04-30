import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const QuantSelector = ({
  styleIdx,
  styles,
  sizeSku,
  quant,
  setQuant,
}) => {
  const style = styles[styleIdx];
  const quantity = style.skus[sizeSku]
    ? style.skus[sizeSku].quantity
    : null;
  const handleChange = (e) => {
    setQuant(Number(e.target.value));
  };
  const quantOptions = quantity > 0
    ? <select
      onChange={handleChange}
      defaultValue={1} id='quantSelector'>
      {Array(quantity).fill('').slice(0, 15).map((val, idx) => (
        <option
          key={idx + 1}
          value={idx + 1}>{idx + 1}</option>
      ))}
    </select>
    : <select disabled defaultValue='-' id='quantSelector'>
      <option>-</option>
    </select>;
  return (
    quantOptions
  );
};

QuantSelector.propTypes = {
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
  size: PropTypes.string,
  quant: PropTypes.number,
  setQuant: PropTypes.func,
};

export default QuantSelector;
