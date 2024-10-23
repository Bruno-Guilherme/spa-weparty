import { createBrowserRouter } from "react-router-dom";
import { Home, Sobre } from "../pages";

const router = createBrowserRouter([
    {
      element: <LayoutComHeader />, // Layout com header
      children: [
        {
          path: "/", // Rota raiz
          element: <Home />,
        },
        {
          path: "/about", // Rota sobre
          element: <Sobre />,
        },
        {
          path: "/cadastro", // Rota de cadastro
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

  export default router;