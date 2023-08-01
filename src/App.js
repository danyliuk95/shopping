import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import ShoppingList from './containers/ShoppingList';
import ProductPage from './containers/ProductPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShoppingList />,
    },
    {
      path: "/products/:id",
      element: <ProductPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
