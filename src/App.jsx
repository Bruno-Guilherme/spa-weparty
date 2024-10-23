import { RouterProvider } from "react-router-dom";
import router from "./routes";

// Definindo as rotas usando createBrowserRouter

function App() {
  return <RouterProvider router={router} />;
}

export default App;
