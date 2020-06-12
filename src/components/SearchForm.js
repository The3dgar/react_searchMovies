import React from "react";
const API_KEY = "ccdd084c";
export class SearchForm extends React.Component {
  state = {
    inputMovie: "",
  };
  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };
  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;
    if (inputMovie) {
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then((res) => res.json())
        .then((res) => {
          const {Search = [], totalResults = "0"} = res
          console.log(res);
          this.props.onResults(Search)
        });
    }
  };
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this._handleChange}
              className="input"
              type="text"
              placeholder="Movie"
            ></input>
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
