import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FilmList from './components/FilmList';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';




const App = () => {
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  async function getFilms()  {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ce7b8a0`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    setFilms(data.Search);
  };

  useEffect(()=> {
    getFilms(searchValue);
  }, [searchValue]);

  return (
  <div className='container-fluid film-app'>
    <div className='row'>
    <NavBar />
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    <FilmList films = {films} />
    </div>
  </div>
  );
};

export default App;
