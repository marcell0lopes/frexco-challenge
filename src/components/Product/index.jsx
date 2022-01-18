import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import useStyles from './styles.js';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product }) => {
  const [nutritionVisibility, setNutritionVisibility] = useState(false);
  const classes = useStyles();

  const toggleShowValues = () => {
    setNutritionVisibility(!nutritionVisibility);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          className={classes.familyName}
          sx={{ fontSize: 8 }}
          gutterBottom
        >
          {product.family}
        </Typography>
        <Typography className={classes.productName} variant="h4">
          {product.name}
        </Typography>
        {nutritionVisibility && (
          <Typography className={classes.nutritions} variant="body2">
            <strong>Carbohydrates:</strong> {product.nutritions.carbohydrates}
            <br />
            <strong>Protein:</strong> {product.nutritions.protein}
            <br />
            <strong>Fat: </strong>
            {product.nutritions.fat}
            <br />
            <strong>Calories:</strong> {product.nutritions.calories}
            <br />
            <strong>Sugar:</strong> {product.nutritions.sugar}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <Button className={classes.showButton} onClick={toggleShowValues}>
          {!nutritionVisibility ? '+' : '-'} Nutrition Values
        </Button>
        <IconButton>
          <AddShoppingCart color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
