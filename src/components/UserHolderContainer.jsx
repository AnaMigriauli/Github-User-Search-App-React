import moment from "moment";
import styled from "styled-components";
import { breakpoints } from "../assets/themes/themes";

const UserHolderContainer = (props) => {
  return (
    <UserHolder modetheme={props.modetheme}>
      <img src={props.src} alt={props.alt} />
      <div>
        <h3>{props.name}</h3>
        <p>@{props.login}</p>
        {window.innerWidth > 800 || (
          <span>Joined {moment(props.created_at).format("ll")}</span>
        )}
      </div>
      {window.innerWidth <= 800 || (
        <span
          style={{
            justifySelf: "end",
            marginTop: "7px",
            marginLeft: "30px",
          }}
        >
          Joined {moment(props.created_at).format("ll")}
        </span>
      )}
    </UserHolder>
  );
};
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
    line-height: 19px;
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
      line-height: 22px;
    }
  }
  @media (min-width: ${breakpoints.large}) {
    gap: 37px;
    margin: 0;
  }
`;
export default UserHolderContainer;
