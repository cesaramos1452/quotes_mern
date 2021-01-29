import React, { useEffect, useState } from 'react';
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
  Box,
} from '@material-ui/core';
import inspire from './assets/img/liveToInspre.png';
import Form from './components/form/Form';
import Quotes from './components/quotes/Quotes';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/action-creators';
function App() {
  const [create, setCreate] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <img className={classes.image} src={inspire} alt='inspire' width='80' />
        <Typography className={classes.heading} variant='h2' align='center'>
          Live To Inspire
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid item xs={12} item sm={7}>
              <Quotes setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} item sm={4}>
              {create ? (
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              ) : null}
              <Box mt={5} ml={15}>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => setCreate(!create)}>
                  {create ? 'HIDE' : 'CREATE A QUOTE'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
