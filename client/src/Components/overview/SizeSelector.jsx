import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SizeSelector = ({
  setStyleIdx,
  styleIdx,
  styles,
  size,
  setSize,
}) => {
  const style = styles[styleIdx];
  const sizes = style.skus;
  const handleChange = (e) => {
    e.stopPropagation();
    setSize(e.target.value);
  };
  const inStock = Object.keys(sizes)
    .reduce((acc, curSize) => {
      if (sizes[curSize].quantity > 0) {
        acc.push([sizes[curSize], curSize]);
        return acc;
      }
      return acc;
    }, []);
  return (
    <select required onChange={ handleChange } defaultValue='SelectSize' id='sizeSelector'>
      <option value='SelectSize'>Select Size</option>
      {inStock.map((curSize, idx) => (
        <option
          key={curSize}
          value={curSize[1]}>
            {curSize[0].size}
        </option>
      ))}
    </select>
  );
};

SizeSelector.propTypes = {
  setStyleIdx: PropTypes.func,
  styleIdx: PropTypes.number,
  styles: PropTypes.array,
};

export default SizeSelector;
