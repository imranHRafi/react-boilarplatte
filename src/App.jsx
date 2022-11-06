import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import styled from 'styled-components';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
// const Container = styled.div`
//   width: 100%;
//   max-width: 1440px;
//   height: 100vh;
//   margin: auto;
// `;

export default App;
