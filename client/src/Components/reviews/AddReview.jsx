import React from 'react';
import OverallRating from './OverallRating.jsx';
import HelpfulRadio from './HelpfulRadio.jsx';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: '',
    };
    this.helpful = this.helpful.bind(this);
  }

  helpful(boolean) {
    this.setState({
      helpful: boolean,
    });
  }
  render() {
    return (
      <div className="addReview overlay">
        <h1>Write Your Review</h1>
        <h3>About the {this.props.product.name}
        </h3>
        <div id="writeReviewContainer">
          <div className="writeReview">
            <OverallRating />
            <form id="addReview">
              <input type='text'></input><br></br>
              <span>Do you recommend this product?</span><br></br>
              <HelpfulRadio helpful={this.helpful}/>
              <input type="submit"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddReview;
