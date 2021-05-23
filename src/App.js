import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import LayoutInfo from './Layout/LayoutInfo';
import LayoutSelect from './Layout/LayoutSelect';
import LayoutCalc from './Layout/LayoutCalc';
import {StoreProvider} from './hook';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          WebkitFontSmoothing: 'auto',
          margin: "0",
          padding: "0",
          fontFamily: `"Roboto", 'Noto Sans KR', "sans-serif"`,
          lineHeight: "1.43",
          color: "white",
          backgroundColor: "#5A5A5A",
          fontWeight: "400",
          fontSize: "0.875rem",
        },
        a: {
          color: "#E1831D",
          textDecoration: "none",
        },
        option: {
          color: "black",
        },
      },
    },
  },
});

function App() {
  return (
    <StoreProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutInfo />
        <LayoutSelect />
        <LayoutCalc />
      </MuiThemeProvider>
    </StoreProvider>
  );
}

export default App;
