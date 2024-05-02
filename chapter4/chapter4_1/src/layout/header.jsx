import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 8%;
  background-color: #003c43;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  z-index: 1;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Home = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  color: white;
  font-weight: bold;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const StyleLink = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  color: white;

  &:hover {
    transform: scale(1.1);
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  &.active {
    color: yellow;
    font-weight: bold;
  }
`;

const Login = styled.button`
  text-decoration: none;
  padding: 15px;
  color: white;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isLogin, setUserLogin] = useState(false);
  var loginText = "로그인";
  if (isLogin) {
    loginText = "로그아웃";
  } else {
    loginText = "로그인";
  }
  return (
    <Container>
      <LeftContainer>
        <Home to="/">UMC Movie</Home>
      </LeftContainer>
      <RightContainer>
        <Login
          onClick={() => {
            if (isLogin) setUserLogin(false);
            else setUserLogin(true);
          }}
        >
          {loginText}
        </Login>
        <StyleLink to="/signup">회원가입</StyleLink>
        <StyleLink to="/popular"> Popular</StyleLink>
        <StyleLink to="/nowplaying">Now Playing</StyleLink>
        <StyleLink to="/toprated">Top Rated</StyleLink>
        <StyleLink to="/upcoming">Upcoming</StyleLink>
      </RightContainer>
    </Container>
  );
};

export default Header;
