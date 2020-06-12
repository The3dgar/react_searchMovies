import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Details, Home } from "./pages";
import {Switch, Route} from "react-router-dom"

class App extends React.Component {
  render() {
    return <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detail/:id" component={Details}></Route>
      </Switch>
    </div>;
  }
}

export default App;
