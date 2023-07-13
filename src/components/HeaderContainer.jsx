import React from "react";
import styled from "styled-components";
import moon from "../assets/Images/Path.svg";
import sun from "../assets/Images/002-sun.svg";
import { breakpoints } from "../assets/themes/themes";

const HeaderContainer = (props) => {
  return (
    <Header modetheme={props.modeTheme}>
      <h1>devfinder</h1>
      <button onClick={props.onClick}>
        <span>{props.modeTheme === "light" ? "dark " : "light"}</span>
        <img
          src={props.modeTheme === "light" ? moon : sun}
          alt={props.modeTheme === "light" ? "dark " : "light"}
        />
      </button>
    </Header>
  );
};
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
export default HeaderContainer;
