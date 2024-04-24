import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css';
import Movie from './Movie.js';
import MovieList from "./handleMovie";

function App() {
  return (
    <div>
      <div className="movie">
        <h1>List of Movies:</h1>
        <div className="row">
          <div className="col-lg-5">
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
