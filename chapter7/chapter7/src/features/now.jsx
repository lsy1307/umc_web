import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const Now = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieCache, setMovieCache] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      if (!hasMore || isLoading) return;

      if (movieCache[page]) {
        setMovieData([...movieData, ...movieCache[page]]);
        return;
      }

      setIsLoading(true);
      try {
        const options = getAPI(
          `https://api.themoviedb.org/3/movie/now_playing`,
          page
        );
        const response = await axios(options);

        setMovieCache({
          ...movieCache,
          [page]: response.data.results,
        });

        setMovieData([...movieData, ...response.data.results]);
        setHasMore(response.data.page < response.data.total_pages);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
      setIsLoading(false);
    };

    loadMovies();
  }, [page, movieCache, movieData]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - 1000;
      if (nearBottom && !isLoading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  if (isLoading && movieData.length === 0) {
    return <Loading />;
  }

  return <MovieComponent movieData={movieData} usePage={false} />;
};

export default Now;
