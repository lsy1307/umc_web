import React, { useState, useEffect } from "react";
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

const Register = () => {
  const [iscorrect, setValid] = useState({
    name: "",
    validName: false,
    email: "",
    validEmail: false,
    age: "",
    validAge: false,
    pw: "",
    validPw: false,
    pwCheck: "",
    validPwCheck: false,
  });
  const [alertMessage, setAlertMessage] = useState({
    pw: "",
    pwCheck: "",
    email: "",
    age: "",
    name: "",
  });
  const [passMessage, setPassMessage] = useState({
    pw: "",
    pwCheck: "",
    email: "",
    age: "",
    name: "",
  });
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isButtonDisabled, setButton] = useState(true);
  const navigate = useNavigate();

  let isString = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;
  let isInt = /^[0-9]+$/;
  let isPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,13}$/;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValid((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validName = () => {
    setValid((prevState) => ({ ...prevState, validName: false }));
    if (iscorrect.name == "")
      setAlertMessage((prevState) => ({
        ...prevState,
        name: "이름을 입력해주세요",
      }));
    else if (!isString.test(iscorrect.name))
      setAlertMessage((prevState) => ({
        ...prevState,
        name: "문자만 입력해주세요",
      }));
    else {
      setValid((prevState) => ({ ...prevState, validName: true }));
      setPassMessage((prevState) => ({
        ...prevState,
        name: "멋진 이름이네요",
      }));
    }
  };
  const validEmail = () => {
    setValid((prevState) => ({ ...prevState, validEmail: false }));
    if (iscorrect.email == "")
      setAlertMessage((prevState) => ({
        ...prevState,
        email: "이메일을 입력해주세요",
      }));
    else if (!iscorrect.email.includes("@"))
      setAlertMessage((prevState) => ({
        ...prevState,
        email: "이메일 형식을 맞춰주세요",
      }));
    else {
      setValid((prevState) => ({ ...prevState, validEmail: true }));
      setPassMessage((prevState) => ({
        ...prevState,
        email: "멋진 이메일이네요",
      }));
    }
  };
  const validAge = () => {
    setValid((prevState) => ({ ...prevState, validAge: false }));
    if (iscorrect.age == "")
      setAlertMessage((prevState) => ({
        ...prevState,
        age: "나이를 입력해주세요",
      }));
    else if (parseInt(iscorrect.age) < 0)
      setAlertMessage((prevState) => ({
        ...prevState,
        age: "양수만 입력해주세요",
      }));
    else if (parseFloat(iscorrect.age) % 1 != 0)
      setAlertMessage((prevState) => ({
        ...prevState,
        age: "정수만 입력해주세요",
      }));
    else if (!isInt.test(iscorrect.age))
      setAlertMessage((prevState) => ({
        ...prevState,
        age: "숫자만 입력해주세요",
      }));
    else if (parseInt(iscorrect.age) < 19)
      setAlertMessage((prevState) => ({
        ...prevState,
        age: "19세 이상만 가입가능합니다",
      }));
    else {
      setValid((prevState) => ({ ...prevState, validAge: true }));
      setPassMessage((prevState) => ({
        ...prevState,
        age: "멋진 나이네요",
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
      setPassMessage((prevState) => ({
        ...prevState,
        pw: "안전한 비밀번호 입니다",
      }));
    }
  };
  const validPwCheck = () => {
    setValid((prevState) => ({ ...prevState, validPwCheck: false }));
    if (iscorrect.pw != iscorrect.pwCheck)
      setAlertMessage((prevState) => ({
        ...prevState,
        pwCheck: "비밀번호가 다릅니다",
      }));
    else {
      setValid((prevState) => ({ ...prevState, validPwCheck: true }));
      setPassMessage((prevState) => ({
        ...prevState,
        pwCheck: "비밀번호가 일치합니다",
      }));
    }
  };
  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!isFirstRender) validName();
  }, [iscorrect.name]);

  useEffect(() => {
    if (!isFirstRender) validEmail();
  }, [iscorrect.email]);

  useEffect(() => {
    if (!isFirstRender) validAge();
  }, [iscorrect.age]);

  useEffect(() => {
    if (!isFirstRender) {
      validPw();
      validPwCheck();
    }
  }, [iscorrect.pw]);

  useEffect(() => {
    if (!isFirstRender) validPwCheck();
  }, [iscorrect.pwCheck]);
  useEffect(() => {
    const isEnabled =
      iscorrect.validName &&
      iscorrect.validEmail &&
      iscorrect.validAge &&
      iscorrect.validPw &&
      iscorrect.validPwCheck;
    setButton(!isEnabled);
  }, [iscorrect]);
  return (
    <Container>
      <RegisterContainer>
        <Title>회원가입 페이지</Title>
        <Input>
          <InputText
            name="name"
            placeholder="이름을 입력해 주세요"
            onChange={inputHandler}
          ></InputText>
          <Error iscorrect={iscorrect.validName}>
            {iscorrect.validName ? passMessage.name : alertMessage.name}
          </Error>
        </Input>
        <Input>
          <InputText
            name="email"
            placeholder="이메일을 입력해 주세요"
            onChange={inputHandler}
          ></InputText>
          <Error iscorrect={iscorrect.validEmail}>
            {iscorrect.validEmail ? passMessage.email : alertMessage.email}
          </Error>
        </Input>
        <Input>
          <InputText
            name="age"
            placeholder="나이를 입력해 주세요"
            onChange={inputHandler}
          ></InputText>
          <Error iscorrect={iscorrect.validAge}>
            {iscorrect.validAge ? passMessage.age : alertMessage.age}
          </Error>
        </Input>
        <Input>
          <InputText
            name="pw"
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            onChange={inputHandler}
          ></InputText>
          <Error iscorrect={iscorrect.validPw}>
            {iscorrect.validPw ? passMessage.pw : alertMessage.pw}
          </Error>
        </Input>
        <Input>
          <InputText
            name="pwCheck"
            placeholder="비밀번호 확인"
            type="password"
            onChange={inputHandler}
          ></InputText>
          <Error iscorrect={iscorrect.validPwCheck}>
            {iscorrect.validPwCheck
              ? passMessage.pwCheck
              : alertMessage.pwCheck}
          </Error>
        </Input>
        <RegisterButton
          onClick={() => {
            navigate("/login");
            console.log({
              name: iscorrect.name,
              email: iscorrect.email,
              age: iscorrect.age,
              pw: iscorrect.pw,
              pwCheck: iscorrect.pwCheck,
            });
          }}
          disabled={isButtonDisabled}
        >
          제출하기
        </RegisterButton>
        <GotoLogin>
          <Text>이미 아이디가 있으신가요?</Text>
          <StyleLink to="/login">로그인 페이지로 이동하기</StyleLink>
        </GotoLogin>
      </RegisterContainer>
    </Container>
  );
};

export default Register;
