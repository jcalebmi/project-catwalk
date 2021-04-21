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
    <div>
      <label htmlFor="helpful">Yes</label>
      <input
      type="radio" id="helpful" value="yes" name="helpful" defaultChecked onClick={handleClick}>
      </input>
      <label htmlFor='notHelpful'> No</label>
      <input
      type="radio" id="notHelpful" value="no" name="helpful" onClick={handleClick}>
      </input><br></br>
    </div>
  );
}
export default Recommend;
