import React from "react";
import {ButtonToHome} from "../components"

export default class extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">404!</h1>
        <h2 className="subtitle">Page not found!</h2>
        <ButtonToHome></ButtonToHome>
      </div>
    );
  }
}
