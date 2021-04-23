import React from 'react';

function Characteristics(props) {
  if (props.meta.characteristics !== undefined) {
    return (
      <div className="characteristicsRating">
        <h6>Size</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Size === undefined ? '1' : props.meta.characteristics.Size.value}>
          </input>
          <div className='reviews characteristics'>
            <div className="char">Too Small</div>
            <div className="char">Perfect</div>
            <div className="char">Too Big</div>
          </div>
        </div>
        <h6>Comfort</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Comfort === undefined ? '1' : props.meta.characteristics.Comfort.value}>
          </input>
          <div className='reviews characteristics'>
            <div className="char">Poor</div>
            <div className="char">Ok</div>
            <div className="char">Perfect</div>
          </div>
        </div>
        <h6>Fit</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Fit === undefined ? '1' : props.meta.characteristics.Fit.value}>
          </input>
          <div className='reviews characteristics'>
            <div className="char">Too Small</div>
            <div className="char">Perfect</div>
            <div className="char">Too Big</div>
          </div>
        </div>
        <h6>Length</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Length === undefined ? '1' : props.meta.characteristics.Length.value}>
          </input>
          <div className='reviews characteristics'>
            <div className="char">Too Short</div>
            <div className="char">Perfect</div>
            <div className="char">Too Long</div>
          </div>
        </div>
        <h6>Width</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Width === undefined ? '1' : props.meta.characteristics.Width.value}>
          </input>
          <div className='reviews characteristics'>
            <div className="char">Too Short</div>
            <div className="char">Perfect</div>
            <div className="char">Too Long</div>
          </div>
        </div>
        <h6>Quality</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={props.meta.characteristics.Quality === undefined ? '1' : props.meta.characteristics.Quality.value}>
          </input>
          <div className='reviews characteristics'>
            <div className="char">Poor</div>
            <div className="char">Ok</div>
            <div className="char">Perfect</div>
          </div>
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