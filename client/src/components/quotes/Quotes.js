import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import Quote from '../quote/Quote';

const Quotes = () => {
  const classes = useStyles();
  const quotes = useSelector((state) => state.quotes);
  return !quotes.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}>
      {quotes.map((quote) => (
        <Grid item key={quote._id} xs={12} sm={6}>
          <Quote quote={quote} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Quotes;
