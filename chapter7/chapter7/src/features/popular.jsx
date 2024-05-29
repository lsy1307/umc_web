import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";

const cacheData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const retrieveCache = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
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
      const cacheKey = `movies_popular_page_${page}`;
      const cachedData = retrieveCache(cacheKey);

      if (cachedData) {
        setMovieData(cachedData);
        return;
      }

      const option = getAPI(`https://api.themoviedb.org/3/movie/popular`, page);
      try {
        setIsLoading(true);
        const response = await axios(option);
        if (response.data && response.data.results) {
          setMovieData(response.data.results);
          cacheData(cacheKey, response.data.results);
        }
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
