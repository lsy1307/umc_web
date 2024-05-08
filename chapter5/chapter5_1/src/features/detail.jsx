import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent.jsx";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`;
const BackGroundImage = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  position: absolute;
  z-index: -999;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Poster = styled.img`
  width: 15%;
  height: auto;
  min-width: 20%;
`;
const OverView = styled.div`
  height: 70%;
  width: 40%;
  text-align: left;
  margin-top: 400px;
  margin-left: 100px;
`;
const Title = styled.div`
  height: 10%;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;
const Text = styled.div`
  height: 8%;
  color: white;
  font-weight: bold;
  font-size: 20px;
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
  const returnRate = (average) => {
    const roundedRating = Math.floor(average);
    let rate = "";
    for (let i = 0; i < roundedRating; i++) {
      rate += "⭐";
    }
    return rate;
  };
  const returnOverView = (overView) => {
    if (overView.length != 0) {
      return movie.overview;
    } else {
      return "상세 정보가 없습니다.";
    }
  };
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Content>
          <BackGroundImage
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          ></BackGroundImage>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <OverView>
            <Title>{movie.title}</Title>
            <Text>{returnRate(movie.vote_average)}</Text>
            <Text>{movie.release_date}</Text>
            <Text>{returnOverView(movie.overview)}</Text>
          </OverView>
        </Content>
      </Container>
    );
  }
};

export default Detail;
