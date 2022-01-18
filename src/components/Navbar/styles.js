import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navBar: {
    width: '100%',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },

  navLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginRight: '20rem',
    '&:hover': {
      borderBottom: '2px solid white',
    },
  },

  cartIcon: {
    display: 'block',
    color: 'rgba(255,255,255,0.8)',
  },

  grow: {
    flexGrow: 1,
  },
}));
