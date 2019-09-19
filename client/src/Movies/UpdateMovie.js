import React, { useState, useEffect } from 'react';
import axios from 'axios';


const initialItem = {
    title: '',
    director: '',
    metascore: '',
    stars: ''
    
  };
  
  const UpdateMovie = props => {
   const [movies, setMovies] = useState(initialItem);
console.log('propp',props)
   const { match, movie }= props;
   const id = match.params.id;
   useEffect(() => {
    
    const movieUpdate = movie.find(item => `${item.id}`=== id);
    if (movieUpdate) {
        console.log(movieUpdate)
        setMovies(movieUpdate);
    }

   }, [movie, match]);


const changeHandle = i => {
    i.persist();
    let value = i.target.value;
    setMovies({
        ...movies,
        [i.target.name]: value
    });
}




    
   const handleSubmit = e => {
       e.preventDefault();
       axios.put(`http://localhost:5000/api/movies/${id}`, movies)
       .then(res => {console.log.log(res)

        props.history.push(`/movies/${movies.id}`)
        setMovies(initialItem)
       })
        .catch(err => {
            console.log(err)
        })
   }





   return (
       <div>
           <h2>Update Movie</h2>
           <form onSubmit={handleSubmit}>
               <input
               type='text'
               name='title'
               onChange={changeHandle}
               value={movies.title}
               placeholder='title'
               />
                <input
               type='text'
               name='director'
               onChange={changeHandle}
               value={movies.director}
               placeholder='director'
               /> 
               <input
               type='number'
               name='metascore'
               onChange={changeHandle}
               value={movies.metascore}
               
               /> 
               <input
               type='text'
               name='stars'
              
               value={''}
               placeholder='stars'
               />
             <button type='submit'>Submit</button>
           </form>
       </div>
   )


  }
  export default UpdateMovie;