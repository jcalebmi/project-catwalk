import React from 'react';

function Recommend(props) {
  const handleClick = (e) => {
    if (e.target.value === 'yes') {
      props.recommended(true);
    } else {
      props.recommended(false);
    }
  };

  return (
    <div className="addReview helpful">
      <span className='bold recommend radio'>Do you recommend this product?</span><br></br>
      <label htmlFor="helpful">Yes</label>
      <input
      type="radio" id="helpful" value="yes" name="helpful" defaultChecked onClick={handleClick} required>
      </input>
      <label htmlFor='notHelpful'> No</label>
      <input
      type="radio" id="notHelpful" value="no" name="helpful" onClick={handleClick}>
      </input><br></br>
    </div>
  );
}
export default Recommend;
