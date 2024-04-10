import React, { useState, useEffect } from "react";
import MovieList from "./components/movieList";
import { movies } from "./movieData"; // movieData를 default가 아닌 named export로 import합니다.

function App() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    // movieData에서 영화 데이터를 로드합니다.
    setMovies(movies.results);
  }, []);

  return (
    <div>
      <MovieList movies={movie} />
    </div>
  );
}

export default App;
