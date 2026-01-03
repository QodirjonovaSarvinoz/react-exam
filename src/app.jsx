
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from './pages/home/HomePages';
import MenuPages from './pages/menu/MenuPages';
import Layout from './components/Layout';
import { LangProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/cart/CartPage';

const App = () => {
  return (
    <LangProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePages />} />
              <Route path="menus" element={<MenuPages />} />
               <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </LangProvider>
  );
};

export default App;
