import React from 'react';

function Characteristics(props) {
  if (props.meta.characteristics !== undefined) {
  return (
    <div className="characteristicsRating">
      <h6>Comfort</h6>
      <div className="ratingSlider">
        <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Comfort === undefined ? '1' : props.meta.characteristics.Comfort.value}>
        </input>
      </div>
      <h6>Fit</h6>
      <div className="ratingSlider">
        <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Fit === undefined ? '1' : props.meta.characteristics.Fit.value}>
        </input>
      </div>
      <h6>Length</h6>
      <div className="ratingSlider">
        <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Length === undefined ? '1' : props.meta.characteristics.Length.value}>
        </input>
      </div>
      <h6>Quality</h6>
      <div className="ratingSlider">
        <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Quality === undefined ? '1' : props.meta.characteristics.Quality.value}>
        </input>
      </div>
    </div>
  );
} else {
  return (
    <div className="characteristicsRating"></div>
  )
}
}

export default Characteristics;