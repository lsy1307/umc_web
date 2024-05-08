import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent.jsx";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";

const Now = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieData = async () => {
      const option = getAPI(`https://api.themoviedb.org/3/movie/now_playing`);
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
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return <MovieComponent movieData={movieData} />;
  }
};

export default Now;
