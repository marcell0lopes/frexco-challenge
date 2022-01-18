import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8bc34a',
    },
    secondary: {
      main: '#ffea00',
    },
    info: {
      main: '#fff',
    },
    success: {
      main: '#03a9f4',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />

          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
