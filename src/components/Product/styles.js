import { makeStyles } from '@material-ui/core';
import { theme } from '../../pages/Home/theme';

export default makeStyles(() => ({
  familyName: {
    color: '#e7ebf0',
    marginBottom: 1,
  },
  productName: {
    fontWeight: '600',
    color: theme.palette.success.main,
  },
  nutritions: {
    color: '#121212',
    fontSize: '0.8rem',
    lineHeight: '1.8rem',
    background: '#E7EBF0',
    padding: '0.5rem 1rem',
    marginTop: '1rem',
    borderRadius: '0.25rem',
  },
}));
