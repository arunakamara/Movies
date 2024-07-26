import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

class Movies extends Component {
  render() {
    const { movies, onDelete, onLike, onDislike, onReset } = this.props;
    if (movies.length === 0)
      return (
        <div>
          <p>There are no movies in the database</p>
          <button className="btn btn-success" onClick={onReset}>
            Reset
          </button>
        </div>
      );

    return (
      <div>
        <p>There are {movies.length} movies showing in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Likes</th>
              <th>Dislikes</th>
              <th>
                <button className="btn btn-success" onClick={onReset}>
                  Reset
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => onLike(movie)}
                  >
                    <span className="fa fa-thumbs-up"></span> ({movie.likes})
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => onDislike(movie)}
                  >
                    <span className="fa fa-thumbs-down"></span> (
                    {movie.dislikes})
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
