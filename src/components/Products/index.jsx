import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

import useStyles from './styles.js';
import Product from '../Product';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container align="center" gutterBottom>
        <Button
          component={Link}
          to="/cart"
          size="small"
          variant="contained"
          color="secondary"
          endIcon={<ShoppingCartOutlined fontSize="small" />}
        >
          Shopping Cart
        </Button>
      </Container>
      <div className={classes.toolbar} />
      <ToastContainer />

      {!products.length && (
        <Typography variant="h6" align="center">
          Loading Products...
        </Typography>
      )}

      <Grid container justifyContent="center" spacing={6}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
