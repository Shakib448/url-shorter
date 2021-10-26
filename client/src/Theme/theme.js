import { createTheme } from "@mui/material/styles";

// Font family
const font = "'Poppins', sans-serif";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },

    background: {
      default: "#FAF9F6",
    },
  },
  typography: {
    fontFamily: font,
  },
});

export default theme;
