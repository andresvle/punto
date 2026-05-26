import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="layout-main" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
