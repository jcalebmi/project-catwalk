import React from 'react';

class QAsSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSearchClick(e) {
    e.preventDefault();
   }

  render() {
    return (
      <div>
        <form>
        <input name="search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleInputChange}></input>
        <button type="submit" onClick={this.handleSearchClick}>Go</button>
        </form>
      </div>
    );
  }
}

export default QAsSearch;
