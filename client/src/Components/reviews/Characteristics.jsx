import React from 'react';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="characteristicsRating">
        <h6>Comfort</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={this.props.meta.characteristics === undefined ? '1' : this.props.meta.characteristics.Comfort.value}>
          </input>
        </div>
        <h6>Fit</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={this.props.meta.characteristics === undefined ? '1' : this.props.meta.characteristics.Fit.value}>
          </input>
        </div>
        <h6>Length</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={this.props.meta.characteristics === undefined ? '1' : this.props.meta.characteristics.Length.value}>
          </input>
        </div>
        <h6>Quality</h6>
        <div className="ratingSlider">
          <input type="range" min='1' max="5" readOnly={true} value={this.props.meta.characteristics === undefined ? '1' : this.props.meta.characteristics.Quality.value}>
          </input>
        </div>
      </div>
    );
  }
}

export default Characteristics;