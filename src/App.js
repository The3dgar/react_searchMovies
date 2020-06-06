import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Title, SearchForm} from './components/Components'

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm></SearchForm>
      </div>
    </div>
  );
}

export default App;
