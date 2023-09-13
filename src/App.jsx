import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {
  SharedLayout,
  ProtectedRoute,
} from './components';

import {
  Home,
  AddProduct,
  Product,
  EditProduct,
  NotFound
} from './pages';
import { user, products } from './mock/mockData.js';

const routes = [
  {
    path: '/',
    element: <SharedLayout user={user} />,
    children: [
      {
        index: true,
        element: <Home products={products} />,
      },     
      {
        path: 'add',
        element: <ProtectedRoute user={user}><AddProduct /></ProtectedRoute>,
      },
      {
        path: 'products',
        children: [
          {
            path: ':productId',
            element: <Product products={products} />,
          },
          {
            path: ':productId/edit',
            element: <ProtectedRoute user={user}><EditProduct /></ProtectedRoute>,
          },
        ],
      },     
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />    
  );
};
export default App;
