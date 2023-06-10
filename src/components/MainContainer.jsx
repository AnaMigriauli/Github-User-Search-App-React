import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import darkmode from "../assets/Images/Path.svg";
import searchIcon from "../assets/Images/Combined Shape.svg";
import homeTown from "../assets/Images/Shape.svg";
import link from "../assets/Images/002-url.svg";
import twitter from "../assets/Images/Path1.svg";
import officeBuilding from "../assets/Images/001-office-building.svg";
const MainContainer = () => {
  const profileDefoult = axios
    .get("https://api.github.com/users/octocat")
    .then((resp) => setDefoultData(resp.data));
  const [username, setUsername] = useState("");
  const [data, setData] = useState({ profileDefoult });
  const [defoultData, setDefoultData] = useState("");
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (username) {
      const profile = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const profileJson = await profile.data;
      if (profileJson) {
        setData(profileJson);
        console.log(profileJson);
      }
      setUsername("");
    }
  };

  let Image = defoultData.avatar_url;
  if (data.avatar_url) {
    Image = data.avatar_url;
  }
  let Login = defoultData.login;
  if (data.login) {
    Login = data.login;
  }
  let Name = defoultData.name;
  if (data.name) {
    Name = data.name;
  } else if (data.name == null) {
    Name = "Not Available";
  }
  let joined = defoultData.created_at;
  if (data.created_at) {
    joined = data.created_at;
  }
  let Bio = defoultData.bio;
  if (data.bio) {
    Bio = data.bio;
  } else if (data.bio === null) {
    Bio = "Not Available";
  }

  let Repository = defoultData.public_repos;

  if (data.public_repos) {
    Repository = data.public_repos;
  } else if (data.public_repos == null) {
    Repository = "Not Available";
  }
  let Followers = defoultData.followers;
  if (data.followers) {
    Followers = data.followers;
  } else if (data.followers === 0) {
    Followers = 0;
  }
  let Following = defoultData.following;
  if (data.following) {
    Following = data.following;
  } else if (data.following === 0) {
    Following = 0;
  }
  let Location = "San Francisco";
  if (data.location) {
    Location = data.location;
  } else if (data.location == null) {
    Location = "Not Available";
  }
  let Blog = defoultData.blog;
  if (data.blog) {
    Blog = data.blog;
  }
  let Twitter = defoultData.twitter_username;
  if (data.twitter_username) {
    Twitter = data.twitter_username;
  } else if (data.twitter_username === null) {
    Twitter = "Not Available";
  }
  let Company = defoultData.company;
  if (data.company) {
    Company = data.company;
  }
  return (
    <ContainerStyled>
      <HeaderStyled>
        <h1>devfinder</h1>
        <button>
          <span>DARK</span>
          <img src={darkmode} alt="dark mode" />
        </button>
      </HeaderStyled>
      <InputStyled>
        <img src={searchIcon} alt="search icon" />
        <input
          value={username}
          onChange={onChangeHandler}
          placeholder="Search GitHub username..."
        />
        <button type="submit" onClick={submitHandler}>
          Search
        </button>
      </InputStyled>
      <UserCardStyled>
        <UserHolder>
          <img src={Image} alt="octocat" />
          <div>
            <h3>{Name}</h3>
            <p>{Login}</p>
            <span>{joined}</span>
          </div>
        </UserHolder>
        <p>Bio:{Bio}</p>
        <UserBox>
          <div>
            Repos
            <h3>{Repository}</h3>
          </div>
          <div>
            Followers
            <h3>{Followers}</h3>
          </div>
          <div>
            Following
            <h3>{Following}</h3>
          </div>
        </UserBox>

        <UserInfo>
          <div>
            <img src={homeTown} alt="home town" />
            {Location}
          </div>
          <div>
            <img src={link} alt="link" />
            {Blog}
          </div>
          <div>
            <img src={twitter} alt="home town" />
            {Twitter}
          </div>
          <div>
            <img src={officeBuilding} alt="company" />
            {Company}
          </div>
        </UserInfo>
      </UserCardStyled>
    </ContainerStyled>
  );
};
const ContainerStyled = styled.div`
  min-width: 375px;
  padding: 31px 24px 79px 24px;
  background-color: #f2f2f2;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin: 35px 0 16px 0;
  background-color: #fefefe;
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

const UserCardStyled = styled.div`
  padding: 33px 24px 49px 24px;
  background-color: #fefefe;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  p {
    font-size: 13px;
    font-weight: 400;
    color: #4b6a9b;
    margin-bottom: 23px;
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
    color: #2b3442;
  }
  p {
    font-size: 13px;
    font-weight: 400;
    color: #0079ff;
    margin-bottom: 6px;
  }
  span {
    font-size: 13px;
    font-weight: 400;
    color: #697c9a;
  }
`;
const UserBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f6f8ff;
  border-radius: 10px;
  padding: 18px 14px 19px 15px;
  div {
    font-size: 11px;
    font-weight: 400;
    color: #4b6a9b;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 8px;
    text-align: center;
    color: #2b3442;
  }
`;
const UserInfo = styled.div`
  margin-top: 24px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  div {
    display: flex;
    gap: 15px;
  }
`;
export default MainContainer;
