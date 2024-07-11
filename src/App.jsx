import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";
function App() {
  const [movies, setMovies] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchValue) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      console.log(data);

      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      // gọi api lấy dữ liệu phim popular
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1";
      // gọi api lấy dữ liệu phim top rated
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovies(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
    <MovieProvider>
      <div className="bg-black pb-10">
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} />
        ) : (
          <>
            {" "}
            <MovieList title={"Phim Hot"} data={movies} />
            <MovieList title={"Phim đề cử"} data={movieRate} />
          </>
        )}
      </div>
    </MovieProvider>
    </>
  );
}

export default App;
