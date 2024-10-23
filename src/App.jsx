import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LayoutComHeader from "./components/layouts/LayoutComHeader";
import LayoutSemHeader from "./components/layouts/LayoutSemHeader";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import CreateUserComponent from "./tests/conexaoBack";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas com o header */}
        <Route path="/" element={<LayoutComHeader />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cadastro" element={<CreateUserComponent>Contact</CreateUserComponent>} />
        </Route>

        {/* Rotas sem o header */}
        <Route path="/" element={<LayoutSemHeader />}>
          <Route path="login" element={<h1>Login</h1>} />
          <Route path="register" element={<h1>Registrar</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
