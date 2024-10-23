import { Outlet } from 'react-router-dom';

const LayoutSemHeader = () => {
  return (
    <>
      <main>
        {/* Sem header, mas mantendo o Outlet para a renderização das páginas */}
        <Outlet />
      </main>
      <footer>
        <p>© 2024 WeParty</p>
      </footer>
    </>
  );
};

export default LayoutSemHeader;
