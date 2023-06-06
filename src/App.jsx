// import React, { ThemeProvider } from "react";
import { Fragment } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { GlobalStyles } from "./components/GlobalStyles";

// import { DefaultColors } from "./assets/themes/Themes";

function App() {
  return (
    // <ThemeProvider theme={DefaultColors}>
    <Fragment>
      <GlobalStyles />
      <MainContainer />
    </Fragment>
    // </ThemeProvider>
  );
}

export default App;
