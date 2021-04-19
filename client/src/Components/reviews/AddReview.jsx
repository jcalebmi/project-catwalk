import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star1: 'black',
      star2: 'black',
      star3: 'black',
      star4: 'black',
      star5: 'black',
    };
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick(e) {
    const stars = ['star1', 'star2', 'star3', 'star4', 'star5'];
    const star = e.target.className;

    if (this.state[star] === 'black') {
      this.setState({
        [star]: 'gold',
      });
    } else {
      this.setState({
        [star]: 'black',
      });
    }
  }

  render() {
    return (
      <div className="addReview overlay">
        <h1>Write Your Review</h1>
        <h3>About the {this.props.product.name}</h3>
        <div id="writeReviewContainer">
          <div className="writeReview">
            <div className="overallRating">
              <span>
                Overall Rating:
              </span>
              <span style={{ color: this.state.star1 }} className="star1" onClick={this.handleStarClick}>
              ✭
              </span>
              <span style={{ color: this.state.star2 }} className="star2" onClick={this.handleStarClick}>
              ✭
              </span>
              <span style={{ color: this.state.star3} } className="star3" onClick={this.handleStarClick}>
              ✭
              </span>
              <span style={{ color: this.state.star4 }} className="star4" onClick={this.handleStarClick}>
              ✭
              </span>
              <span style={{ color: this.state.star5 }} className="star5" onClick={this.handleStarClick}>
              ✭
              </span>
            </div>

            <form id="addReview">
              <input type='text'></input><br></br>
              <span>Do you recommend this product?</span><br></br>
              <label htmlFor="helpful">Yes</label>
              <input
              type="radio" id="helpful" value="yes">
              </input>
              <label htmlFor='notHelpful'> No</label>
              <input
              type="radio" id="notHelpful" value="no">
              </input><br></br>
              <input type="submit"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddReview;
