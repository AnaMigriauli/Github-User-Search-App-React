import { ThemeProvider } from "styled-components";
import MainContainer from "./components/MainContainer";
import { GlobalStyles } from "./components/GlobalStyles";
import { DefaultColors } from "./assets/themes/themes";

function App() {
  return (
    <ThemeProvider theme={DefaultColors}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
