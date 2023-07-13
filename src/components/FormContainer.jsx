import searchIcon from "../assets/Images/Combined Shape.svg";
import styled from "styled-components";
import { breakpoints } from "../assets/themes/themes";

const FormContainer = (props) => {
  return (
    <Form modetheme={props.modetheme} errormessage={props.errorMessage}>
      <img src={searchIcon} alt="search icon" />
      <div>
        <input
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        <span>{props.errorMessage}</span>
      </div>
      <button type={props.type} onClick={props.onClick}>
        Search
      </button>
    </Form>
  );
};
const Form = styled.form`
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
export default FormContainer;
