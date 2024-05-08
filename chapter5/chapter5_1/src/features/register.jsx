import React from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
const RegisterContainer = styled.div`
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
const RegisterButton = styled.button`
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
  color: red;
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
  padding-top: 10px;
`;

const Register = () => {
  return (
    <Container>
      <RegisterContainer>
        <Title>회원가입 페이지</Title>
        <Input>
          <InputText placeholder="이름을 입력해 주세요"></InputText>
          <Error>에러메시지</Error>
        </Input>
        <Input>
          <InputText placeholder="이메일을 입력해 주세요"></InputText>
          <Error>에러메시지</Error>
        </Input>
        <Input>
          <InputText placeholder="나이를 입력해 주세요"></InputText>
          <Error>에러메시지</Error>
        </Input>
        <Input>
          <InputText placeholder="비밀번호를 입력해 주세요"></InputText>
          <Error>에러메시지</Error>
        </Input>
        <Input>
          <InputText placeholder="비밀번호 확인"></InputText>
          <Error>에러메시지</Error>
        </Input>
        <RegisterButton>제출하기</RegisterButton>
        <GotoLogin>
          <Text>이미 아이디가 있으신가요?</Text>
          <StyleLink to="/login">로그인 페이지로 이동하기</StyleLink>
        </GotoLogin>
      </RegisterContainer>
    </Container>
  );
};

export default Register;
