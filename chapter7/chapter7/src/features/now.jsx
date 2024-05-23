import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/movieComponent.jsx";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  height: 12%;
  width: 20%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

const PageButton = styled.button`
  height: 100%;
  width: 33%;
  font-size: 20px;
  color: white;
  background-color: transparent;
`;

const PageText = styled.div`
  font-size: 20px;
  color: white;
`;

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
      <Container>
        <MovieComponent movieData={movieData} />
        <Page>
          <PageButton onClick={() => setPage(page - 1)}>&lt;</PageButton>
          <PageText>{page}</PageText>
          <PageButton onClick={() => setPage(page + 1)}>&gt;</PageButton>
        </Page>
      </Container>
    );
  }
};

export default Now;
