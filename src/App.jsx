import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
function App() {
  const [movies, setMovies] = useState([]);  
  const [movieRate, setMovieRate] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      // gọi api lấy dữ liệu phim popular
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1';
      // gọi api lấy dữ liệu phim top rated
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)])
        
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovies(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovies();

  }, []);
  
   
  return (
    <>
      <div className="bg-black pb-10">
        <Header />
        <Banner />
        <MovieList title={'Phim Hot'} data= {movies}/>
        <MovieList title={'Phim đề cử'} data= {movieRate}/>
      </div>
    </>
  );
}

export default App;
