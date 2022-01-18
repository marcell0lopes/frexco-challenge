import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navBar: {
    width: '100%',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLogo: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',

    '&:hover': {
      borderBottom: '2px solid white',
    },
  },

  cartIcon: {
    marginRight: '5rem',
  },

  grow: {
    flexGrow: 1,
  },
}));
