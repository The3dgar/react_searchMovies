import React from "react";
import PropTypes from "prop-types";
const API_KEY = "ccdd084c";

export default class Details extends React.Component {
  static propTypes = {
    id: PropTypes.string,
  };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          movie: res,
        });
      });
  }

  componentDidMount() {
    const { id } = this.props;
    this._fetchMovie({ id });
  }
  _goBack () {
    window.location = "/"
  }
  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button onClick ={this._goBack}>Go back</button>
        <h1>{Title}</h1>
        <img src={Poster} alt="movie img"></img>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
