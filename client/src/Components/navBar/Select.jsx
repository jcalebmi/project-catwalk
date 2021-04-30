import React, { useState } from 'react';

const Select = ({ loadOptions, handleSelect }) => (
  <select
    onChange={handleSelect}
    id='prodSearchSelect'>
    <option
      value=''>
        Select a Product
    </option>
    {loadOptions.map((product) => (
      <option
        key={product.id}
        value={`${product.id}|${product.name}`}>
          {product.name}
      </option>
    ))}
  </select>
);

export default Select;
