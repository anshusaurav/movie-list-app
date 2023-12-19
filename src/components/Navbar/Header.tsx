import React, {FC} from 'react'
import { NavWrapper } from './Header.style';

interface HeaderProps {
 tabs: any;
 selectedGenres: any;
 setSelectedGenres: any;
}

const Header:FC<HeaderProps> = ({tabs, selectedGenres, setSelectedGenres}) => {

  return (
    <NavWrapper>
      <img src='./movieMax.svg' height='40' width='120' alt='moviefix' />
      <div className={`tabContainer`}>
        <div className={`tab ${selectedGenres.length === 0 && 'activeTab'}`}
             key={'all'}
             onClick={() =>{
                setSelectedGenres([]);
             }}
        >
          All
        </div>
       {tabs?.map((item: any) => (
        <div className={`tab ${selectedGenres.includes(item?.name) && 'activeTab'}`}
        key={item?.id}
        onClick={() =>{
          if(selectedGenres.includes(item?.name)){
            setSelectedGenres(selectedGenres.filter((tab: any) => tab !== item?.name))
          }
          else{
            setSelectedGenres([...selectedGenres, item?.name])
          }
        }}
        >
            {item?.name}
            </div>
       ))}
      </div>
    </NavWrapper>
  )
}

export default Header
