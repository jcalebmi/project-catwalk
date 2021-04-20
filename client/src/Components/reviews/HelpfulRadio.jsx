import React from 'react';

class HelpfulRadio extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.value === 'yes') {
      this.props.helpful(true);
    } else {
      this.props.helpful(false);
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="helpful">Yes</label>
        <input
        type="radio" id="helpful" value="yes" name="helpful" defaultChecked onClick={this.handleClick}>
        </input>
        <label htmlFor='notHelpful'> No</label>
        <input
        type="radio" id="notHelpful" value="no" name="helpful" onClick={this.handleClick}>
        </input><br></br>
      </div>
    );
  }
}
export default HelpfulRadio;
