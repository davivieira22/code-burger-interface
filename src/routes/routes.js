import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './private-route';
import { Home, Login, Registro, Products, Cart, Admin } from '../containers';
import paths from '../constants/paths';

export const router = createBrowserRouter([
       {
        path: '/',
        element: <PrivateRoute element={<Home />} />,
    },
    {
        path: paths.Products,
        element: <PrivateRoute element={<Admin />} />,
    },
    {
        path: paths.Order,
        element: <PrivateRoute element={<Admin />} />,
    },
    {
        path: '/produtos',
        element: <Products />,
    },
    {
        path: '/carinho',
        element: <Cart />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Registro />,
    },
]);