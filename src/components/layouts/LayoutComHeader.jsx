import { Outlet } from "react-router-dom";

const LayoutComHeader = () => {
  return (
    <>
      <header>
        <p>menu hamburguer</p>
        <h1>WeParty</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
          </ul>
        </nav>
        <input type="text" name="inp-buscar" id="inp-buscar" placeholder="pesquisar no WeParty"/>

        <p>entrar</p>

        <p>carrinho</p>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2024 WeParty</p>
      </footer>
    </>
  );
};

export default LayoutComHeader;
