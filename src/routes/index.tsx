import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import TaxList from '../pages/TaxList';
import ImportTaxes from '../pages/ImportTaxes';
import MainLayout from '../components/MainLayout';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/list',
        element: <TaxList />
      },
      {
        path: '/import',
        element: <ImportTaxes />
      }
    ]
  },
  
]);