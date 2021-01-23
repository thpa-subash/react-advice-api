import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import AdviceCard from './component/AdviceCard';
import MoviesList from './component/MoviesList';

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const getMoviesReuest = async () => {
//     const url = "https://jsonplaceholder.typicode.com/photos";
//     const response = await fetch(url);
//     const responseJson = await response.json();
//     setMovies(responseJson);
//   };
//   useEffect(() => {
//     getMoviesReuest();
//   }, []);
//   return (
//     <div className='container-fluid'>
//       <div className='row'>
//         <MoviesList movies={movies} />
//       </div>
//     </div>
//   );
// };
// export default App;
const App = () => {
  const [advice, setAdvice] = useState([]);
  const getAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice`)
      .then((response) => {
        setAdvice(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error from the api call");
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <AdviceCard advices={advice} />
    </div>
  );
};
export default App;