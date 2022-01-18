import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';

import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {product.family}
        </Typography>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">
          Carbohydrates: {product.nutritions.carbohydrates}
          <br />
          Protein: {product.nutritions.protein}
          <br />
          Fat: {product.nutritions.fat}
          <br />
          Calories: {product.nutritions.calories}
          <br />
          Sugar: {product.nutritions.sugar}
          <br />
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
