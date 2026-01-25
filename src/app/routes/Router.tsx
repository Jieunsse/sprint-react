import { createBrowserRouter } from 'react-router-dom';
import Home from '../../domain/home/Home';
import ItemsPage from '@src/domain/items/pages/ItemsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/items',
    element: <ItemsPage />,
  },
]);
