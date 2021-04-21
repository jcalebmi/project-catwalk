import React, { useState, useEffect } from 'react';

function Comfort(props) {
  const [rating, setRating] = useState('');
  const buttons = ['1', '2', '3', '4', '5'];
  const handleClick = (e) => {
    if (e.target.value === '1') {
      setRating('Uncomfortable');
    }
    if (e.target.value === '2') {
      setRating('Slightly uncomfortable');
    }
    if (e.target.value === '3') {
      setRating('Ok');
    }
    if (e.target.value === '4') {
      setRating('Comfortable');
    }
    if (e.target.value === '5') {
      setRating('Perfect');
    }
    props.handleComfort(Number(e.target.value));
  };

  return (
    <div>
      <div>
        <span className="bold">Comfort: </span>
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
          name='comfort'
          onClick={handleClick}
          >
          </input>
      </span>)}
    </div>
  );
}

export default Comfort;
