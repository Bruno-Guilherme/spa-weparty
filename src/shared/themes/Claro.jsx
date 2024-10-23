import { createTheme } from "@mui/material";

export const TemaClaro = createTheme({
  palette: {
    mode: "light",
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
      default: "#f5f5f5",
      paper: "#f7f6f3",
    },
  },
});
