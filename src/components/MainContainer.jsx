import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import moon from "../assets/Images/Path.svg";
import sun from "../assets/Images/002-sun.svg";
import searchIcon from "../assets/Images/Combined Shape.svg";
import homeTown from "../assets/Images/Shape.svg";
import link from "../assets/Images/002-url.svg";
import twitter from "../assets/Images/Path1.svg";
import officeBuilding from "../assets/Images/001-office-building.svg";

const baseUrl = axios.create({
  baseURL: "https://api.github.com/users/",
});

const MainContainer = (props) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [modeTheme, setModeTheme] = useState("light");
  useEffect(() => {
    baseUrl.get("octocat").then((resp) => setUserData(resp.data));
  }, []);

  let {
    avatar_url,
    login,
    name,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = userData;
  console.log(bio);
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (username) {
      const profile = await baseUrl.get(`${username}` || "octocat");
      const profileJson = await profile.data;
      if (profileJson) {
        setUserData(profileJson);
        console.log(profileJson);
      }
      setUsername("");
    }
  };

  if (name === null) {
    name = "Not Available";
  }

  if (bio === null) {
    bio = " Not Available";
  }

  if (location === null) {
    location = "Not Available";
  }

  if (blog === "") {
    blog = "Not Available";
  }
  if (twitter_username === null) {
    twitter_username = "Not Available";
  }

  if (company === null) {
    company = "Not Available";
  }
  const modeChangeHandler = () => {
    modeTheme === "light" ? setModeTheme("dark") : setModeTheme("light");
  };
  return (
    <Container modeTheme={modeTheme}>
      <Header modeTheme={modeTheme}>
        <h1>devfinder</h1>
        <button onClick={modeChangeHandler}>
          <span>{modeTheme === "light" ? "dark " : "light"}</span>
          <img
            src={modeTheme === "light" ? moon : sun}
            alt={modeTheme === "light" ? "dark " : "light"}
          />
        </button>
      </Header>
      <Input modeTheme={modeTheme}>
        <img src={searchIcon} alt="search icon" />
        <input
          modeTheme={modeTheme}
          value={username}
          onChange={onChangeHandler}
          placeholder="Search GitHub username..."
        />
        <button type="submit" onClick={submitHandler}>
          Search
        </button>
      </Input>
      <UserCard modeTheme={modeTheme}>
        <UserHolder modeTheme={modeTheme}>
          <img src={avatar_url} alt="octocat" />
          <div modeTheme={modeTheme}>
            <h3>{name}</h3>
            <p>{login}</p>
            <span>{created_at}</span>
          </div>
        </UserHolder>
        <Bio modeTheme={modeTheme}>
          <p>Bio:{bio}</p>
        </Bio>

        <UserBox modeTheme={modeTheme}>
          <div>
            <span> Repos</span>
            <h3>{public_repos}</h3>
          </div>
          <div>
            <span> Followers</span>
            <h3>{followers}</h3>
          </div>
          <div>
            <span> Following</span>
            <h3>{following}</h3>
          </div>
        </UserBox>

        <UserInfo modeTheme={modeTheme}>
          <div>
            <img src={homeTown} alt="home town" />
            <p> {location}</p>
          </div>
          <div>
            <img src={link} alt="link" />
            <p>{blog}</p>
          </div>
          <div>
            <img src={twitter} alt="home town" />
            <p> {twitter_username}</p>
          </div>
          <div>
            <img src={officeBuilding} alt="company" />
            <p>{company}</p>
          </div>
        </UserInfo>
      </UserCard>
    </Container>
  );
};

const Container = styled.div`
  min-width: 375px;
  padding: 31px 24px 79px 24px;
  background-color: ${({ theme, modeTheme }) =>
    modeTheme === "light"
      ? theme.colors.light.ivory
      : theme.colors.dark.darkBlue};
  transition: 0.5s all ease-out;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: monospace;
    color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.midnightExpress
        : theme.colors.dark.white1};
    transition: 0.5s all ease-out;
    font-size: 26px;
    font-weight: 700;
  }
  button {
    align-items: center;
    display: flex;
    border: none;
    background: none;
    gap: 16px;
    font-family: monospace;
    span {
      color: ${({ theme, modeTheme }) =>
        modeTheme === "light"
          ? theme.colors.light.steel
          : theme.colors.dark.white1};
      transition: 0.5s all ease-out;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
    }
  }
`;

const Input = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  margin: 35px 0 16px 0;
  background-color: ${({ theme, modeTheme }) =>
    modeTheme === "light"
      ? theme.colors.light.white
      : theme.colors.dark.purple};
  transition: 0.5s all ease-out;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

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
    font-family: "Space Mono";
    background-color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.white
        : theme.colors.dark.purple};
    transition: 0.5s all ease-out;
    caret-color: ${({ theme }) => theme.colors.light.dadgerBlue};
  }
  input::placeholder {
    color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.steel
        : theme.colors.dark.white1};
    transition: 0.5s all ease-out;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
    font-family: monospace;
  }
  button {
    background-color: ${({ theme }) => theme.colors.light.dadgerBlue};
    color: ${({ theme }) => theme.colors.light.white1};
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
    font-family: "Space Mono";
  }
`;

const UserCard = styled.div`
  padding: 33px 24px 49px 24px;
  background-color: ${({ theme, modeTheme }) =>
    modeTheme === "light"
      ? theme.colors.light.white
      : theme.colors.dark.purple};
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  font-family: monospace;
`;
const Bio = styled.div`
  p {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.steel
        : theme.colors.dark.white1};
    margin-bottom: 23px;
    font-family: monospace;
    line-height: 25px;
  }
`;
const UserHolder = styled.div`
  display: flex;
  gap: 19px;
  margin-bottom: 33px;
  img {
    width: 25%;
    border-radius: 50%;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.licorice
        : theme.colors.dark.white1};
    font-family: "Space Mono";
  }
  p {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light.dadgerBlue};
    margin-bottom: 6px;
    font-family: "Space Mono";
  }
  span {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.stone
        : theme.colors.dark.white1};
    font-family: monospace;
  }
`;
const UserBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme, modeTheme }) =>
    modeTheme === "light"
      ? theme.colors.light.ivory
      : theme.colors.dark.darkBlue};
  border-radius: 10px;
  padding: 18px 14px 19px 15px;
  div {
    font-size: 11px;
    font-weight: 400;
    color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.steel
        : theme.colors.dark.white1};
    font-family: monospace;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 8px;
    text-align: center;
    color: ${({ theme, modeTheme }) =>
      modeTheme === "light"
        ? theme.colors.light.licorice
        : theme.colors.dark.white1};
    font-family: "Space Mono";
  }
`;
const UserInfo = styled.div`
  margin-top: 24px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  font-family: monospace;
  div {
    display: flex;
    align-items: center;
    gap: 15px;
    img {
      color: ${({ theme, modeTheme }) =>
        modeTheme === "light" ? theme.colors.light.steel : "red"};
    }

    p {
      font-family: monospace;
      font-size: 13px;
      font-weight: 400;
      line-height: 19.23%;
      color: ${({ theme, modeTheme }) =>
        modeTheme === "light"
          ? theme.colors.light.steel
          : theme.colors.dark.white1};
    }
    &:hover p {
      text-decoration: underline;
    }
  }
`;
export default MainContainer;
