import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import search from "../assets/search.svg";
import movie from "../assets/movie.svg";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";
import MovieComponent from "../components/movieComponent.jsx";

const Container = styled.div`
  height: 100%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 30%;
  background-color: #77b0aa;
  color: #e3fef7;
  font-weight: bold;
  font-size: 30px;
`;

const Search = styled.div`
  width: 100%;
  height: 65%;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #135d66;
  color: #e3fef7;
  font-weight: bold;
  font-size: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const MovieIcon = styled.img`
  vertical-align: "middle";
  position: relative;
  top: 5px;
`;
const MovieText = styled.div`
  font-weight: bold;
  color: #e3fef7;
`;

const SearchBarContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  margin: 20px auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 5px;
`;

const SearchButton = styled.button`
  display: flex;
  padding-left: 5px;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  height: 50%;
  width: 70%;
  display: ${(props) =>
    props.isLoading || props.movieData != null ? "none" : "flex"};
  overflow-y: auto;
  overflow-x: hidden;
`;

const Main = () => {
  const [searchData, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchMovies = async () => {
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
      },
      params: {
        query: searchData,
        include_adult: true,
        language: "ko-KR",
        page: "1",
      },
      url: `https://api.themoviedb.org/3/search/movie`,
    };
    try {
      setIsLoading(true);
      const response = await axios(option);
      setMovieData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Banner>환영합니다.</Banner>
      <Search>
        <div>
          <MovieIcon src={movie}></MovieIcon>
          <MovieText>Find Your Movies!</MovieText>
        </div>
        <SearchBarContainer>
          <SearchInput
            type="text"
            placeholder="영화 제목을 입력해주세요"
            onChange={inputHandler}
          />
          <SearchButton onClick={searchMovies}>
            <img src={search}></img>
          </SearchButton>
        </SearchBarContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <SearchContainer isLoading={isLoading}>
            <MovieComponent movieData={movieData} />
          </SearchContainer>
        )}
      </Search>
    </Container>
  );
};

export default Main;
