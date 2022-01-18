import React from 'react';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import Cart from '../../components/Cart';
import { theme } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container } from '@material-ui/core';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Products />} />

            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
