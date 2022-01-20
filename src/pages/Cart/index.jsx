import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import useStyles from './styles.js';
import { CartContext } from '../../contexts/CartContext/index.js';
import CartItem from '../../components/CartItem/index.jsx';
import { ToastContainer } from 'react-toastify';

const Cart = () => {
  const classes = useStyles();
  const { cart, clearCart } = useContext(CartContext);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ToastContainer />
      {!cart.length ? (
        <Container>
          <Typography variant="h6" align="center">
            Cart is Empty! {''}
            <Link to="/">Go back </Link>and add some items.
          </Typography>
        </Container>
      ) : (
        <>
          <div className={classes.cartResume}>
            <Card>
              <CardContent className={classes.cartInfos}>
                <Typography variant="h4" gutterBottom>
                  Your Shopping Cart:
                </Typography>
                <Typography>Total items: {cart.length}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={clearCart}
                >
                  Empty Cart
                </Button>
                <Button variant="contained" color="primary">
                  Checkout
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Grid container justifyContent="flex-start" spacing={2}>
              {cart.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                  <CartItem key={item.id} item={item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
