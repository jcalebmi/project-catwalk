import React, { useState, useEffect } from 'react';

function Length(props) {
  const [rating, setRating] = useState('');
  const buttons = ['1', '2', '3', '4', '5'];
  const handleClick = (e) => {
    if (e.target.value === '1') {
      setRating('Runs short');
    }
    if (e.target.value === '2') {
      setRating('Runs slightly short');
    }
    if (e.target.value === '3') {
      setRating('Perfect');
    }
    if (e.target.value === '4') {
      setRating('Runs slightly long');
    }
    if (e.target.value === '5') {
      setRating('Runs long');
    }
    props.handleLength(Number(e.target.value));
  };

  return (
    <div>
      <div>
        <span className="bold">Length: </span>
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
            name='length'
            onClick={handleClick}>
            </input>
        </span>)}
      </div>
    </div>
  );
}

export default Length;
