import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  position: relative;
`;
const BackGroundImage = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  position: absolute;
  z-index: -1;
`;
const BackGroundBox = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  position: absolute;
  z-index: 0;
  background-color: #135d66;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
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
  display: flex;
  margin-top: 400px;
  margin-left: 100px;
  flex-direction: column;
`;
const Title = styled.div`
  height: 8%;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;
const Text = styled.div`
  height: auto;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const Detail = () => {
  const [movieData, setMovieData] = useState();
  const [creditData, setCreditData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const getMovieData = async () => {
      const option1 = getAPI(`https://api.themoviedb.org/3/movie/${params.id}`);
      const option2 = getAPI(
        `https://api.themoviedb.org/3/movie/${params.id}/credits`
      );
      try {
        setIsLoading(true);
        const response1 = await axios(option1);
        const response2 = await axios(option2);
        setMovieData(response1.data);
        setCreditData(response2.data);
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
      return overView;
    } else {
      return "상세 정보가 없습니다.";
    }
  };
  const returnCasts = (cast) => {
    if (cast != null) {
      return cast.slice(0, 5).map((cast) => cast.name);
    } else {
      return "상세 정보가 없습니다.";
    }
  };
  const returnCrews = (crew) => {
    if (crew != null) {
      return crew.slice(0, 5).map((crew) => crew.name);
    } else {
      return "상세 정보가 없습니다.";
    }
  };
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <BackGroundImage
          src={`https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`}
        ></BackGroundImage>
        <BackGroundBox></BackGroundBox>
        <Content>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          />
          <OverView>
            <Title>{movieData.title}</Title>
            <Text>{returnRate(movieData.vote_average)}</Text>
            <Text>{movieData.release_date}</Text>
            <Text>{returnOverView(movieData.overview)}</Text>
            <Text>출연진 : {returnCasts(creditData.cast)}</Text>
            <Text>제작진 : {returnCrews(creditData.crew)}</Text>
          </OverView>
        </Content>
      </Container>
    );
  }
};

export default Detail;
