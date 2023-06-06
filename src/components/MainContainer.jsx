import React from "react";
import styled from "styled-components";
import darkmode from "../assets/Images/Path.svg";
import searchIcon from "../assets/Images/Combined Shape.svg";
import octocat from "../assets/Images/Oval.svg";

const MainContainer = () => {
  return (
    <Container>
      <HeaderStyled>
        <h1>devfinder</h1>
        <button>
          <span>DARK</span>
          <img src={darkmode} alt="dark mode" />
        </button>
      </HeaderStyled>
      <InputStyled>
        <img src={searchIcon} alt="search icon" />
        <input placeholder="Search GitHub username..." />
        <button>Search</button>
      </InputStyled>
      <div>
        <div>
          <img src={octocat} alt="octocat" />
          <div>
            <h3>The Octocat</h3>
            <p>@octocat</p>
            <span>Joined 25 Jan 2011</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  min-width: 375px;
  padding: 31px 24px 79px 24px;
  background-color: #f2f2f2;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;

  h1 {
    /* color: ${({ theme }) => theme.black}; */
    font-size: 26px;
    font-weight: 700;
  }
  button {
    align-items: center;
    display: flex;
    border: none;
    background-color: transparent;
    gap: 16px;
  }
`;

const InputStyled = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #fefefe;
  img {
    width: 20.05px;
    height: 20px;
    margin: 20px 8.95px 20px 16px;
  }
  input {
    width: 184px;
    height: 25px;
    margin-top: 18px;
    margin-bottom: 17px;
    border: none;
    outline: none;
  }
  input::placeholder {
    color: #4b6a9b;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
  }
  button {
    background-color: #0079ff;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    line-height: 20.73px;
    text-align: center;
    width: 84px;
    height: 46px;
    margin: 6.5px 7px 7.5px 7px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

export default MainContainer;
