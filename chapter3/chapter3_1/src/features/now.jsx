import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent";
import { getAPI } from "../config.js";
import loading from "../assets/loading.svg";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoadingImage = styled.img`
  width: 10%;
`;

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
        setIsLoading(false);
      }
    };
    getMovieData();
  }, []);

  if (isLoading) {
    return (
      <Loading>
        <LoadingImage src={loading} />
      </Loading>
    );
  } else {
    return <MovieComponent movieData={movieData} />;
  }
};

export default Now;
