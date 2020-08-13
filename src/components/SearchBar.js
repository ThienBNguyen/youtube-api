import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <label> Video Search</label>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}
