import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Container = styled.div`
  display: flex;
  margin: 0 10px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: 800;
`;
const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;
const SocialContaner = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: stretch;
`;

const ContactIcon = styled.div`
  padding-top: 1px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.RE-NO-JS.</Logo>
        <Desc>
          There are many variations of passages Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomized words which dont look even slightly different.
        </Desc>
        <SocialContaner>
          <SocialIcon
            bg="3B5999"
            onClick={() => window.open("https://facebook.com")}
          >
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon
            bg="E4405F"
            onClick={() => window.open("https://instagram.com")}
          >
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon
            bg="171515"
            onClick={() => window.open("https://github.com")}
          >
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon
            bg="0E76A8"
            onClick={() => window.open("https://linkedin.com")}
          >
            <LinkedInIcon />
          </SocialIcon>
        </SocialContaner>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ContactIcon>
            <RoomIcon style={{ marginRight: "10px" }} />
          </ContactIcon>
          B-74, Shirsekar Marg, Government Colony, Bandra East, Mumbai,
          Maharashtra 400051
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <ContactsOutlinedIcon style={{ marginRight: "10px" }} />
          </ContactIcon>
          +022 - 676767
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          </ContactIcon>
          re.no.js@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
