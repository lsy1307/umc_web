import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent.jsx";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";

const Now = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getMovieData = async () => {
      const option = getAPI(
        `https://api.themoviedb.org/3/movie/now_playing`,
        page
      );
      try {
        setIsLoading(true);
        const response = await axios(option);
        setMovieData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  }, [page]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <MovieComponent
        movieData={movieData}
        page={page}
        usePage={false}
        useScroll={true}
      />
    );
  }
};

export default Now;
