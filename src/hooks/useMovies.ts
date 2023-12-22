import {useState, useEffect, useCallback} from 'react'
import { apiEndpoints, Movies } from '../api/api';

export const useMovies = () => {
  const startYear = 2012;
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genres, setGenres] = useState<any>([]);
  const [selectedGenres, setSelectedGenres] = useState<any> ([])
  const [offsetYear, setOffsetYear] = useState(startYear);
  const currentYear = new Date().getFullYear();

  const fetchGenres = async() => {
    const genresList: any = await apiEndpoints.fetchGenres();
    setGenres(genresList?.genres)
  }

  useEffect(() => { 
    fetchGenres()
  }, [])



  useEffect(() => {
    const fetchData = async (isEmpty = false) => {
      try{
        setIsLoading(true);
        const newData: Movies = await apiEndpoints.fetchMovies(isEmpty ? startYear :offsetYear, selectedGenres);
        setIsLoading(false);
        if (isEmpty) {
          setOffsetYear(startYear);
        }

        const movies = isEmpty ? [] : [...data];
        if (!movies?.length) {
          setData([{year: isEmpty ? startYear :offsetYear, movies:[...newData?.results] }])
        } else {
          const index = movies?.findIndex((item) => item?.year === offsetYear);
          if (index < 0) {
            if (offsetYear > movies?.[movies?.length - 1]?.year && offsetYear <= Number(currentYear)) {
              setData([...movies, {year: offsetYear, movies:[...newData?.results]}])
            }
            if (offsetYear < movies?.[0]?.year) {
              setData([{year: offsetYear, movies:[...newData?.results]},...movies])
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
  }, [offsetYear, selectedGenres, currentYear, data]);

  const handleScroll = useCallback(() => {

    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;

    if (scrollPosition >= documentHeight - 100 && offsetYear < Number(currentYear)) {
      const year = data?.length ? data?.[data?.length - 1]?.year : offsetYear;
      setOffsetYear(year + 1);
    }

    if (window.scrollY === 0 && offsetYear > 0) {
      const year = data?.length ? data?.[0]?.year: offsetYear;
      setOffsetYear(year - 1);
    }
  }, [offsetYear, data, currentYear]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return {
    data : data, setSelectedGenres, genres, selectedGenres, isLoading
  }
}
