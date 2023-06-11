import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0 ;
    padding:0;
   box-sizing:border-box;

  };


  @font-face {
  font-family: "SpaceMono-Bold";
  src: url("./assets/fonts/SpaceMono-Regular.ttf");
}

@font-face {
  font-family: "SpaceMono-Bold";
  src: url("./assets/fonts/SpaceMono-Bold.ttf");
}

`;
