import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-color: #135d66;
`;
const Content = styled.div`
  height: 50%;
  width: 40%;
  padding: 10px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: white;
  margin: 10px;
`;
const Not = styled.div`
  font-size: 20px;
  color: white;
  font-style: italic;
  margin: 10px;
`;
const Text = styled.div`
  font-size: 20px;
  color: white;
  margin: 10px;
`;
const Home = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  color: white;
  font-weight: bold;
  margin: 10px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Content>
        <Title>Oops...</Title>
        <Text>예상치 못한 에러 발생</Text>
        <Not>Not Found</Not>
        <Home to="/">메인으로</Home>
      </Content>
    </Container>
  );
};

export default NotFound;
