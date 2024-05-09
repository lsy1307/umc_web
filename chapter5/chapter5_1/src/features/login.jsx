import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #135d66;
  padding-top: 110px;
`;
const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 30px;
`;
const LoginContainer = styled.div`
  height: 90%;
  width: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const Input = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const GotoLogin = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  padding-top: 20px;
  color: white;
  justify-content: space-evenly;
  text-align: center;
`;
const LoginButton = styled.button`
  margin-top: 20px;
  height: 5%;
  border-radius: 40px;
  font-size: 20px;
  font-weight: bold;
`;
const Text = styled.div`
  color: white;
`;
const InputText = styled.input`
  height: 50%;
  background-color: white;
  border-radius: 40px;
  border-style: none;
  padding-left: 20px;
  &::placeholder {
    font-size: 15px;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
const StyleLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const Error = styled.div`
  color: ${(props) => (props.iscorrect ? "green" : "red")};
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
  padding-top: 10px;
`;

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Title>로그인</Title>
        <Input>
          <InputText></InputText>
        </Input>
        <Input>
          <InputText></InputText>
        </Input>
        <LoginButton>로그인</LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;
