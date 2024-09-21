import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";

import { purpleTheme } from "./purpleTheme";

export const AppTheme = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
