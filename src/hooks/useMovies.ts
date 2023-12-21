import {useState, useEffect, useCallback} from 'react'
import { apiEndpoints, Movies } from '../api/api';

export const useMovies = () => {
  const initialYear = 2012;
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genres, setGenres] = useState<any>([]);
  const [selectedGenres, setSelectedGenres] = useState<any> ([])
  const [yearOffset, setYearOffset] = useState(initialYear);
  const currentYear = new Date().getFullYear();

  const fetchGenres = async() => {
    const genresList: any = await apiEndpoints.fetchGenres();
    setGenres(genresList?.genres)
  }

  useEffect(() => { 
    fetchGenres()
  }, [])



  useEffect(() => {
    const fetchData = async (emptyList = false) => {
      try{
        setIsLoading(true);
        const newData: Movies = await apiEndpoints.fetchMovies(emptyList ? initialYear :yearOffset, selectedGenres);
        setIsLoading(false);
        if (emptyList) {
          setYearOffset(initialYear);
        }

        const movies = emptyList ? [] : [...data];
        if (!movies?.length) {
          setData([{year: emptyList ? initialYear :yearOffset, movies:[...newData?.results] }])
        } else {
          const index = movies?.findIndex((item) => item?.year === yearOffset);
          if (index < 0) {
            if (yearOffset > movies?.[movies?.length - 1]?.year && yearOffset <= Number(currentYear)) {
              setData([...movies, {year: yearOffset, movies:[...newData?.results]}])
            }
            if (yearOffset < movies?.[0]?.year) {
              setData([{year: yearOffset, movies:[...newData?.results]},...movies])
            }
          }
        }
      } catch(err) {
        console.error(err);
      }
    };
    if(selectedGenres?.length) {
      setData([]);
      fetchData(true);
    }
    else{
      fetchData();
    }
  }, [yearOffset, selectedGenres, currentYear, data]);

  const handleScroll = useCallback(() => {

    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;
    console.log(window.scrollY, window.innerHeight, documentHeight);
    if (scrollPosition >= documentHeight - 100 && yearOffset < Number(currentYear)) {
      const year = data?.length ? data?.[data?.length - 1]?.year : yearOffset;
      setYearOffset(year + 1);
    }

    if (window.scrollY === 0 && yearOffset > 0) {
      const year = data?.length ? data?.[0]?.year: yearOffset;
      setYearOffset(year - 1);
    }

  }, [yearOffset, data, currentYear]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  // console.log(data, yearOffset, setSelectedGenres, genres, selectedGenres, isLoading);
  return {
    data : data, yearOffset, setSelectedGenres, genres, selectedGenres, isLoading
  }
}
