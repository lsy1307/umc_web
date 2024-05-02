import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent.jsx";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  height: 100%;
`;
const BackGround = styled.img`
  height: 100%;
  width: 100%;
  text-align: center;
`;
const Poster = styled.img`
  height: 70%;
  width: 25%;
  margin-right: 20px;
`;
const OverView = styled.div`
  height: 70%;
  width: 40%;
  text-align: left;
`;
const Title = styled.div`
  height: 10%;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;
const Rate = styled.div`
  height: 8%;
  color: white;
  font-weight: bold;
  font-size: 15px;
`;
const When = styled.div`
  height: 8%;
  color: white;
  font-weight: bold;
  font-size: 15px;
`;
const Text = styled.div`
  height: 8%;
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

const Detail = () => {
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { movie } = location.state;
  useEffect(() => {
    const getMovieData = async () => {
      const option = getAPI(`https://api.themoviedb.org/3/movie/${movie.id}`);
      try {
        setIsLoading(true);
        const response = await axios(option);
        setMovieData(response.data);
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
    return (
      <Container>
        <BackGround
          src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        />
        <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      </Container>
    );
  }
};

export default Detail;
