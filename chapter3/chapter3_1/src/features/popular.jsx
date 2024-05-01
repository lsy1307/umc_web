import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../components/movieComponent";
import { getAPI } from "../config.js";
import loading from "../assets/loading.svg";

const Popular = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieData = async () => {
      const option = getAPI(`https://api.themoviedb.org/3/movie/popular`);
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
  });

  return <MovieComponent movieData={movieData} />;
};

export default Popular;
