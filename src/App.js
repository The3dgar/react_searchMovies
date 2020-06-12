import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Details, Home } from "./pages";

class App extends React.Component {
  render() {
    const url = new URL(document.location);

    const Page = url.searchParams.has("id") ? (
      <Details id={url.searchParams.get("id")}></Details>
    ) : (
      <Home></Home>
    );
    return <div className="App">{Page}</div>;
  }
}

export default App;
