import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  DeprecatedThemeOptions,
  Theme as MuiTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { enUS as en, trTR as tr } from "@mui/material/locale";
import { Theme } from "../themes/types";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends MuiTheme {}
}

const locales = {
  en,
  tr,
};

interface ReduxThemeProviderProps {
  themes: Record<Theme, DeprecatedThemeOptions>;
}

const ReduxThemeProvider = ({
  children,
  themes,
}: React.PropsWithChildren<ReduxThemeProviderProps>): React.ReactElement => {
  const theme = useSelector((state) => state.theme);
  const locale = useSelector((state) => state.locale);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(themes[theme], locales[locale])}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ReduxThemeProvider;
