import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Register from "../../Components/Register/Register";
import SignIn from "../SignIn/SignIn";
import { useState, useEffect } from "react";
import { mobile } from "../../responsive.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";

const Container = styled.div`
  height: 60px;

  ${mobile({
    height: "50px",
    position: (props) => props.fixed && "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 30,
    backgroundColor: "white",
    boxShadow: "0px 5px 8px -8px #111",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "14px 3px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile({ marginLeft: "10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: 800;
  ${mobile({ fontSize: "17px", fontWeight: "bold" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: black;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0 12px;
  text-transform: ${(props) => props.user && "capitalize"};
  ${mobile({
    fontSize: "12px",
    margin: "0 8px",
    marginRight: (prop) => prop.type === "badge" && "15px",
  })};
`;

const Languages = styled.span`
  font-style: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Logout = styled.div``;

const Navbar = (styled) => {
  const dispatch = useDispatch();
  const [register, registerClick] = useState(false);
  const [signIn, signInClick] = useState(false);
  const [navbarFixed, setNavbarToFixed] = useState(false);

  const quantity = useSelector((state) => state.cart.cartQuantity);
  const user = useSelector((state) => state.user.currentUser);

  const logoutEvent = () => {
    logout(dispatch);
  };

  // can used to stop scrolling when modal is loaded
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 38) {
        setNavbarToFixed(true);
      } else {
        setNavbarToFixed(false);
      }
    });

    if (register || signIn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  useEffect(() => {
    registerClick(false);
    signInClick(false);
  }, [user]);

  const registerModelOpen = () => {
    registerClick(true);
  };

  const signInModelOpen = () => {
    signInClick(true);
  };

  return (
    <Container id="navbar" fixed={navbarFixed}>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
            <Logo>.RE-NO-JS.</Logo>
          </NavLink>
        </Center>
        <Right>
          {user ? (
            <>
              <MenuItem user="user">{user && user.data.username}</MenuItem>
              <MenuItem onClick={logoutEvent}>Logout</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={registerModelOpen}>Register</MenuItem>
              <MenuItem onClick={signInModelOpen}>Sign In</MenuItem>
            </>
          )}
          <NavLink
            to="/cart"
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem type="badge">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              </Badge>
            </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
      {register ? <Register registerClick={registerClick} /> : null}
      {signIn ? (
        <SignIn signInClick={signInClick} registerClick={registerClick} />
      ) : null}
    </Container>
  );
};

export default Navbar;
