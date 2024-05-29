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

const Popular = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isButton, setIsButton] = useState(true);

  const checkPage = () => {
    if (page <= 1) setIsButton(true);
    else setIsButton(false);
  };

  useEffect(() => {
    const getMovieData = async () => {
      const option = getAPI(`https://api.themoviedb.org/3/movie/popular`, page);
      try {
        setIsLoading(true);
        const response = await axios(option);
        setMovieData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getMovieData();
    checkPage();
  }, [page]);

  if (isLoading && movieData.length === 0) {
    return <Loading />;
  }

  return (
    <MovieComponent
      movieData={movieData}
      page={page}
      setPage={setPage}
      isButton={isButton}
      usePage={true}
    />
  );
};

export default Popular;
