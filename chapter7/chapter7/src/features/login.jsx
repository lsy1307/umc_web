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
  background-color: yellow;
  color: white;
  &:disabled {
    background-color: white;
    color: gray;
  }
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
  const [iscorrect, setValid] = useState({
    username: "",
    validUsername: false,
    pw: "",
    validPw: false,
  });
  const [alertMessage, setAlertMessage] = useState({
    pw: "",
    username: "",
  });
  const [isFirstRender, setIsFirstRender] = useState(true);
  let isString = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;
  let isPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,13}$/;
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValid((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [isButtonDisabled, setButton] = useState(true);
  const validUsername = () => {
    setValid((prevState) => ({ ...prevState, validName: false }));
    if (iscorrect.username == "")
      setAlertMessage((prevState) => ({
        ...prevState,
        username: "아이디를 입력해주세요",
      }));
    else if (!isString.test(iscorrect.username))
      setAlertMessage((prevState) => ({
        ...prevState,
        username: "문자만 입력해주세요",
      }));
    else {
      setValid((prevState) => ({ ...prevState, validUsername: true }));
      setAlertMessage((prevState) => ({
        ...prevState,
        username: "",
      }));
    }
  };
  const validPw = () => {
    setValid((prevState) => ({ ...prevState, validPw: false }));
    if (iscorrect.pw == "")
      setAlertMessage((prevState) => ({
        ...prevState,
        pw: "비밀번호를 입력해주세요",
      }));
    else if (iscorrect.pw.length < 4)
      setAlertMessage((prevState) => ({
        ...prevState,
        pw: "비밀번호는 4자리이상 입력해주세요",
      }));
    else if (iscorrect.pw.length > 13)
      setAlertMessage((prevState) => ({
        ...prevState,
        pw: "비밀번호는 12자리이하로 입력해주세요",
      }));
    else if (!isPw.test(iscorrect.pw))
      setAlertMessage((prevState) => ({
        ...prevState,
        pw: "영어, 숫자, 특수문자를 모두 입력해주세요",
      }));
    else {
      setValid((prevState) => ({ ...prevState, validPw: true }));
      setAlertMessage((prevState) => ({
        ...prevState,
        pw: "",
      }));
    }
  };
  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  useEffect(() => {
    if (!isFirstRender) validUsername();
  }, [iscorrect.username]);
  useEffect(() => {
    if (!isFirstRender) {
      validPw();
    }
  }, [iscorrect.pw]);
  useEffect(() => {
    const isEnabled = iscorrect.validName && iscorrect.validPw;
    setButton(!isEnabled);
  }, [iscorrect]);
  return (
    <Container>
      <LoginContainer>
        <Title>로그인</Title>
        <Input>
          <InputText
            name="username"
            placeholder="아이디를 입력해 주세요"
            onChange={inputHandler}
          ></InputText>
          <Error>{alertMessage.username}</Error>
        </Input>
        <Input>
          <InputText
            name="pw"
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            onChange={inputHandler}
          ></InputText>
          <Error>{alertMessage.pw}</Error>
        </Input>
        <LoginButton disabled={isButtonDisabled}>로그인</LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;
