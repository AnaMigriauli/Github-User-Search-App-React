import { breakpoints } from "../assets/themes/themes";
import styled from "styled-components";

const NumbersContainer = (props) => {
  return (
    <NumberInfo modetheme={props.modetheme}>
      <span>Repos</span>
      <span>Followers</span>
      <span> Following</span>
      <h3>{props.public_repos}</h3>
      <h3>{props.followers}</h3>
      <h3>{props.following}</h3>
    </NumberInfo>
  );
};
const NumberInfo = styled.div`
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
  margin-bottom: 50px;
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
export default NumbersContainer;
