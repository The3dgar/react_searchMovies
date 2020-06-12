import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Title, SearchForm, MoviesList } from "./components/Components";

class App extends React.Component {
  state = {
    results: [],
    usedSearch: false,
  };

  _handleResults = (results) => {
    this.setState({
      results,
      usedSearch: true
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
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}></SearchForm>
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
        {/* {this.state.results.length === 0 ? (
          <p>Sin resultados</p>
        ) : (
          <MoviesList movies={this.state.results}></MoviesList>
        )} */}
      </div>
    );
  }
}

export default App;
