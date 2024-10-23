import { createTheme } from "@mui/material";

export const TemaEscuro = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f44336",
      dark: "#ba000d",
      light: "#ff7961",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f51b5",
      dark: "#002984",
      light: "#7986cb",
      contrastText: "#fff",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
});
