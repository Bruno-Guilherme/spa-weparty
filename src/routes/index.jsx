import { createBrowserRouter } from "react-router-dom";

import LayoutSemHeader from "../shared/layouts/LayoutSemHeader";
import LayoutComHeader from "../shared/layouts/LayoutComHeader";

import { Home, Sobre } from "../pages";
import ExemploPage from "../pages/exemplo-page/ExemploPage";

import { fornecedorLoader } from "./loaders/fornecedorLoader";
import { Carrinho } from "../tests/carrinho/Carrinho";

const router = createBrowserRouter([
    {
      element: <LayoutComHeader />, // Layout com header
      children: [
        {
          path: "/", 
          loader: fornecedorLoader,
          element: <Home />,
        },
        {
          path: "promocoes",
          element: <ExemploPage />,
        },
        {
          path: "fornecedores",
          element: <ExemploPage />,
        },
        {
          path: "servicos",
          element: <ExemploPage />,
        },
        {
          path: "carrinho",
          element: <Carrinho />,
        },
        {
          path: "exemplo-header",
          element: <ExemploPage />,
        },
        {
          path: "sobre", // Rota sobre
          element: <Sobre />,
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
          path: "cadastro",
          element: <h1>Registrar</h1>,
        },
        {
          path: "exemplo",
          element: <Carrinho />,
        }
      ],
    },
  ]);

  export default router;