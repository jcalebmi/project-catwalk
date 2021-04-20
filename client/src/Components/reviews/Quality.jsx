import React, { useState, useEffect } from 'react';

function Quality(props) {
  const [rating, setRating] = useState('');
  const buttons = ['1', '2', '3', '4', '5'];
  const handleClick = (e) => {
    console.log(e.target.value);
    if (e.target.value === '1') {
      setRating('Poor');
    }
    if (e.target.value === '2') {
      setRating('Below Average');
    }
    if (e.target.value === '3') {
      setRating('What I expected');
    }
    if (e.target.value === '4') {
      setRating('Pretty Great');
    }
    if (e.target.value === '5') {
      setRating('Perfect');
    }
    props.handleComfort(Number(e.target.value));
  };

  return (
    <div>
      <div>
        <span className="bold">Quality: </span>
        <span>{rating}</span>
      </div>
      {buttons.map((button) =>
      <span key={button}>
        <label
          htmlFor={button}>
            {button}
        </label>
        <input
          type='radio'
          value={button}
          name='quality'
          onClick={handleClick}>
          </input>
      </span>)}
    </div>
  );
}

export default Quality;
