import React from "react";
import styled from "styled-components";
import { MdOutlineAccountCircle, MdSearch, MdVideoCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <MdSearch size={32} />
        </Search>
        {currentUser ? (
          <User>
            <MdVideoCall size={22} />
            <Avatar src={currentUser.img} />
            {currentUser.name}
          </User>
        ) : (
          <Link
            to="signin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button>
              <MdOutlineAccountCircle size={22} /> SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;

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

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
