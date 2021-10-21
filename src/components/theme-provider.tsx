import { ThemeProvider as Provider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import React from "react";
import { PropsWithChildren } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'React', sans-serif",
    h4: {
      fontSize: 25,
      fontWeight: "bold",
      marginBlock: "10px",
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#fff",
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#111",
      },
    },
    MuiButton: {
      root: {
        borderRadius: 10,
      },
      containedSizeLarge: {
        minWidth: 200,
        padding: "14px 40px",
        borderRadius: 20,
        "& $label": {
          fontSize: 18,
        },
      },
      label: {
        lineHeight: "21px",
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: "0.0125em",
        textTransform: "capitalize",
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
});

export function ThemeProvider({ children }: PropsWithChildren<any>) {
  return <Provider theme={theme}>{children}</Provider>;
}
