import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import search from "../assets/search.svg";
import movie from "../assets/movie.svg";
import { getAPI } from "../config.js";
import Loading from "../components/Loading.jsx";

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 150px 40px;
  display:none;
`;
const ContentContainer = styled.div`
  background-color: #77b0aa;
  padding: 10px;
  position: relative;

  &:hover .movie-poster-container {
    opacity: 0.1;
  }
`;

const MovieOverview = styled.div`
  position: absolute;

  display: none;
  color: #e3fef7;

  padding: 10px;

  z-index: 999;

  word-wrap: break-word;

  ${ContentContainer}:hover & {
    display: block;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
`;

const MovieData = styled.div`
  color: e3fef7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const OverView = styled.p`
  padding-top: 30px;
`;

const MovieText = styled.div`
  font-weight: bold;
  color: #e3fef7;
`;

const [searchData, setSearch] = useState("");
const [isButton, setButton] = useState(false);
const [movieData, setMovieData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
  const inputHandler = (e) => {
    setSearch(e.target);
  };

useEffect(() => {
  const getMovieData = async () => {
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
  getMovieData();
}, isButton);

const Main = () => {
  return (
    <Container>
      <Banner>환영합니다.</Banner>
      <Search>
        <div>
          <MovieIcon src={movie}></MovieIcon>
          <MovieText>Find Your Movies!</MovieText>
        </div>
        <SearchBarContainer>
          <SearchInput type="text" placeholder="영화 제목을 입력해주세요" onChange = {inputHandler()}/>
          <SearchButton onClick={}>
            <img src={search}></img>
          </SearchButton>
        </SearchBarContainer>
        <SearchContainer>
          {movieData.map((movie, index) => (
            <ContentContainer key={index}>
              <div>
                <MovieOverview className="movie-overview">
                  <h2>{movie.title}</h2>
                  <OverView>{movie.overview}</OverView>
                </MovieOverview>
                <div className="movie-poster-container">
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                  />
                </div>
                <MovieData>
                  <MovieText>{movie.title}</MovieText>
                  <MovieText>{movie.vote_average}</MovieText>
                </MovieData>
              </div>
            </ContentContainer>
          ))}
        </SearchContainer>
      </Search>
    </Container>
  );
};

export default Main;
