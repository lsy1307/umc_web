import React from "react";
import styled from "styled-components";
import search from "../assets/search.svg";
import movie from "../assets/movie.svg";

const Container = styled.div`
  height: 100%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  background-color: #77b0aa;
  color: #e3fef7;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Search = styled.div`
  width: 100%;
  height: 65%;
  text-align: center;
  background-color: #135d66;
  color: e3fef7;
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

const MovieText = styled.span`
  vertical-align: middle;
  margin-left: 10px;
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
          <SearchInput type="text" placeholder="영화 제목을 입력해주세요" />
          <SearchButton>
            <img src={search}></img>
          </SearchButton>
        </SearchBarContainer>
      </Search>
    </Container>
  );
};

export default Main;
