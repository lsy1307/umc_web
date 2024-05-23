import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";
import { useParams } from "react-router-dom";

const Container = styled.div`
  height: 200%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  background: ${({ background }) => `url(${background})`};
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #135d66;
  opacity: 0.8;
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

const BottomContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #135d66;
  opacity: 0.8;
`;

const Casts = styled.div`
  height: 100%;
  background-color: #135d66;
  display: grid;
  grid-template-columns: 100px, 100px;
  grid-gap: 10px;
  padding: 100px;
`;
const CastData = styled.div`
  width: 50px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const CastImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
`;
const CastText = styled.div`
  height: 10px;
  width: 50px;
  font-size: 8px;
  color: white;
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
        const md = await axios(option1);
        const cd = await axios(option2);
        setMovieData(md.data);
        setCreditData(cd.data);
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
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <TopContainer
          background={`https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}`}
        >
          <Content>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            />
            <OverView>
              <Title>{movieData.title}</Title>
              <Text>{returnRate(movieData.vote_average)}</Text>
              <Text>{movieData.release_date}</Text>
              <Text>{returnOverView(movieData.overview)}</Text>
            </OverView>
          </Content>
        </TopContainer>
        <BottomContainer>
          <Casts>
            {creditData.cast.map((credit) => (
              <CastData>
                <CastImage>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${credit.profile_path}`}
                  ></img>
                </CastImage>
                <CastText>{credit.name}</CastText>
              </CastData>
            ))}
          </Casts>
        </BottomContainer>
      </Container>
    );
  }
};

export default Detail;
