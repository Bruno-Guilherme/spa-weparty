import { createBrowserRouter } from "react-router-dom";

import LayoutSemHeader from "../shared/layouts/LayoutSemHeader";
import LayoutComHeader from "../shared/layouts/LayoutComHeader";

import { Home, Sobre } from "../pages";
import ExemploPage from "../pages/exemplo-page/ExemploPage";

import { fornecedorLoader } from "./loaders/fornecedorLoader";
import { Carrinho } from "../tests/carrinho/Carrinho";
import Fornecedores from "../pages/fornecedores/Fornecedores";
import Promocoes from "../pages/promocoes/Promocoes";
import Servicos from "../pages/servicos/Servicos";
import ProductList from "../pages/productList/ProductList";
import mockProducts from "../shared/mocks/mockProduto";

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
          element: <Promocoes />,
        },
        {
          path: "fornecedores",
          element: <Fornecedores />,
        },
        {
          path: "servicos",
          element: <ProductList products={mockProducts}  />,
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