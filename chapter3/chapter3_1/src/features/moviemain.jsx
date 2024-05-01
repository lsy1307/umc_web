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
  height: 50%;
  background-color: #db9f13;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Search = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  background-color: #0c0c41;
  color: white;
  font-weight: bold;
  font-size: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const MovieText = styled.span`
  vertical-align: middle;
  margin-left: 10px; //조정이 필요한 경우 값을 변경하세요.
`;

const SearchBarContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin: 20px auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
`;

const SearchButton = styled.div`
  display: flex;
  margin-left: 15px;
  cursor: pointer;
`;

const Main = () => {
  return (
    <Container>
      <Banner>환영합니다.</Banner>
      <Search>
        <div>
          <img
            src={movie}
            alt="Movie Icon"
            style={{ verticalAlign: "middle" }}
          />
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
