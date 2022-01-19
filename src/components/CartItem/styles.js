import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  itemName: {
    fontWeight: 'bold',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '250px',
  },
}));
