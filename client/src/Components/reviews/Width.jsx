import React, { useState, useEffect } from 'react';

function Width(props) {
  const [rating, setRating] = useState('');
  const buttons = ['1', '2', '3', '4', '5'];
  const handleClick = (e) => {
    if (e.target.value === '1') {
      setRating('Too narrow');
    }
    if (e.target.value === '2') {
      setRating('Slightly narrow');
    }
    if (e.target.value === '3') {
      setRating('Perfect');
    }
    if (e.target.value === '4') {
      setRating('Slightly wide');
    }
    if (e.target.value === '5') {
      setRating('Too wide');
    }
    props.handleWidth(Number(e.target.value));
  };

  return (
    <div>
      <div>
        <span className="bold">Width: </span>
        <span>{rating}</span>
      </div>
      {buttons.map((button) =>
      <span key={button}>
        <label
          htmlFor={button}>
            {button}
        </label>
        <input
          required
          type='radio'
          value={button}
          name='width'
          onClick={handleClick}>
          </input>
      </span>)}
    </div>
  );
}

export default Width;
