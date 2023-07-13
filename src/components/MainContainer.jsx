import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import homeTown from "../assets/Images/Shape.svg";
import link from "../assets/Images/002-url.svg";
import twitter from "../assets/Images/Path1.svg";
import officeBuilding from "../assets/Images/001-office-building.svg";
import { breakpoints } from "../assets/themes/themes";
import { DefaultColors } from "../assets/themes/themes";
import HeaderContainer from "./HeaderContainer";
import FormContainer from "./FormContainer";
import UserHolderContainer from "./UserHolderContainer";
import NumbersContainer from "./NumbersContainer";
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

  const onChangeHandler = (e) => {
    e.target.value.length < 25 && setUsername(e.target.value);
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
        <HeaderContainer modeTheme={modeTheme} onClick={modeChangeHandler} />
        <FormContainer
          modetheme={modeTheme}
          errormessage={errorMessage}
          value={username}
          onChange={onChangeHandler}
          placeholder={"Search GitHub username..."}
          onClick={submitHandler}
          type={"submit"}
        />
        <UserCard modetheme={modeTheme}>
          <UserHolderContainer
            modetheme={modeTheme}
            src={avatar_url}
            alt={"octocat"}
            name={name}
            login={login}
            created_at={created_at}
          />
          <Bio modetheme={modeTheme}>
            <p>{bio || "This profile has no bio"}</p>
          </Bio>
          <NumbersContainer
            modetheme={modeTheme}
            public_repos={public_repos}
            followers={followers}
            following={following}
          />
          <UserInfo modetheme={modeTheme} userinfo={UserInfoArr[1][1]}>
            {UserInfoArr.map((el, index) => (
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
                    WebkitMask: `url(${el[0]}) no-repeat center`,
                    mask: `url(${el[0]}) no-repeat center`,
                  }}
                ></div>
                <p> {el[1] || "Not Available"}</p>
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
  height: 100vh;
  background-color: ${({ theme, modetheme }) =>
    modetheme === "light"
      ? theme.colors.light.ivory
      : theme.colors.dark.darkBlue};
  transition: 0.5s all ease-in-out;
`;
const Container = styled.div`
  font-family: "Space Mono", monospace;
  width: 375px;
  @media (min-width: ${breakpoints.medium}) {
    width: 573px;
  }
  @media (min-width: ${breakpoints.large}) {
    width: 730px;
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
    height: 481px;
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
    margin-left: 155px;
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
      text-decoration: ${({ userinfo }) => (userinfo ? "underline" : "none")};
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
  @media (min-width: ${breakpoints.large}) {
    margin-left: 154px;
    margin-top: 37px;
  }
`;
export default MainContainer;
