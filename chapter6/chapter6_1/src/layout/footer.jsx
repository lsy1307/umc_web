import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 5%;
  background-color: #003c43;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  z-index: 999;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
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

const Footer = () => {
  return (
    <Container>
      <RightContainer>
        <StyleLink to="/know">약관 및 정책</StyleLink>
        <StyleLink to="/company">회사명</StyleLink>
        <StyleLink to="/help"> 문의 하기</StyleLink>
      </RightContainer>
    </Container>
  );
};

export default Footer;
