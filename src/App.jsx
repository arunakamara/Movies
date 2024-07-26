import React, { Component } from "react";
import Movies from "./Components/movie";
import { getMovies } from "../../vidly/src/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLikes = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].likes++;
    this.setState({ movies });
  };

  handleDislikes = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].dislikes++;
    this.setState({ movies });
  };

  handleReset = () => {
    const movies = getMovies();
    movies.forEach(m => {
      m.likes = 0;
      m.dislikes = 0;
    })
    this.setState({ movies })
    
  }

  render() {
    const { movies } = this.state;
    return (
      <Movies
        movies={movies}
        onDelete={this.handleDelete}
        onLike={this.handleLikes}
        onDislike={this.handleDislikes}
        onReset={this.handleReset}
      />
    );
  }
}

export default App;
