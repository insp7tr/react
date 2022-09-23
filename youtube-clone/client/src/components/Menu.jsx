import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import {
  MdHome,
  MdExplore,
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdLibraryMusic,
  MdOutlineSportsBasketball,
  MdOutlineLocalMovies,
  MdLiveTv,
  MdSettings,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { IoLogoGameControllerA, IoMdHelpCircleOutline } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import { VscReport } from "react-icons/vsc";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            PancakeTube
          </Logo>
        </Link>
        <Item>
          <MdHome size={22} />
          Home
        </Item>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <MdExplore size={22} />
            Explore
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <MdOutlineSubscriptions size={22} />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <MdVideoLibrary size={22} />
          Library
        </Item>
        <Item>
          <MdHistory size={22} />
          History
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link
                to="signin"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button>
                  <MdOutlineAccountCircle size={22} /> SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>Best of PancakeTube</Title>
        <Item>
          <MdLibraryMusic size={22} />
          Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball size={22} />
          Sports
        </Item>
        <Item>
          <IoLogoGameControllerA size={22} />
          Gaming
        </Item>
        <Item>
          <MdOutlineLocalMovies size={22} />
          Movies
        </Item>
        <Item>
          <BiNews size={22} />
          News
        </Item>
        <Item>
          <MdLiveTv size={22} />
          Live
        </Item>
        <Hr />
        <Item>
          <MdSettings size={22} />
          Settings
        </Item>
        <Item>
          <VscReport size={22} />
          Report
        </Item>
        <Item>
          <IoMdHelpCircleOutline size={22} />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <CgDarkMode size={22} />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 10px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
