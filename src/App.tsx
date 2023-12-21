import React from 'react';
import './App.css';
import {useMovies} from './hooks/useMovies';
import Header from './components/Navbar/Header';
import MoviesList from './components/MoviesWrapper/MoviesList';
import MoviesContainer from './components/MoviesContainer/MoviesContainer';

function App() {

  const {data, selectedGenres, setSelectedGenres, genres, isLoading} = useMovies()
  // console.log(data, yearOffset);
  return (
    <div className="App">
      <MoviesContainer>
        <Header tabs={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        <MoviesList data={data} isLoading={isLoading}/>
      </MoviesContainer>
    </div>
  );
}

export default App;

