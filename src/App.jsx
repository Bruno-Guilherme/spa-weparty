import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContexts";

// Definindo as rotas usando createBrowserRouter

function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
}

export default App;
