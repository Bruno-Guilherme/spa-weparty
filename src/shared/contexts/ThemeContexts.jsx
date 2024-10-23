import { createContext, useCallback, useMemo, useState } from "react";
import { TemaClaro, TemaEscuro } from "../themes";
import { Box, ThemeProvider } from "@mui/material";

// Criaçaõ do contexto
const ThemeContext = createContext();

// Exportação do contexto
export const useAppThemeContext = () => useContext(ThemeContext);

// Layout do contexto

export const AppThemeProvider = ({ children }) => {
  // Estado que indica o nome do tema atual
  const [themeName, setTheme] = useState("claro");

  // Manipulador do tema.
  const toggleTheme = useCallback(
    () => setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro")),
    []
  );

  // Mudança de tema
  const theme = useMemo(() => (themeName === "claro" ? TemaClaro : TemaEscuro), []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            bgcolor: theme.palette.background.default,
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
