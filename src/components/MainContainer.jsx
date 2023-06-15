import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import moon from "../assets/Images/Path.svg";
import sun from "../assets/Images/002-sun.svg";
import searchIcon from "../assets/Images/Combined Shape.svg";
import homeTown from "../assets/Images/Shape.svg";
import link from "../assets/Images/002-url.svg";
import twitter from "../assets/Images/Path1.svg";
import officeBuilding from "../assets/Images/001-office-building.svg";
import { breakpoints } from "../assets/themes/themes";
import { DefaultColors } from "../assets/themes/themes";

const baseUrl = axios.create({
  baseURL: "https://api.github.com/users/",
});

const MainContainer = (props) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [modeTheme, setModeTheme] = useState(
    localStorage.getItem("mode") || "light"
  );
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    baseUrl.get("octocat").then((resp) => setUserData(resp.data));
    setErrorMessage(null);
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

  const UserInfoArr = [
    [homeTown, location],
    [link, blog],
    [twitter, twitter_username],
    [officeBuilding, company],
  ];

  console.log(typeof UserInfoArr[1][0]);
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
    setErrorMessage(null);
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (username) {
        const profile = await baseUrl.get(`${username}` || "octocat");
        const profileJson = await profile.data;
        if (profileJson) {
          setUserData(profileJson);
        }
        setUsername("");
        setErrorMessage(null);
      }
    } catch {
      setErrorMessage("No result");
    }
  };

  const modeChangeHandler = () => {
    modeTheme === "light" ? setModeTheme("dark") : setModeTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("mode", modeTheme);
  }, [modeTheme]);

  return (
    <BackgroundContainer modetheme={modeTheme}>
      <Container>
        <Header modetheme={modeTheme}>
          <h1>devfinder</h1>
          <button onClick={modeChangeHandler}>
            <span>{modeTheme === "light" ? "dark " : "light"}</span>
            <img
              src={modeTheme === "light" ? moon : sun}
              alt={modeTheme === "light" ? "dark " : "light"}
            />
          </button>
        </Header>
        <Input modetheme={modeTheme} errormessage={errorMessage}>
          <img src={searchIcon} alt="search icon" />
          <div>
            <input
              value={username}
              onChange={onChangeHandler}
              placeholder="Search GitHub username..."
            />
            <span>{errorMessage}</span>
          </div>
          <button type="submit" onClick={submitHandler}>
            Search
          </button>
        </Input>
        <UserCard modetheme={modeTheme}>
          <UserHolder modetheme={modeTheme}>
            <img src={avatar_url} alt="octocat" />
            <div>
              <h3>{name}</h3>
              <p>@{login}</p>
              <span>Joined {moment(created_at).format("ll")}</span>
            </div>
          </UserHolder>
          <Bio modetheme={modeTheme}>
            <p>{bio || "This profile has no bio"}</p>
          </Bio>

          <UserBox modetheme={modeTheme}>
            <span> Repos</span>
            <span> Followers</span>
            <span> Following</span>
            <h3>{public_repos}</h3>
            <h3>{followers}</h3>
            <h3>{following}</h3>
          </UserBox>

          <UserInfo modetheme={modeTheme}>
            {UserInfoArr.map((a, index) => (
              <div key={index}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: `${
                      modeTheme === "light"
                        ? DefaultColors.colors.dark.steel
                        : DefaultColors.colors.light.white1
                    }`,
                    WebkitMask: `url(${a[0]}) no-repeat center`,
                    mask: `url(${a[0]}) no-repeat center`,
                  }}
                ></div>
                <p> {a[1] || "Not Available"}</p>
              </div>
            ))}
          </UserInfo>
        </UserCard>
      </Container>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme, modetheme }) =>
    modetheme === "light"
      ? theme.colors.light.ivory
      : theme.colors.dark.darkBlue};
  transition: 0.5s all ease-in-out;
