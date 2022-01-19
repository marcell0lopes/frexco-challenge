import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import Cart from '../Cart';
import { theme } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container, Button, Box } from '@material-ui/core';
import { CartProvider } from '../../contexts/CartContext';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch('https://www.fruityvice.com/api/fruit/all');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Router>
          <Navbar />
          <Container>
            <Routes>
              <Route
                exact
                path="/"
                element={<Products products={products} />}
              />

              <Route
                exact
                path="/cart"
                element={<Cart products={products} />}
              />
            </Routes>
          </Container>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
