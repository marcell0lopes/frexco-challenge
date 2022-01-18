import React from 'react';
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

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

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
          <Typography
            className={classes.navLink}
            component={Link}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Produtos
          </Typography>
          {location.pathname === '/' && (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                className={classes.cartIcon}
              >
                <Badge badgeContent={4} color="secondary">
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
