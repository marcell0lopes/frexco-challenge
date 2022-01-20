import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';

import useStyles from './styles.js';
import Product from '../Product';

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
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
