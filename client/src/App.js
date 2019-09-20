import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';
import axios from 'axios';
const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [newMovie, setNewMovie] = useState([]);
  const [update, setUpdate] = useState(false);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };


const editMovie = movie => {
setNewMovie(...newMovie, movie);
}

useEffect(() => {

  axios
    .get(`http://localhost:5000/api/movies`)
    .then(res => setNewMovie(res.data))
    .catch(err => console.log(err.response));
    
  },[])
  
 const handleUpdate = () => {
   setUpdate( !update);
 };

 console.log("now", newMovie)
  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList}   update={update}/>;
        }}
      />
       <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} movie={newMovie} handleUpdate={handleUpdate} 
          setMovie={setNewMovie}
          
          />
        }}
      />
    </>
  );
};

export default App;
