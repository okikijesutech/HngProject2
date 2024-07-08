import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { RatingsProvider } from "./context/RatingsContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <FavoritesProvider>
        <RatingsProvider>
          <RouterProvider router={router} />
        </RatingsProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
