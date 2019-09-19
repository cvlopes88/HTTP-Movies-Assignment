import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';
const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [newMovie, setNewMovie] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };


const editMovie = movie => {
setNewMovie(...newMovie, movie);
}


  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} editMovie={editMovie} />;
        }}
      />
       <Route
        path="/update-movie/:id"
        render={props => (
          <UpdateMovie {...props} movie={newMovie} />
        )}
      />
    </>
  );
};

export default App;
