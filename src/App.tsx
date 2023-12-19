import React from 'react';
import './App.css';
import {useMovies} from './hooks/useMovies';
import Header from './components/Navbar/Header';
import MoviesList from './components/MoviesWrapper/MoviesList';
import PageContainer from './components/PageContainer/PageContainer';

function App() {

  const {data, selectedGenres, setSelectedGenres, genres, isLoading} = useMovies()

  return (
    <div className="App">
      <PageContainer>
        <Header tabs={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        <MoviesList data={data} isLoading={isLoading}/>
      </PageContainer>
    </div>
  );
}

export default App;

