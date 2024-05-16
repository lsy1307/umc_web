import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loading from "../assets/loading.svg";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoadingImage = styled.img`
  width: 10%;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage src={loading}></LoadingImage>
      <div>데이터를 받아오는 중입니다.</div>
    </LoadingContainer>
  );
};

export default Loading;