`;
const Container = styled.div`
  font-family: "Space Mono", monospace;
  padding: 31px 24px 79px 24px;
  width: 375px;
  @media (min-width: ${breakpoints.medium}) {
    width: 573px;
    /* padding: 140px 98px 236px 97px; */
  }
  @media (min-width: ${breakpoints.large}) {
    width: 730px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 123px;
  align-items: center;

  h1 {
    color: ${({ theme, modetheme }) =>
      modetheme === "light"
        ? theme.colors.light.midnightExpress
        : theme.colors.dark.white1};
    transition: 0.5s all ease-in-out;
    font-size: 26px;
    font-weight: 700;
  }
  button {
    align-items: center;
    display: flex;
    border: none;
    background: none;
    gap: 16px;

    span {
      color: ${({ theme, modetheme }) =>
        modetheme === "light"
          ? theme.colors.light.steel
          : theme.colors.dark.white1};
      transition: 0.5s all ease-in-out;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      &:hover {
        color: ${({ theme, modetheme }) =>
          modetheme === "light"
            ? theme.colors.light.midnightExpress
            : theme.colors.dark.lightSteel};
      }
    }
  }
  @media (min-width: ${breakpoints.medium}) {
    gap: 369px;
    h1 {
      font-size: 26px;
    }
  }
  @media (min-width: ${breakpoints.large}) {
    gap: 526px;
  }
`;

const Input = styled.form`
  display: flex;
  width: 327px;
  height: 60px;
  border-radius: 15px;
  margin: 35px 0 16px 0;
  background-color: ${({ theme, modetheme }) =>
    modetheme === "light"
      ? theme.colors.light.white
      : theme.colors.dark.purple};
  transition: 0.5s all ease-in-out;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

  img {
    width: 20.05px;
    height: 20px;
    margin: 20px 8.95px 20px 16px;
  }
  div {
    position: relative;
    span {
      font-size: 15px;
      font-weight: 700;
      line-height: 22.22px;
      position: absolute;
      right: 3px;
      bottom: 20px;
      color: ${({ theme }) => theme.colors.brightRed};
    }
    input {
      width: 184px;
      margin-top: 18px;
      margin-bottom: 17px;
      border: none;
      outline: none;
      font-weight: 400;
      font-size: 13px;
      color: ${({ theme, modetheme }) =>
        modetheme === "light"
          ? theme.colors.light.midnightExpress
          : theme.colors.dark.white1};
      background-color: ${({ theme, modetheme }) =>
        modetheme === "light"
          ? theme.colors.light.white
          : theme.colors.dark.purple};
      transition: 0.5s all ease-in-out;
      caret-color: ${({ theme }) => theme.colors.light.dadgerBlue};
      &::placeholder {
        color: ${({ theme, modetheme }) =>
          modetheme === "light"
            ? theme.colors.light.steel
            : theme.colors.dark.white1};
        transition: 0.5s all ease-in-out;
      }
      &:focus {
        font-size: 13px;
        color: ${({ theme, modetheme }) =>
          modetheme === "light"
            ? theme.colors.light.midnightExpress
            : theme.colors.dark.white1};
        transition: 0.5s all ease-in-out;
      }
    }
  }

  button {
    background-color: ${({ theme, errormessage }) =>
      !errormessage ? theme.colors.light.dadgerBlue : theme.colors.brightBlu};
    color: ${({ theme }) => theme.colors.light.white1};
    transition: 0.5s all ease-in-out;
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
    &:hover {
      background-color: ${({ theme }) => theme.colors.brightBlu};
    }
  }
  @media (min-width: ${breakpoints.medium}) {
    width: 573px;
    height: 69px;
    border-radius: 15px;
    margin: 35px 0 24px 0;
    img {
      width: 24.06px;
      height: 24px;
      margin: 23px 24px 22px 32px;
    }
    div {
      width: 354px;
      input {
        width: 254px;
        height: 25px;
        margin-top: 22px;
        margin-bottom: 22px;
        font-size: 18px;

        &:focus {
          font-size: 18px;
        }
      }
    }
    button {
      font-size: 16px;
      width: 106px;
      height: 50px;
      margin: 9.5px 10px 9.5px 23px;
    }
  }
  @media (min-width: ${breakpoints.large}) {
    width: 730px;
    div {
      width: 504px;
    }
    button {
      margin: 9.5px 10px 9.5px 30px;
    }
  }
`;

const UserCard = styled.div`
  width: 327px;
  height: 517px;
  padding: 33px 24px 49px 24px;
  background-color: ${({ theme, modetheme }) =>
    modetheme === "light"
      ? theme.colors.light.white
      : theme.colors.dark.purple};
  transition: 0.5s all ease-in-out;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  @media (min-width: ${breakpoints.medium}) {
    width: 573px;

    padding: 40px;
  }
  @media (min-width: ${breakpoints.large}) {
    width: 730px;

    padding: 48px;
  }
`;
const Bio = styled.div`
  p {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme, modetheme }) =>
      modetheme === "light"
        ? theme.colors.light.steel
        : theme.colors.dark.white1};
    transition: 0.5s all ease-in-out;
    margin-bottom: 23px;
    line-height: 25px;
  }
  @media (min-width: ${breakpoints.medium}) {
    font-size: 15px;
  }
  @media (min-width: ${breakpoints.large}) {
    margin-left: 154px;
  }
