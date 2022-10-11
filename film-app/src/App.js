import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Navigation from './components/NavBar';
import SearchBar from './components/SearchBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




const App = () => {
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  async function getFilms(searchValue)  {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ce7b8a0`

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setFilms(data.Search);
    }
  };

  useEffect(()=> {
    getFilms(searchValue);
  }, [searchValue]);

  return (
  <Container className='film-app'>
    <Row>
    <Navigation />
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    <FilmList films = {films} />
    </Row>
  </Container>
  );
};

export default App;
