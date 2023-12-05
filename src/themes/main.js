import { createTheme, responsiveFontSizes } from "@mui/material";

const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Zen Dots", "Roboto", "sans-serif"].join(","),
    subtitle1: {
      fontWeight: 100,
    },
    body1: {
      fontWeight: "bold",
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 500,
      lg: 900,
      xl: 1200,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "Zen Dots";
        font-style: normal;
        src: url(/ZenDots-Regular.ttf) format(truetype);
      }
      `,
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#0000ff",
            ":hover": {
              backgroundColor: "red",
            },
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});

let theme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#008000",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        color: "secondary",
      },

      variants: [
        ...(defaultTheme.components?.MuiButton?.variants ?? []),
        {
          props: {
            variant: "outlined",
            color: "secondary",
          },
          style: {
            padding: "14px 10px",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
