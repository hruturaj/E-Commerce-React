import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 20px 30px;
  width: 40%;
  @media only screen and (max-width: 768px) {
    width: 60%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 12;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 5px 0px 5px;
  padding: 10px;
`;

const Agreement = styled.div`
  font-size: 14px;
`;

const Button = styled.button`
  margin: 20px 0;
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: #fff;
  cursor: pointer;

  &:active {
    background: #007070;
    -webkit-box-shadow: inset 0px 0px 5px #009090;
    -moz-box-shadow: inset 0px 0px 5px #009090;
    box-shadow: inset 0px 0px 5px #009090;
    outline: none;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: -1px;
  right: -1px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  background-color: #960018;
  color: #fff;
`;

const BlackScreen = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    transparent,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.2)
  );
  z-index: 11;
`;

const Register = ({ registerClick }) => {
  const modalClose = () => {
    registerClick(false);
  };
  return (
    <Container>
      <BlackScreen onClick={modalClose}></BlackScreen>
      <Wrapper>
        <ButtonClose onClick={modalClose}>
          <CloseIcon />
        </ButtonClose>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="phone number" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </Form>
        <Agreement>
          By creating an account, I consent to the processing of my personal
          account data in accordance with the <b>PRIVACY POLICY</b>.
        </Agreement>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
