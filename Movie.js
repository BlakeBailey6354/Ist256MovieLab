import React from "react";
import "./custom.css";
import MovieData from "./handleMovie";

const Movie = ({ movie, onDelete }) => {
  return (
    <div className="movie">
      <h2>Movie Title: {movie.title}</h2>
      <h4>Director: {movie.director}</h4>
      <p>Stars: {movie.stars}</p>
      <button onClick={() => onDelete(movie.id)}>Remove</button>
    </div>
  );
};

export default Movie;