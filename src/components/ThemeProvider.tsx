import React, { ReactNode } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";

export const theme = createMuiTheme({});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </SCThemeProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
