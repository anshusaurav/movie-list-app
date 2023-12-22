import { FC } from 'react';
import { Wrapper } from './MovieCard.style';
import {roundTo} from '../../utils';

interface MovieProps {
 movie: any; 
 key: any;
}

const MovieCard:FC<MovieProps> = ({ movie}) => {
  return (
    <Wrapper>
        <div className='image' style={{backgroundImage:  `url(https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path})`}}>
        </div>
        <div className='cover'>
          <h1 className='title'>{movie.original_title}</h1>
          <p className='rating'>{roundTo(movie.vote_average, 1)}</p>
        </div>
    </Wrapper>
  );
};

export default MovieCard;