`;
const UserHolder = styled.div`
  display: flex;
  gap: 19px;
  margin-bottom: 33px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme, modetheme }) =>
      modetheme === "light"
        ? theme.colors.light.licorice
        : theme.colors.dark.white1};
    transition: 0.5s all ease-in-out;
  }
  p {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light.dadgerBlue};
    margin-bottom: 6px;
  }
  span {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme, modetheme }) =>
      modetheme === "light"
        ? theme.colors.light.stone
        : theme.colors.dark.white1};
    transition: 0.5s all ease-in-out;
  }
  @media (min-width: ${breakpoints.medium}) {
    gap: 41px;
    margin-bottom: 38px;
    img {
      width: 117px;
      height: 117px;
    }
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 16px;
    }
    span {
      font-size: 15px;
    }
  }
  @media (min-width: ${breakpoints.large}) {
    gap: 37px;
    margin: 0;
  }
`;

const UserBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  row-gap: 8px;
  text-align: center;
  background-color: ${({ theme, modetheme }) =>
    modetheme === "light"
      ? theme.colors.light.ivory
      : theme.colors.dark.darkBlue};
  transition: 0.5s all ease-in-out;
  border-radius: 10px;
  padding: 18px 14px 19px 15px;
  span {
    font-size: 11px;
    font-weight: 400;
    color: ${({ theme, modetheme }) =>
      modetheme === "light"
        ? theme.colors.light.steel
        : theme.colors.dark.white1};
    transition: 0.5s all ease-in-out;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme, modetheme }) =>
      modetheme === "light"
        ? theme.colors.light.licorice
        : theme.colors.dark.white1};
    transition: 0.5s all ease-in-out;
  }
  @media (min-width: ${breakpoints.medium}) {
    padding: 15px 96px 17px 32px;
    text-align: left;
    span {
      font-size: 13px;
    }
    h3 {
      font-size: 22px;
    }
  }
  @media (min-width: ${breakpoints.large}) {
    margin-left: 154px;
    padding: 15px 83px 17px 32px;
    margin-top: 37px;
  }
`;

const UserInfo = styled.div`
  margin-top: 24px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 17px;

  div:nth-child(2) {
    p:hover {
      text-decoration: underline;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 15px;
    p {
      font-size: 13px;
      font-weight: 400;
      color: ${({ theme, modetheme }) =>
        modetheme === "light"
          ? theme.colors.light.steel
          : theme.colors.dark.white1};
      transition: 0.5s all ease-in-out;
    }
  }
  @media (min-width: ${breakpoints.medium}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 15px;
    margin-top: 30px;
  }
  @media (min-width: ${breakpoints.medium}) {
    margin-left: 154px;
    margin-top: 37px;
  }
`;
export default MainContainer;
