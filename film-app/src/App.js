import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FilmList from './components/FilmList';




const App = () => {
  const [films, setFilms] = useState([]);

  async function getFilms()  {
    const url = "http://www.omdbapi.com/?s=Indiana Jones&apikey=ce7b8a0"

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    setFilms(data.Search);
  };

  useEffect(()=> {
    getFilms();
  }, []);

  return (
  <div className='container-fluid film-app'>
    <div className='row'>
    <FilmList films = {films} />
    </div>
  </div>
  );
};

export default App;
