import React, { useContext } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  const { cart } = useContext(CartContext);

  return (
    <Box m={0} sx={{ flexGrow: 1 }}>
      <AppBar className={classes.navBar} position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.navLogo}
            component={Link}
            to="/"
            variant="h4"
            sx={{ flexGrow: 1 }}
          >
            Frexco
          </Typography>
          <div className={classes.navLinks}>
            <Typography
              className={classes.navLink}
              component={Link}
              to="/"
              variant="subtitle1"
              sx={{ flexGrow: 1 }}
            >
              Produtos
            </Typography>
            <Typography
              className={classes.navLink}
              component={Link}
              to="/cart"
              variant="subtitle1"
              sx={{ flexGrow: 1 }}
            >
              Shopping Cart
            </Typography>
          </div>
          {location.pathname === '/' && (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                className={classes.cartIcon}
              >
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
