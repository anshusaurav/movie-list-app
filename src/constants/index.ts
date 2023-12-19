// Configuration for TMDB API

const API_URL:string = process.env.REACT_APP_API_URL || 'https://api.themoviedb.org/3/';
const API_KEY:string = process.env.REACT_APP_API_KEY || 'f0b2d2b0c5b0e6b5e5b0b0b0b0b0b0b0';

const BASE_URL:string = `${API_URL}discover/movie?api_key=${API_KEY}`;

const GENRE_BASE_URL: string = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en`

export {
  API_URL,
  API_KEY,
  BASE_URL,
  GENRE_BASE_URL
};
