import React from 'react';
import useStyles from './styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

function Quote({ quote }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        title={quote.quote}
        image={quote.selectedFile}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{quote.creator}</Typography>
        <Typography variant='body2'>{moment(quote.date).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={() => {}}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom>
          {quote.quote}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Quote;
