import React from "react";
import {MoviesList, Title, SearchForm} from "../components"

export default class Home extends React.Component {
  state = {
    results: [],
    usedSearch: false,
  };

  _handleResults = (results) => {
    this.setState({
      results,
      usedSearch: true,
    });
  };

  _renderResults = () => {
    return this.state.results.length === 0 ? (
      <p>Sorry! result not found!! </p>
    ) : (
      <MoviesList movies={this.state.results}></MoviesList>
    );
  };

  render() {
    return (
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}></SearchForm>
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    );
  }
}
