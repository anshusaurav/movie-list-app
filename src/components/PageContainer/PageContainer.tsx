import React, {FC} from 'react'
import { Wrapper } from './PageContainer.style';
interface PageContainerProps{
children: any;
}

const PageContainer:FC<PageContainerProps> = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default PageContainer
