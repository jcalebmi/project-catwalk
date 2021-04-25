import React, { useState, useEffect } from 'react';

function Size(props) {
  const [rating, setRating] = useState('');
  const buttons = ['1', '2', '3', '4', '5'];
  const handleClick = (e) => {
    if (e.target.value === '1') {
      setRating('A size too small');
    }
    if (e.target.value === '2') {
      setRating('½ a size too small');
    }
    if (e.target.value === '3') {
      setRating('Perfect');
    }
    if (e.target.value === '4') {
      setRating('½ a size too big');
    }
    if (e.target.value === '5') {
      setRating('A size too wide');
    }
    props.handleSize(Number(e.target.value));
  };

  return (
    <div>
      <div>
        <span className="bold">Size: </span>
        <span>{rating}</span>
      </div>
      <div className="radioContainer">
        {buttons.map((button) =>
        <span key={button} className='addReview radio'>
          <label
            htmlFor={button}>
              {button}
          </label>
          <input
            required
            type='radio'
            value={button}
            name='size'
            onClick={handleClick}>
            </input>
        </span>)}
      </div>
    </div>
  );
}

export default Size;
