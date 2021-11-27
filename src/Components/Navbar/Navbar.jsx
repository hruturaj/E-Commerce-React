import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Register from "../../Components/Register/Register";
import Signup from "../../Components/Signup/Signup";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: 800;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 12px;
`;

const Languages = styled.span`
  font-style: 14px;
  cursor: pointer;
`;

const Navbar = (styled) => {
  const [register, registerClick] = useState(false);
  const [signIn, signInClick] = useState(false);

  // can used to stop scrolling when modal is loaded
  // useEffect(() => {
  //   if (register) {
  //     document.body.style.overflowY = "hidden";
  //     console.log("hidden");
  //   } else {
  //     document.body.style.overflow = "unset";
  //     console.log("unset");
  //   }
  // });

  const registerModelOpen = () => {
    registerClick(true);
  };

  const signInModelOpen = () => {
    signInClick(true);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Languages>EN</Languages>
            <SearchContainer>
              <Input />
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>.RE-NO-JS.</Logo>
          </Center>
          <Right>
            <MenuItem onClick={registerModelOpen}>Register</MenuItem>
            <MenuItem onClick={signInModelOpen}>Sign In</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
      {register ? <Register registerClick={registerClick} /> : null}
      {signIn ? (
        <Signup signInClick={signInClick} registerClick={registerClick} />
      ) : null}
    </div>
  );
};

export default Navbar;
