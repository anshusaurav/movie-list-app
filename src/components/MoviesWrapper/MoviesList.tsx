import React, {FC} from 'react'
import { Wrapper } from './MoviesList.style'
import MovieCard from '../MovieCard/MovieCard'

interface MoviesListProps{
  data: any
  isLoading?: boolean
}

const MoviesList:FC<MoviesListProps> = ({data, isLoading}) => {
  return (
    <Wrapper>
      {data?.length ? (
        <>
        {data?.map((movie: any) => (
          <div className='movieContainer' id={String(movie?.year)} key={String(movie.year)}>
            <div className='heading'>
           {movie?.year}
            </div>
            <div className='movies '>
              {movie?.movies?.map((item: any) => (

                <MovieCard
                  movie={item}
                  key={Math.floor(Math.random() * item.id * Date.now())}
                />
              ))}
            </div>
          </div>
        ))}
        </>
      ) : (
         <h1 className='no_movies'>Loading</h1>
      )}
    </Wrapper>
  )
}

export default MoviesList
