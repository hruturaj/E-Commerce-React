import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { mobile } from "../../responsive";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 12;

  @media only screen and (max-width: 768px) {
    width: 60%;
  }

  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 20px 0px 0px 0px;
  padding: 10px;

  ${mobile({ margin: "11px 0" })}
`;

const Button = styled.button`
  margin-bottom: 10px;
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

  &:disabled {
    color: cyan;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
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

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`;

const SignIn = ({ signInClick, registerClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const modalClose = () => {
    signInClick(false);
  };

  const openRegisteModal = () => {
    signInClick(false);
    registerClick(true);
  };

  const loginClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <BlackScreen onClick={modalClose}></BlackScreen>
      <Wrapper>
        <ButtonClose onClick={modalClose}>
          <CloseIcon />
        </ButtonClose>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button onClick={loginClick} disabled={isFetching}>
          LOGIN
        </Button>
        {error && <Error>Something went wrong...</Error>}
        <LinkContainer>
          <Link>Forget Password ?</Link>
          <Link onClick={openRegisteModal}>Create New Account</Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
