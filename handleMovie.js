import React, { useState } from "react";
import Movie from "./Movie";
import MovieData from './Movies.json';


export default function MovieList() {
  const [movies, showMovies] = useState(MovieData);
   
  const removemovie = id => {
    
    showMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };
  return (
    <div className="movie">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onDelete={removemovie} />
      ))}
    </div>
  );
};

