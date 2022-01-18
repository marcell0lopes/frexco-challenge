import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import Product from '../Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  const fetchProduct = async () => {
    const response = await fetch('https://www.fruityvice.com/api/fruit/all');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {!products.length && (
        <Typography variant="h4" align="center">
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
