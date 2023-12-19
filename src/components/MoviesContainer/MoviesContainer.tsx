import React, {FC} from 'react'
import { Wrapper } from './MoviesContainer.style';
interface MoviesContainerProps{
children: any;
}

const MoviesContainer:FC<MoviesContainerProps> = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default MoviesContainer
