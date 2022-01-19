import {
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { Remove, Add } from '@material-ui/icons';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/index.js';

import useStyles from './styles.js';

const CartItem = ({ item }) => {
  const classes = useStyles();
  const { handleRemoveItemFromCart, handleAddItemToCart } =
    useContext(CartContext);
  return (
    <Card className={classes.cartItem}>
      <CardContent>
        <Typography className={classes.itemName}>
          {item.name}{' '}
          <span className={classes.itemQty}>{item.qty && `x ${item.qty}`}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleAddItemToCart(item)}>
          <Add />
        </IconButton>
        <IconButton onClick={() => handleRemoveItemFromCart(item)}>
          <Remove />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CartItem;