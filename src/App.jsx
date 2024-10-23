import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutComHeader from "./components/layouts/LayoutComHeader";
import LayoutSemHeader from "./components/layouts/LayoutSemHeader";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import CreateUserComponent from "./tests/conexaoBack";

// Definindo as rotas usando createBrowserRouter
const router = createBrowserRouter([
  {
    element: <LayoutComHeader />, // Layout com header
    children: [
      {
        path: "/", // Rota raiz
        element: <Home />,
      },
      {
        path: "about", // Rota sobre
        element: <About />,
      },
      {
        path: "cadastro", // Rota de cadastro
        element: <CreateUserComponent />,
      },
    ],
  },
  {
    element: <LayoutSemHeader />, // Layout sem header
    children: [
      {
        path: "login", // Rota de login
        element: <h1>Login</h1>,
      },
      {
        path: "register", // Rota de registro
        element: <h1>Registrar</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
